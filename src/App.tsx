import { Route, Routes } from "react-router-dom";
import { PageOne } from "./components/pages/PageOne";
import { PageThree } from "./components/pages/PageThree";
import { PageTwo } from "./components/pages/PageTwo";
import styles from "./components/Site.module.css";
import { Error404 } from "./components/pages/Error404";

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          Здесь будет навигация
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/adidas" element={<PageOne/>}/>
            <Route path="/puma" element={<PageTwo/>}/>
            <Route path="/abibas" element={<PageThree/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
