import React from "react";
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { ItemCard, type itemCardProps } from "./ItemCard";
import { Text } from "../../Text/Text";
import styles from "./Stock.module.css";

type StockProps = {
  stock: itemCardProps[];
};

export const StockContainer = ({ stock }: StockProps) => {
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
        LATEST BLOGS
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
        {stock &&
          stock.length > 0 &&
          stock.map((product) => {
            return (
              <ItemCard
                name={product.name}
                description={product.description}
                imgLink={product.imgLink}
                btnDesc={product.btnDesc}
              />
            );
          })}
      </div>
    </ContentContainer>
  );
};
