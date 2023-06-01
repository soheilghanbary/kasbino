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
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full grid grid-cols-5 border-t backdrop-blur-md">
      <Item icon={LayoutDashboard} href={'/dashboard'} title={'Dashboard'}/>
      <Item icon={FolderOpen} href={"/dashboard/products"} title={'Dashboard'}/>
      <Item icon={Search} href={'/dashboard/search'} title={'Search'}/>
      <Item icon={HomeIcon} href={'/dashboard/profile'} title={'Search'}/>
      <Item icon={Settings} href={'/dashboard/settings'} title={'Search'}/>
    </div>
  );
}

const Item = ({href, title, icon}: { href: string; title: string; icon: any }) => {
  const IconElement = icon
  const pathname = usePathname();
  return (
    (
      <Link
        href={href}
        className={cn(
          "flex justify-center items-center p-3 flex-col space-y-1",
          pathname === href && "text-foreground-secondary"
        )}
      >
        <IconElement className="w-5 h-5"/>
        <span className="text-xs">{title}</span>
      </Link>
    )
  )
}