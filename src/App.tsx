import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";
import { Adidas, adidasArr } from "./components/pages/Adidas"
import { Puma, pumaArr } from "./components/pages/Puma"
import { Abibas } from "./components/pages/Abibas"
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";


export const PATH = {
  adidas: "/adidas",
  puma: "/puma",
  abibas: "/abibas",
  prices: "/prices",
  error404: "*",
  main: "/",
} as const

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
          <Routes>
            <Route path={PATH.adidas} element={<Adidas />} />
            <Route path={"/adidas/:id"} element={<Model arr={adidasArr} />} />

            <Route path={PATH.puma} element={<Puma />} />
            <Route path={"/puma/:id"} element={<Model arr={pumaArr} />} />


            <Route path={PATH.abibas} element={<Abibas />} />

            <Route path={PATH.prices} element={<Prices />} />

            <Route path={PATH.error404} element={<Error404 />} />

            <Route path={PATH.main} element={<Navigate to={PATH.adidas} />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
