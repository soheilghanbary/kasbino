import Link from "next/link";
import styles from "./navbar.module.scss";
import { site } from "~/config/site";

export default function NavList() {
  return (
    <ul className={styles.menu}>
      {site.navs.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </ul>
  );
}

export function NavItem({ title, href }: { title: string; href: string }) {
  return (
    <Link className={styles.link} href={href}>
      {title}
    </Link>
  );
}
