import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { AdminAuthContext } from "./AdminAuthContextValue";
import type {
  AdminAuthContextValue,
  AdminUser,
} from "./adminAuth.types";

const API_BASE_URL = (
  import.meta.env.VITE_APFA_ADMIN_API_URL ||
  "http://localhost:4001"
).replace(/\/+$/, "");

const TOKEN_STORAGE_KEY = "apfa_super_admin_session_token";

interface AdminSessionResponse {
  authenticated: true;
  user: AdminUser;
  expiresAt: string;
}

interface AdminLoginResponse {
  token: string;
  expiresAt: string;
  userId: string;
}

async function parseApiError(
  response: Response,
): Promise<string> {
  try {
    const payload = (await response.json()) as {
      error?: {
        message?: string;
      };
    };

    return (
      payload.error?.message ||
      `Request failed with status ${response.status}.`
    );
  } catch {
    return `Request failed with status ${response.status}.`;
  }
}

async function fetchSession(
  token: string,
): Promise<AdminSessionResponse | null> {
  const response = await fetch(
    `${API_BASE_URL}/api/admin/auth/session`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as {
    data?: AdminSessionResponse;
  };

  if (!payload.data?.authenticated) {
    return null;
  }

  return payload.data;
}

export function AdminAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<AdminUser | null>(null);

  const [expiresAt, setExpiresAt] =
    useState<string | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const clearSession = useCallback(() => {
    sessionStorage.removeItem(
      TOKEN_STORAGE_KEY,
    );

    setUser(null);
    setExpiresAt(null);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function restoreSession() {
      const token =
        sessionStorage.getItem(
          TOKEN_STORAGE_KEY,
        );

      if (!token) {
        if (!cancelled) {
          setIsLoading(false);
        }

        return;
      }

      try {
        const session =
          await fetchSession(token);

        if (cancelled) {
          return;
        }

        if (!session) {
          clearSession();
          return;
        }

        setUser(session.user);
        setExpiresAt(session.expiresAt);
      } catch {
        if (!cancelled) {
          clearSession();
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void restoreSession();

    return () => {
      cancelled = true;
    };
  }, [clearSession]);

  const login = useCallback(
    async (
      email: string,
      password: string,
      otp: string,
    ) => {
      const response = await fetch(
        `${API_BASE_URL}/api/admin/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            otp,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(
          await parseApiError(response),
        );
      }

      const payload =
        (await response.json()) as {
          data?: AdminLoginResponse;
        };

      if (
        !payload.data?.token ||
        !payload.data.expiresAt ||
        !payload.data.userId
      ) {
        throw new Error(
          "The authentication server returned an invalid session response.",
        );
      }

      sessionStorage.setItem(
        TOKEN_STORAGE_KEY,
        payload.data.token,
      );

      const session =
        await fetchSession(
          payload.data.token,
        );

      if (!session) {
        clearSession();

        throw new Error(
          "The server created a session, but the session could not be verified.",
        );
      }

      setUser(session.user);
      setExpiresAt(session.expiresAt);
    },
    [clearSession],
  );

  const logout = useCallback(
    async () => {
      const token =
        sessionStorage.getItem(
          TOKEN_STORAGE_KEY,
        );

      try {
        if (token) {
          await fetch(
            `${API_BASE_URL}/api/admin/auth/logout`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
        }
      } finally {
        clearSession();
      }
    },
    [clearSession],
  );

  const value: AdminAuthContextValue =
    useMemo(
      () => ({
        user,
        expiresAt,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        logout,
      }),
      [
        user,
        expiresAt,
        isLoading,
        login,
        logout,
      ],
    );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
