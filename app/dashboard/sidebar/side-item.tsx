'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";

export default function SidebarItem({
  title,
  icon,
  href,
}: {
  title: string;
  href: string;
  icon: any;
}) {
  const Icon = icon;
  const pathname = usePathname();
  const classes = `${styles.item} ${
    href === pathname ? styles.active : ""
  }`;
  return (
    <Link href={href} className={classes}>
      <Icon className="h-4 w-4" />
      {title}
    </Link>
  );
}
