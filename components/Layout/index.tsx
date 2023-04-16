import React from "react";
import styles from "./index.module.css";

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ left, right }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};
