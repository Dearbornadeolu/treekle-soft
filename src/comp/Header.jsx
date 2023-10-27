import React from "react";
import Xplorer from "../images/xplorer.png";
import { Link } from "react-router-dom";
import styles from "../comp/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p>YARA</p>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/about" className={styles.link}>
          About{" "}
        </Link>
        <Link to="/services" className={styles.link}>
          Services{" "}
        </Link>
        <Link to="/" className={styles.link}>
          Blog{" "}
        </Link>
      </div>
      <div className={styles.account}>
        <Link className={styles.acct1}>Log In</Link>
        <Link className={styles.acct2}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
