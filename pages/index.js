import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayush's Profile</title>
        <meta name="keywords" content="web development , programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://www.linkedin.com/in/ayush-choudhary-857244190/">
            MY PROFILE
          </a>
        </h1>

        <p className={styles.description}>
          Lets start Knowing <code className={styles.code}>ME</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.instagram.com/ac14choudhary/"
            className={styles.card}
          >
            <h3>Instagram &rarr;</h3>
            <p>Do follow me on my instagram handle.</p>
          </a>

          <a href="https://github.com/ac14choudhary" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>want to know about my coding skills hop in!</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-choudhary-857244190/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>Want to see my Digital resume at a single glance?</p>
          </a>
        </div>
      </main>
    </div>
  );
}
