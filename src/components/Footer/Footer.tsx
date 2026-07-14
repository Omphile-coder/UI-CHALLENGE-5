import React from "react";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import styles from "./Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
  return (
    <footer>
      <ContentContainer className={styles["footer-cont"]}>
        <hr className={styles["line"]} />
        <table>
          <tr>
            <th>Products</th>
            <th>Category</th>
            <th>Company info</th>
            <th>Follow us</th>
          </tr>
          <tr>
            <td>Shoes</td>
            <td>Men</td>
            <td>About us</td>
            <td>
              <i
                className="bi bi-instagram"
                style={{ fontSize: "2rem", color: "rgb(234,205,189)" }}
              ></i>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>New In</td>
            <td>Contact us</td>
            <td>
              <i
                className="bi bi-facebook"
                style={{ fontSize: "2rem", color: "rgb(234,205,189)" }}
              ></i>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Weekly Pick</td>
            <td>Payment Options</td>
            <td>
              <i
                className="bi bi-youtube"
                style={{ fontSize: "2rem", color: "rgb(234,205,189)" }}
              ></i>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Track Order</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Support</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Vouchers</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Size Charts</td>
            <td></td>
          </tr>
        </table>

        <div className={styles["bottom-footer"]}>
          <ul>
            <li>Data settings</li>
            <li> Cookie sttings</li>
            <li> Privacy Policy</li>
            <li> Terms And Conditions</li>
            <li> Imprint</li>
          </ul>
        </div>
      </ContentContainer>
    </footer>
  );
};
