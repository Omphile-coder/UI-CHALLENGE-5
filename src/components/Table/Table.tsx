import React from "react";
import styles from "./Table.module.css";
import { ContentContainer } from "../ContentContainer/ContentContainer";


export const Table = () => {
  return (
    <ContentContainer className={styles.footerGrid}>
      <div className={styles.column}>
        <h4>Products</h4>
        <p>Shoes</p>
      </div>
      <div className={styles.column}>
        <h4>Category</h4>
        <p>Men</p>
        <p>New In</p>
        <p>Weekly Pick</p>
      </div>
      <div className={styles.column}>
        <h4>Company Info</h4>
        <p>About us</p>
        <p>Contact us</p>
        <p>Payment Options</p>
        <p>Track Order</p>
        <p>Support</p>
        <p>Vouchers</p>
        <p>Size Charts</p>
      </div>
      <div className={styles.column}>
        <h4>Follow us</h4>
        <div className={styles.socials}>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>
    </ContentContainer>
  );
};
export default Table;
