import {
  Activity,
  BookOpen,
  ClipboardCheck,
  FileBarChart,
  Flag,
  FolderArchive,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

export const ADMIN_NAVIGATION = [
  {
    label: "Overview",
    to: "/",
    icon: LayoutDashboard,
  },
  {
    label: "People",
    to: "/people",
    icon: Users,
  },
  {
    label: "Administration",
    to: "/administration",
    icon: ShieldCheck,
  },
  {
    label: "Football",
    to: "/football",
    icon: Flag,
  },
  {
    label: "Education",
    to: "/education",
    icon: BookOpen,
  },
  {
    label: "Reports",
    to: "/reports",
    icon: FileBarChart,
  },
  {
    label: "Proposals",
    to: "/proposals",
    icon: ClipboardCheck,
  },
  {
    label: "Records",
    to: "/records",
    icon: FolderArchive,
  },
  {
    label: "Audit",
    to: "/audit",
    icon: Activity,
  },
  {
    label: "System",
    to: "/system",
    icon: Settings,
  },
] as const;

export const ADMIN_IDENTITY = {
  name: "MASTER MAXX",
  title: "CHAIRMAN SUPER-ADMIN",
} as const;