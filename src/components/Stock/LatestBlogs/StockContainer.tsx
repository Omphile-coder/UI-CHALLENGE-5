import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { ItemCard, type itemCardProps } from "./ItemCard";
import { Text } from "../../Text/Text";
import styles from "./Stock.module.css";

type StockProps = {
  stock: itemCardProps[];
};

/** Builds the Latest Blogs section from the article data supplied by App. */
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

      {/* Media jumps directly to the photo cards, below the Blog heading. */}
      <div id="media" tabIndex={-1} className={styles["item-container"]}>
        {stock.map((article) => (
          <ItemCard key={article.imgLink} {...article} />
        ))}
      </div>
    </ContentContainer>
  );
};
