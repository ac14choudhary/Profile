import react from "react";
import contactCardStyles from "../styles/Contactcard.module.css";

export default function contactCard() {
  return (
    <div className={contactCardStyles.layout}>
      <div>
        <p className={contactCardStyles.headingText}>
          You can contact me in several ways
        </p>
      </div>
    </div>
  );
}

// <div className={contactStyles.outer}>
// <div className={contactStyles.title}>
//   <Head>
//     <title> Contact Ayush </title>
//     <meta name="keywords" content="web development , programming" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>
//   <a href="https://www.instagram.com/ac14choudhary/">
//     <h1>Contact me</h1>
//   </a>
// </div>

// <div className={contactStyles.card}>
//   <p className={contactStyles.heading}>
//     So here's how you can contact me
//   </p>
//   <p className={contactStyles.subHeading}>
//     So here's how you can contact me{" "}
//   </p>
// </div>

// <div className={contactStyles.card}>
//   <p className={contactStyles.heading}>
//     So here's how you can contact me
//   </p>
//   <p className={contactStyles.subHeading}>
//     So here's how you can contact me{" "}
//   </p>
// </div>
// </div>
