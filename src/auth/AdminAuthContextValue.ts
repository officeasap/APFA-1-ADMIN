import { createContext } from "react";

import type { AdminAuthContextValue } from "./adminAuth.types";

export const AdminAuthContext =
  createContext<AdminAuthContextValue | null>(null);
