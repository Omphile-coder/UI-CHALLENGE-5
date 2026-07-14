import React from "react";
import styles from "./TopCat.module.css";
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { Text } from "../../Text/Text";

export const TopCategoriesCard = () => {
  return (
    <article>
      <Text variant={"h3"}>TOP CATEGORIES</Text>
      <Text variant={"p"}>Explore The Recent Most Bought Drinks This Week</Text>

      <div className={styles["item-container"]}>
        <div className={styles["item1"]}>
          <Text variant={"p"} style={{ fontWeight: 600, alignItems: "center" }}>
            Coffee Mocha
            <hr className={styles.lines} />
          </Text>
          <Text variant={"p"} style={{ paddingTop: 10 }}>
            View More
          </Text>
        </div>
        <div className={styles["item2"]}>
          <Text variant={"p"} style={{ fontWeight: 600, alignItems: "center" }}>
            Express Americano
            <hr className={styles.lines} />
          </Text>
          <Text variant={"p"} style={{ paddingTop: 10 }}>
            View More
          </Text>
        </div>
        <div className={styles["item3"]}>
          <Text variant={"p"} style={{ fontWeight: 600, alignItems: "center" }}>
            Cappucino
            <hr className={styles.lines} />
          </Text>
          <Text variant={"p"} style={{ paddingTop: 10 }}>
            View More
          </Text>
        </div>
      </div>
    </article>
  );
};
