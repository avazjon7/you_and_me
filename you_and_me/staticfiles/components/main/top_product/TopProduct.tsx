import { useEffect, useState } from "react";
import Card from "../../card/Card";
import { GridContainer, GridItem } from "../../styles/Styled";
import { Item } from "../../../types";
import { fetchItems } from "../../../services/itemService";
import { Link } from "react-router-dom";

const TopProduct = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    loadItems();
  }, []);

  return (
    <div className="top-product">
      <GridContainer className="top-products">
        <GridItem $columns={12} className="top-products__title">
          <h2>Top Products</h2>
        </GridItem>
        {items
          .sort((a, b) => b.viewed - a.viewed)
          .slice(0, 4)
          .map((item: Item) => (
            <GridItem $columns={3} key={item.id} className="card">
              <Card item={item} />
            </GridItem>
          ))}
        <GridItem $columns={12} className="top-products__btn">
          <Link to="/" className="top-products__btn-link btn btn-primary">
            See all
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default TopProduct;
