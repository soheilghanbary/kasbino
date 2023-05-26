import NavLogo from "./logo";
import NavButton from "./nav-button";
import NavList from "./nav-list";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLogo />
      <NavList />
      {/* @ts-expect-error Server Component */}
      <NavButton />
    </nav>
  );
}
