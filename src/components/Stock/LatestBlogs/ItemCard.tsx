import styles from "./Stock.module.css";
import { Text } from "../../Text/Text";

export type itemCardProps = {
  name: string;
  description: string;
  imgLink: string;
  btnDesc: string;
};
/** Displays a café story with a decorative photo and a placeholder Read More button. */
export const ItemCard = ({
  name,
  imgLink,
  description,
  btnDesc,
}: itemCardProps) => {
  return (
    <article className={styles["item-card"]}>
      <img
        src={imgLink}
        className={styles["item-image"]}
        alt=""
      />
      <Text variant={"span"} style={{ fontWeight: 600 }}>
        {name}
      </Text>

      <Text variant={"span"}>{description}</Text>
      <button className={styles["btn"]}>{btnDesc}</button>
    </article>
  );
};
