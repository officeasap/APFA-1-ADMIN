export const APFA_ADMIN = {
  productName: "APFA SUPER ADMIN",
  organizationName: "Allen Premier Football Academy",
  environment: "Production Administration",
} as const;

export const ADMIN_ROLES = [
  "MASTER_ADMIN",
  "ADMINISTRATOR",
  "OPERATIONS",
  "EDUCATION",
  "FOOTBALL",
  "AUDITOR",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];