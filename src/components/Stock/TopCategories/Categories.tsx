import React from "react";
import styles from "./Categories.module.css";
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { Text } from "../../Text/Text";

export const Categories = () => {
  return (
    <ContentContainer className={styles.MainContainer}>
      <Text
        variant="h2"
        style={{
          color: "black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Top Categories
      </Text>
      <Text
        variant="p"
        style={{
          color: "black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Explore The Recent Most Bought Shakes This Week
      </Text>

      <ContentContainer className={styles["divs-container"]}>
        <ContentContainer className={styles["item-one"]}>
          <Text variant="h2">Coffee Mocha</Text>
          <Text variant="p">View More</Text>
        </ContentContainer>
        <ContentContainer className={styles["item-two"]}>
          <Text variant="h2">Expresso Americano</Text>
          <Text variant="p">View More</Text>
        </ContentContainer>
        <ContentContainer className={styles["item-three"]}>
          <Text variant="h2">Cuppacino</Text>
          <Text variant="p">View More</Text>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default Categories;
