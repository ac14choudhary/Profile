import react from "react";
import contactStyles from "../styles/Contact.module.css";
import Head from "next/head";
import ContactCard from "../components/contactCard";

export default function projects() {
  return (
    <div className={contactStyles.outer}>
      <Head>
        <title> Contact Ayush </title>
        <meta name="keywords" content="web development , programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={contactStyles.title}>
        <a href="https://www.instagram.com/ac14choudhary/">
          <p>Contact me</p>
        </a>
      </div>
      <ContactCard />
    </div>
  );
}
