import react from "React";
import Head from "next/head";
import aboutStyles from "../styles/About.module.css";

export default function about() {
  return (
    <div>
      <Head>
        <title> About Ayush </title>
        <meta name="keywords" content="web development , programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={aboutStyles.title}>
        <a href="https://www.linkedin.com/in/ayush-choudhary-857244190/">
          About me
        </a>
      </h1>
    </div>
  );
}
