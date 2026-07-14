import React from "react";
import { Text } from "../Text/Text";
import styles from "./Navbar.module.css";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import logo from "../../assets/cofty-solution-logo.png";
import searchIcon from "../../assets/search-icon.png";

export const Navbar = () => {
  return (
    <nav>
      <ContentContainer className={styles.content}>
        <img src={logo} alt="Cofty solution logo" className={styles["logo"]} />
        <div className={styles.links}>
          <a href="/#" className={styles.link}>
            Home
          </a>
          <a href="/#" className={styles.link}>
            Menu
          </a>
          <a href="/#" className={styles.link}>
            Blog
          </a>

          <a href="/#" className={styles.link}>
            Media
          </a>

          <a href="/#" className={styles.link}>
            Contact
          </a>

          <div className={styles["search-icon"]}>
            <img
              src={searchIcon}
              alt="Cofty solution logo"
              className={styles["search-icon"]}
            />
          </div>
        </div>
      </ContentContainer>
    </nav>
  );
};
