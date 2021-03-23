import react from "react";
import projectStyles from "../styles/Projects.module.css";

export default function projects() {
  return (
    <div className={projectStyles.title}>
      <a href="https://github.com/ac14choudhary?tab=repositories">
        <h1>My projects</h1>
      </a>
    </div>
  );
}
