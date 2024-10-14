import { Link } from "react-router-dom";
import { useCategories } from "../../../../hooks/useCategories";

const TrendCat = () => {
  const { categories } = useCategories();

  return (
    <ul className="trend-list">
      {categories.slice(0, 8).map((item) => (
        <li key={item.id}>
          <Link className="trend-list__link" to={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
      <li key="0">
        <Link className="trend-list__link" to="/categories/">
          Other Categories
        </Link>
      </li>
    </ul>
  );
};

export default TrendCat;
