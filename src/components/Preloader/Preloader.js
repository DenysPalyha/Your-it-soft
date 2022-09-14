import React from "react";
import styles from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <span>Loading</span>
    </div>
  );
}

export default Preloader;
