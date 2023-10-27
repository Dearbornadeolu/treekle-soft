import React from "react";
import Xplorer from "../images/xplorer.png";
import { Link } from "react-router-dom";
import styles from "../comp/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src={Xplorer} alt="" /> */}
        <p>YARA</p>
      </div>
      <div className={styles.navLinks}>
        <Link to="/"> Home</Link>
        <Link to="/about">About </Link>
        <Link to="/services">Services </Link>
      </div>
      <div className={styles.account}>
        <Link className={styles.acct1}>Log In</Link>
        <Link className={styles.acct2}>Create Account</Link>
      </div>
    </div>
  );
};

export default Header;
