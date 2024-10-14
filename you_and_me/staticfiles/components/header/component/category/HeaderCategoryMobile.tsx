import { Link } from "react-router-dom";
import { Category } from "../../../../types";
import Icon from "../../../styles/IconComponent";
import logo from "../../../../assets/images/logo.png";
import { Dispatch, SetStateAction } from "react";

interface HeaderCategoryMobileProps {
  categories: Category[];
  chosenIndex: number;
  chosenCategory: Category | null;
  handleCategoryClick: (index: number, item: Category) => void;
  handleBackClick: () => void;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const HeaderCategoryMobile: React.FC<HeaderCategoryMobileProps> = ({
  categories,
  chosenIndex,
  chosenCategory,
  handleBackClick,
  handleCategoryClick,
  setIsOpened,
}) => {
  const handleCloseCategory = () => {
    setIsOpened(false);
  }
  return (
    <>
      <div className="category-top">
        <button className="category-back" onClick={handleBackClick}>
          {chosenIndex > 0 && <Icon name="arrowLeft" />}
          <h3>
            {chosenIndex === 0 ? "All categories" : chosenCategory?.title}
          </h3>
        </button>
        <button className="close-category" onClick={handleCloseCategory}>
          Close
        </button>
      </div>
      <div className="category-box">
        {chosenIndex === 0 && (
          <>
            <Link
              to="/all"
              className="category-item"
              onClick={() => setIsOpened(false)}
            >
              <img src={logo} alt="Logo" />
              <div className="category-item__content">
                <h4>All content</h4>
                <p>
                  <b>15333</b> ads
                </p>
              </div>
              <Icon name="arrowRight" />
            </Link>
            {categories.map((item, index) => (
              <div
                className="category-item"
                key={item.id}
                onClick={() => handleCategoryClick(index + 1, item)}
              >
                <img src={item.imgSrc} alt={item.title} />
                <div className="category-item__content">
                  <h4>{item.title}</h4>
                  <p>
                    <b>12</b> ads
                  </p>
                </div>
                <p>
                  <Icon name="arrowRight" />
                </p>
              </div>
            ))}
          </>
        )}
        {chosenIndex > 0 &&
          chosenCategory?.subCategory &&
          chosenCategory.subCategory.map((sub) => (
            <Link
              to={sub.link}
              className="category-item"
              key={sub.id}
              onClick={() => setIsOpened(false)}
            >
              <img src={sub.imgSrc} alt={sub.title} />
              <div className="category-item__content">
                <h4>{sub.title}</h4>
                <p>
                  <b>12</b> ads
                </p>
              </div>
              <p>
                <Icon name="arrowRight" />
              </p>
            </Link>
          ))}
      </div>
    </>
  );
};

export default HeaderCategoryMobile;
