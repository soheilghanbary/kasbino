import { Command } from "lucide-react";
import styles from "./navbar.module.scss";

export default function NavLogo() {
  return (
    <div className={styles.logo}>
      <Command />
      <h2>Kasbino</h2>
    </div>
  );
}
