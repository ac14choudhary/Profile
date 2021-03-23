import react from "react";
import footerStyles from "../styles/Footer.module.css";
export default function footer() {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://inception.geny.co.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        made with equal love as the love for 😻 by {" -  "} <h4> Ayush </h4>
      </a>
    </footer>
  );
}
