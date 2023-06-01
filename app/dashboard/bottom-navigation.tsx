"use client";
import {
  FolderOpen,
  HomeIcon,
  LayoutDashboard,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "~/lib/utils";

export default function BottomNavigation() {
  const pathname = usePathname();
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full grid grid-cols-5 border-t backdrop-blur-md">
      <Link
        href={"/dashboard"}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === "/dashboard" && "text-foreground-secondary"
        )}
      >
        <LayoutDashboard className="w-5 h-5"/>
        <span className="text-xs">Dashboard</span>
      </Link>
      <Link
        href={"/dashboard/products"}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === "/dashboard/products" && "text-foreground-secondary"
        )}
      >
        <FolderOpen className="w-5 h-5"/>
        <span className="text-xs">Products</span>
      </Link>
      <Link
        href={"/dashboard/search"}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === "/dashboard/search" && "text-foreground-secondary"
        )}
      >
        <Search className="w-5 h-5"/>
        <span className="text-xs">Search</span>
      </Link>
      <Link
        href={"/dashboard/profile"}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === "/dashboard/profile" && "text-foreground-secondary"
        )}
      >
        <HomeIcon className="w-5 h-5"/>
        <span className="text-xs">Profile</span>
      </Link>
      <Link
        href={"/dashboard/settings"}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === "/dashboard/settings" && "text-foreground-secondary"
        )}
      >
        <Settings className="w-5 h-5"/>
        <span className="text-xs">Settings</span>
      </Link>
    </div>
  );
}
