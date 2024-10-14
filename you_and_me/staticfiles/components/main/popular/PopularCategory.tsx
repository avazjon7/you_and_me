import { Link } from "react-router-dom";
import { GridContainer, GridItem, Section } from "../../styles/Styled";
import { Category } from "../../../types";
import { useCategories } from "../../../hooks/useCategories";

const PopularCategory = () => {
  const { categories } = useCategories();
  return (
    <Section className="popular">
      <h2 className="popular-title">Popular Categories</h2>
      <GridContainer className="popular-categories">
        {categories.slice(0, 4).map((item: Category) => (
          <GridItem
            key={`Category ${item.id} - ${item.title}`}
            className="popular-categories__item"
            $columns={3}
          >
            <Link to={item.link}>
              <img
                className="popular-categories__item-img"
                src={item.imgSrc}
                alt={item.title}
              />
              <h4 className="popular-categories__item-title">{item.title}</h4>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
      <div className="popular-btn">
        <Link to="/categories/" className="btn btn-outline">
          See all
        </Link>
      </div>
    </Section>
  );
};

export default PopularCategory;
