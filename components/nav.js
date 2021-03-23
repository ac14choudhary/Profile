import react from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

export default function nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
}
