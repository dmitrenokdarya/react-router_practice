import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import { Adidas, adidasArr } from "./components/pages/Adidas"
import { Puma, pumaArr } from "./components/pages/Puma"
import { Abibas } from "./components/pages/Abibas"
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";
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
