import {
  FilePlus,
  FolderOpen,
  LucideLayoutDashboard,
  Settings,
  Webhook,
} from "lucide-react";

export const dashboard = {
  navs: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LucideLayoutDashboard
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: FolderOpen
    },
    // {
    //   title: "Request",
    //   href: "/dashboard/request",
    //   icon: Webhook
    // },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings
    },
  ],
};
