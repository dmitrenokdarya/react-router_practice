import { NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import { PATH } from "./routes/Router";




export const App = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <NavLink to={PATH.adidas} className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }>Adidas</NavLink>
          <NavLink to={PATH.puma} className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }>Puma</NavLink>
          <NavLink to={PATH.abibas}  className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }>Abibas</NavLink>
          <NavLink to={PATH.prices}  className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }>Цены для оптовиков</NavLink>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2025</div>
    </div>
  );
}
