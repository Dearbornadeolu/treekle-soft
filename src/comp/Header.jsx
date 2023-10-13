import React from "react";
import Xplorer from "../images/xplorer.png";
import { Link } from "react-router-dom";
import styles from "../comp/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Xplorer} alt="" />
        <p>DestinationXplorer</p>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink} activeClassName={styles.active}>
          Home
        </Link>
        <Link
          to="/about"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          About
        </Link>
        <Link
          to="/testimonials"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          Contact Us
        </Link>
      </div>
      <div className={styles.account}>
        <Link className={styles.acct1}>Log In</Link>
        <Link className={styles.acct2}>Create Account</Link>
      </div>
    </div>
  );
};

export default Header;
