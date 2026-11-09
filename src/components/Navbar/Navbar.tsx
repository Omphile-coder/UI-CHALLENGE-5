import { useState } from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import styles from "./Navbar.module.css";
import logo from "../../assets/cofty-solution-logo.png";
import searchIcon from "../../assets/search-icon.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Blog", href: "#blog" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className={styles.navContainer}>
      <ContentContainer className={styles.content}>
        <img src={logo} alt="Cofty Solutions" className={styles.logo} />

        <div
          id="main-navigation-links"
          className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className={styles.rightActions}>
          <button
            type="button"
            className={styles.hamburgerBtn}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="main-navigation-links"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i aria-hidden="true" className={isMenuOpen ? "bi bi-x-lg" : "bi bi-list"} />
          </button>

          <img src={searchIcon} alt="" className={styles["search-icon"]} />
        </div>
      </ContentContainer>
    </nav>
  );
};
