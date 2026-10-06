import {
  useState,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";

import { useAdminAuth } from "@/auth/useAdminAuth";

export function AdminLogin() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
  } = useAdminAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  if (isAuthenticated) {
    navigate("/", {
      replace: true,
    });
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError(null);
    setIsSubmitting(true);

    try {
      await login(
        email,
        password,
        otp,
      );

      navigate("/", {
        replace: true,
      });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Authentication failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--apfa-admin-powder)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-[24px] bg-[var(--apfa-admin-card)] shadow-[var(--apfa-admin-shadow-raised)] lg:grid-cols-[1.15fr_0.85fr]">
          <section className="p-8 sm:p-12 lg:p-16">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-[var(--apfa-admin-paper)] p-2 shadow-[inset_3px_3px_6px_rgba(8,5,3,0.22),inset_-3px_-3px_6px_rgba(255,255,255,0.45)]">
                <img
                  src="/Allen-Premier-Football-Academy-Logo.png"
                  alt="Allen Premier Football Academy"
                  className="h-14 w-14 object-contain"
                />
              </div>

              <div>
                <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
                  APFA / SUPER ADMIN
                </p>

                <p className="apfa-admin-mono mt-1 text-[10px] text-[var(--apfa-admin-paper)]/40">
                  SECURE ADMINISTRATION
                </p>
              </div>
            </div>

            <div className="mt-16">
              <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
                AUTHENTICATION
              </p>

              <h1 className="apfa-admin-editorial mt-4 max-w-xl text-5xl leading-[0.92] text-[var(--apfa-admin-paper)] sm:text-6xl">
                Enter the
                <br />
                Command Surface
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--apfa-admin-paper)]/62">
                Administrative access is restricted to authorized APFA
                personnel. Authentication is confirmed through the canonical
                server-side session boundary.
              </p>
            </div>
          </section>

          <section className="flex items-center bg-[rgba(0,0,0,0.14)] p-8 sm:p-12">
            <div className="w-full">
              <p className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/45">
                ADMIN SESSION
              </p>

              <h2 className="apfa-admin-editorial mt-3 text-4xl leading-none text-[var(--apfa-admin-paper)]">
                Secure Sign In
              </h2>

              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="admin-email"
                    className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/48"
                  >
                    ADMIN EMAIL
                  </label>

                  <input
                    id="admin-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="admin@apfa.example"
                    className="apfa-admin-pressed mt-2 w-full rounded-xl border-0 bg-[var(--apfa-admin-powder)] px-4 py-3 text-sm text-[var(--apfa-admin-ink)] placeholder:text-[var(--apfa-admin-muted)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="admin-password"
                    className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/48"
                  >
                    PASSWORD
                  </label>

                  <input
                    id="admin-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="••••••••••••"
                    className="apfa-admin-pressed mt-2 w-full rounded-xl border-0 bg-[var(--apfa-admin-powder)] px-4 py-3 text-sm text-[var(--apfa-admin-ink)] placeholder:text-[var(--apfa-admin-muted)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="admin-otp"
                    className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/48"
                  >
                    AUTHENTICATOR CODE
                  </label>

                  <input
                    id="admin-otp"
                    name="otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    maxLength={6}
                    pattern="[0-9]{6}"
                    value={otp}
                    onChange={(event) =>
                      setOtp(
                        event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6),
                      )
                    }
                    placeholder="000000"
                    className="apfa-admin-pressed mt-2 w-full rounded-xl border-0 bg-[var(--apfa-admin-powder)] px-4 py-3 font-mono text-sm tracking-[0.35em] text-[var(--apfa-admin-ink)] placeholder:text-[var(--apfa-admin-muted)]"
                  />
                </div>

                {error ? (
                  <div
                    role="alert"
                    className="rounded-xl bg-[rgba(169,77,69,0.16)] p-4 text-xs leading-6 text-[#d98982]"
                  >
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apfa-admin-control w-full bg-[var(--apfa-admin-ember)] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "AUTHENTICATING..."
                    : "ENTER COMMAND SURFACE"}
                </button>
              </form>

              <div className="mt-8 rounded-2xl bg-[rgba(0,0,0,0.18)] p-5">
                <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
                  SESSION LAW
                </p>

                <p className="mt-3 text-xs leading-6 text-[var(--apfa-admin-paper)]/50">
                  No browser-only authentication state is accepted. The
                  canonical backend establishes and verifies the administrator
                  session before command access is granted.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
