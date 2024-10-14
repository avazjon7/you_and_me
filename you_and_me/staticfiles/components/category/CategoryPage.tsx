import React from "react";
import { Container, GridItem } from "../styles/Styled";
import Filter from "../filter/Filter";
import { Item } from "../../types";
import Card from "../card/Card";
import "./categorypage.scss";
import useFilterCategory from "../../hooks/useFilterCategory";

const CategoryPage: React.FC = () => {
  const { categoryName, subCategoryName, filteredItems } = useFilterCategory();
  return (
    <div className="category-page">
      <Container>
        <Filter />
        <GridItem $columns={9} className="category-list">
          <h2 className="category-list__title">
            {subCategoryName || categoryName}
          </h2>
          <div className="item-list">
            {filteredItems.slice(0, 10).map((item: Item) => (
              <GridItem $columns={3} key={item.id} className="card">
                <Card item={item} />
              </GridItem>
            ))}
          </div>
        </GridItem>
      </Container>
    </div>
  );
};

export default CategoryPage;
