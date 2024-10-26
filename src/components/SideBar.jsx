import styles from "../components/Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./appNav";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()} by worldwise inc.
        </p>
      </footer>
    </div>
  );
}
