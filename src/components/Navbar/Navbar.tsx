import React, { useState } from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import styles from "./Navbar.module.css";
import logo from "../../assets/cofty-solution-logo.png";
import searchIcon from "../../assets/search-icon.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navContainer}>
      <ContentContainer className={styles.content}>
        <img src={logo} alt="Cofty solution logo" className={styles.logo} />

        <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
          <a href="/#" className={styles.link} onClick={toggleMenu}>
            Home
          </a>
          <a href="/#" className={styles.link} onClick={toggleMenu}>
            Menu
          </a>
          <a href="/#" className={styles.link} onClick={toggleMenu}>
            Blog
          </a>
          <a href="/#" className={styles.link} onClick={toggleMenu}>
            Media
          </a>
          <a href="/#" className={styles.link} onClick={toggleMenu}>
            Contact
          </a>
        </div>

        <div className={styles.rightActions}>
          <button className={styles.hamburgerBtn} onClick={toggleMenu}>
            <i className={isMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>

          <div className={styles["search-icon"]}>
            <img
              src={searchIcon}
              alt="Search"
              className={styles["search-icon"]}
            />
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};
