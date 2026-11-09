import { Text } from "../../Text/Text";
import styles from "./TopMilk.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  TopMilkShakeItemCard,
  type TopMilkShakeItemCardProps,
} from "./TopMilkShakeItemCard";
import { ContentContainer } from "../../ContentContainer/ContentContainer";

type TopMilkShakesProps = {
  topShakes: TopMilkShakeItemCardProps[];
};

export const TopMilk = ({ topShakes }: TopMilkShakesProps) => {
  return (
    <ContentContainer>
      <Text
        variant={"h2"}
        style={{
          color: "black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        TOP MILK SHAKES
      </Text>
      <Text
        variant={"p"}
        style={{
          color: "black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Explore The Recent Most Bought Shakes This Week
      </Text>

      <div className={styles["item-container"]}>
        {topShakes.map((product) => (
          <TopMilkShakeItemCard key={product.name} {...product} />
        ))}
      </div>
    </ContentContainer>
  );
};
