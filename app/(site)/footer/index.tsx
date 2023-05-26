import { Command } from "lucide-react";
import ModeToggle from "./mode-toggle";
import styles from "./footer.module.scss";
import { site } from "~/config/site";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <Command />
        <p>{site.footer.description}</p>
      </div>
      <ModeToggle />
    </footer>
  );
}
