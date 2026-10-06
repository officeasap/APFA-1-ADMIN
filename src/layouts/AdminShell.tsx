import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import {
  ADMIN_IDENTITY,
  ADMIN_NAVIGATION,
} from "@/config/adminNavigation";

interface AdminShellProps {
  children: ReactNode;
}

export function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-[var(--apfa-admin-powder)]">
      <header className="apfa-admin-shell py-6">
        <div className="apfa-admin-object flex items-center justify-between gap-6 px-6 py-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="shrink-0 rounded-2xl bg-[var(--apfa-admin-paper)] p-2 shadow-[inset_3px_3px_6px_rgba(8,5,3,0.22),inset_-3px_-3px_6px_rgba(255,255,255,0.45)]">
              <img
                src="/Allen-Premier-Football-Academy-Logo.png"
                alt="Allen Premier Football Academy"
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
                APFA / SUPER ADMIN
              </p>

              <h1 className="apfa-admin-editorial mt-1 text-3xl text-[var(--apfa-admin-paper)]">
                Administrative Command
              </h1>
            </div>
          </div>

          <div className="apfa-admin-mono hidden text-right text-xs text-[var(--apfa-admin-paper)]/60 sm:block">
            <div>MASTER SYSTEM</div>
            <div>PRODUCTION</div>
          </div>
        </div>
      </header>

      <div className="apfa-admin-shell grid gap-6 pb-12 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="apfa-admin-object h-fit p-4">
          <div className="mb-4 px-3 pt-2">
            <p className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/45">
              COMMAND
            </p>
          </div>

          <nav aria-label="APFA Super Admin navigation" className="space-y-1">
            {ADMIN_NAVIGATION.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "apfa-admin-control flex items-center gap-3 px-4 py-3",
                    "text-sm font-medium",
                    isActive
                      ? "apfa-admin-pressed bg-[var(--apfa-admin-powder)] text-[var(--apfa-admin-ink)]"
                      : "text-[var(--apfa-admin-paper)]/68 hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--apfa-admin-paper)]",
                  ].join(" ")
                }
              >
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <div className="rounded-2xl bg-[rgba(0,0,0,0.18)] p-4">
              <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
                AUTHORITY
              </p>

              <p className="apfa-admin-mono mt-3 text-sm font-semibold text-[var(--apfa-admin-paper)]">
                {ADMIN_IDENTITY.name}
              </p>

              <p className="mt-1 text-xs leading-5 text-[var(--apfa-admin-paper)]/48">
                {ADMIN_IDENTITY.title}
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}