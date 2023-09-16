"use client";
import styles from "./page.module.css";

export default function Home() {
  const apple = () => {
    alert("iphone 15");
  };
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <button onClick={() => apple()}>Click Me</button>
    </main>
  );
}
