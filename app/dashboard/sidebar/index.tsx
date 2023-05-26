import ModeToggle from "~/app/(site)/footer/mode-toggle";
import SidebarHeader from "./side-header";
import SidebarList from "./side-list";
import styles from "./sidebar.module.scss";

export default function DashboardSidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* @ts-expect-error Server Component */}
      <SidebarHeader />
      <SidebarList />
      <ModeToggle />
    </aside>
  );
}
