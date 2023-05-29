import NavLogo from "./logo";
import NavButton from "./nav-button";
import NavList from "./nav-list";
import styles from "./navbar.module.scss";

export default function NavbarDashboard() {
  return (
    <nav className={styles.navbar}>
      {/* @ts-expect-error Server Component */}
      <NavButton />
      <NavLogo />
      <NavList />
    </nav>
  );
}
