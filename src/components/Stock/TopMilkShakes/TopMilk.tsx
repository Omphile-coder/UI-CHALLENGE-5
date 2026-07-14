import React from "react";
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
      <Text variant={"h2"}>TOP MILK SHAKES</Text>
      <Text variant={"p"}>Explore The Recent Most Bought Shakes This Week</Text>

      <div className={styles["item-container"]}>
        {topShakes &&
          topShakes.length > 0 &&
          topShakes.map((product) => {
            return (
              <TopMilkShakeItemCard
                likes={product.likes}
                imgLink={product.imgLink}
                name={product.name}
                price={product.price}
                btnDesc={product.btnDesc}
              />
            );
          })}
      </div>
    </ContentContainer>
  );
};
