export interface AdminUser {
  id: string;
  email: string;
  fullName: string;
}

export interface AdminAuthContextValue {
  user: AdminUser | null;
  expiresAt: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    email: string,
    password: string,
    otp: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
}
