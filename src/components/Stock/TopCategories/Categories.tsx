import styles from "./Categories.module.css";
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { Text } from "../../Text/Text";

/** Shows the featured coffee categories. Each card's CSS class sets its background image. */
export const Categories = () => {
  return (
    <ContentContainer className={styles.MainContainer}>
      <Text
        variant="h2"
        style={{
          color: "black",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: 800,
        }}
      >
        TOP CATEGORIES
      </Text>
      <Text
        variant="p"
        style={{
          color: "#1E1E1E",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: 400,
        }}
      >
        Explore The Recent Most Bought Drinks This Week
      </Text>

      <ContentContainer className={styles["divs-container"]}>
        <ContentContainer className={styles["item-one"]}>
          <Text variant="h2">Coffee Mocha</Text>
          <hr className={styles["line"]} />
          <Text variant="p">View More</Text>
        </ContentContainer>
        <ContentContainer className={styles["item-two"]}>
          <Text variant="h2">Espresso Americano</Text>
          <hr className={styles["line"]} />
          <Text variant="p">View More</Text>
        </ContentContainer>
        <ContentContainer className={styles["item-three"]}>
          <Text variant="h2">Cappuccino</Text>
          <hr className={styles["line"]} />
          <Text variant="p">View More</Text>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default Categories;
