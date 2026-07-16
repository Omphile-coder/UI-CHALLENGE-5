import React from "react";
import styles from "./TopMilk.module.css";
import { Text } from "../../Text/Text";
import "bootstrap-icons/font/bootstrap-icons.css";

export type TopMilkShakeItemCardProps = {
  name: string;
  imgLink: string;
  price: number;

  btnDesc: string;
  likes: 0;
};
export const TopMilkShakeItemCard = ({
  name,
  imgLink,
  price,
  likes,
  btnDesc,
}: TopMilkShakeItemCardProps) => {
  return (
    <article className={styles["item-card"]}>
      <button className={styles["like-btn"]}>
        <i className="bi bi-hand-thumbs-up-fill"></i>
        {likes} likes
      </button>
      <img
        src={imgLink}
        className={styles["item-image"]}
        alt={`image of product: ${name}`}
      />
      <Text variant={"span"} style={{ fontWeight: 600 }}>
        {name}
      </Text>
      <div className={styles["bottom-items"]}>
        <div>
          <Text variant={"span"}>${price}</Text>
        </div>

        <button className={styles["btn"]}>{btnDesc}</button>
      </div>
    </article>
  );
};
