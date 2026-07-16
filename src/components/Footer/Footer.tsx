import React from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import styles from "./Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Table from "../Table/Table";

export const Footer = () => {
  return (
    <footer>
      <ContentContainer className={styles.footer}>
        <Table />

        <ContentContainer className={styles.list}>
          <ul>
            <li>Data Settings</li>
            <li>Cookie Settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>
          </ul>
        </ContentContainer>
      </ContentContainer>
    </footer>
  );
};
