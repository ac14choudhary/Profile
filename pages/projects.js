import react from "react";
import projectStyles from "../styles/Projects.module.css";
import Head from "next/head";

export default function projects() {
  return (
    <div className={projectStyles.title}>
      <Head>
        <title> Ayush's Projects </title>
        <meta name="keywords" content="web development , programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="https://github.com/ac14choudhary?tab=repositories">
        <h1>My projects</h1>
      </a>
    </div>
  );
}
