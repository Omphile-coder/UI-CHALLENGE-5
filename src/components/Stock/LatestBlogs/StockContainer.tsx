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
        Read the latest stories from coffee lovers
      </Text>

      <div id="media" tabIndex={-1} className={styles["item-container"]}>
        {stock.map((article) => (
          <ItemCard key={article.imgLink} {...article} />
        ))}
      </div>
    </ContentContainer>
  );
};
