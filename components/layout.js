import react from "React";
import styles from "../styles/Layout.module.css";
import Nav from "./nav";

export default function layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main classname={styles.main}>{children}</main>
      </div>
    </>
  );
}
