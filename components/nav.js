import react from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

export default function nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About me</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}
