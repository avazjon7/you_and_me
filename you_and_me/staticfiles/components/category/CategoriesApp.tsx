import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { Category } from "../../types";
import { Container, Section } from "../styles/Styled";
import "./categories.scss";

const CategoriesApp: React.FC = () => {
  const { categories } = useCategories();
  return (
    <Section className="categories">
      <Container>
        {categories.map((item: Category) => (
          <div
            className="categories-item"
            key={`Category ${item.id} - ${item.title}`}
          >
            <Link to={item.link}>
              <img src={item.imgSrc} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default CategoriesApp;
