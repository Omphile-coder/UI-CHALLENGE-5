import styles from "./Hero.module.css";
import imageIcon from "../../../assets/fullNavImage.png";

export const Hero = () => {
  return (
    <div className={styles["top-cont"]}>
      <div className={styles["wave-container-top"]}>
        <svg
          aria-hidden="true"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>

      <img src={imageIcon} alt="Coffee beans" className={styles["top-Image"]} />

      <div className={styles["hero-overlay"]}>
        <h1 className={styles["hero-title"]}>
          <span>FRESHLY ROASTED</span>
          COFFEE
        </h1>
        <a className={styles["shop-btn"]} href="#menu">Shop now</a>
      </div>

      <div className={styles["wave-container"]}>
        <svg
          aria-hidden="true"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </div>
  );
};
