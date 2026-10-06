import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {
  AdminAuthProvider,
} from "@/auth/AdminAuthContext";
import { useAdminAuth } from "@/auth/useAdminAuth";
import { AdminShell } from "@/layouts/AdminShell";
import { Home } from "@/pages/Home";
import { SectionPlaceholder } from "@/pages/SectionPlaceholder";
import { AdminLogin } from "@/pages/auth/AdminLogin";

function RequireAdminAuth() {
  const {
    isAuthenticated,
    isLoading,
  } = useAdminAuth();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--apfa-admin-powder)]">
        <div className="apfa-admin-object px-8 py-7 text-center">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            APFA / SUPER ADMIN
          </p>

          <p className="apfa-admin-editorial mt-3 text-3xl text-[var(--apfa-admin-paper)]">
            Verifying Session
          </p>

          <p className="mt-3 text-xs text-[var(--apfa-admin-paper)]/50">
            Contacting the canonical administration boundary...
          </p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <AdminShell>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/people"
          element={
            <SectionPlaceholder
              kicker="PEOPLE"
              title="People"
            />
          }
        />

        <Route
          path="/administration"
          element={
            <SectionPlaceholder
              kicker="ADMINISTRATION"
              title="Administration"
            />
          }
        />

        <Route
          path="/football"
          element={
            <SectionPlaceholder
              kicker="FOOTBALL"
              title="Football"
            />
          }
        />

        <Route
          path="/education"
          element={
            <SectionPlaceholder
              kicker="EDUCATION"
              title="Education"
            />
          }
        />

        <Route
          path="/reports"
          element={
            <SectionPlaceholder
              kicker="REPORTS"
              title="Reports"
            />
          }
        />

        <Route
          path="/proposals"
          element={
            <SectionPlaceholder
              kicker="PROPOSALS"
              title="Proposals"
            />
          }
        />

        <Route
          path="/records"
          element={
            <SectionPlaceholder
              kicker="RECORDS"
              title="Records"
            />
          }
        />

        <Route
          path="/audit"
          element={
            <SectionPlaceholder
              kicker="AUDIT"
              title="Audit"
            />
          }
        />

        <Route
          path="/system"
          element={
            <SectionPlaceholder
              kicker="SYSTEM"
              title="System"
            />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </AdminShell>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          <Route
            path="/login"
            element={<AdminLogin />}
          />

          <Route
            path="/*"
            element={<RequireAdminAuth />}
          />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}
