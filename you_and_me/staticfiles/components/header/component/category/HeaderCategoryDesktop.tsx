import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Category, SubCategory, SubSubCategory } from "../../../../types";
import { Link } from "react-router-dom";
import Icon from "../../../styles/IconComponent";

interface HeaderCategoryDesktopProps {
  categories: Category[];
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const HeaderCategoryDesktop: React.FC<HeaderCategoryDesktopProps> = ({
  categories,
  setIsOpened,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);
  const [subSubCategories, setSubSubCategories] = useState<SubSubCategory[]>(
    []
  );

  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategory = categories[0];
      setSelectedCategory(defaultCategory);

      if (
        defaultCategory.subCategory &&
        defaultCategory.subCategory.length > 0
      ) {
        const defaultSubCategory = defaultCategory.subCategory[0];
        setSelectedSubCategory(defaultSubCategory);
        setSubSubCategories(defaultSubCategory.subCategory || []);
      }
    }
  }, [categories]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(
      category.subCategory ? category.subCategory[0] : null
    );
    setSubSubCategories(
      category.subCategory ? category.subCategory[0].subCategory || [] : []
    );
  };

  const handleSubCategorySelect = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
    setSubSubCategories(subCategory.subCategory || []);
  };

  return (
    <>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${
              category.id === selectedCategory?.id ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            <span>{category.title}</span>
            <span>
              <Icon name="arrowRight" />
            </span>
          </div>
        ))}
      </div>

      <div className="category-list">
        {selectedCategory?.subCategory?.map((subCategory) => (
          <div
            key={subCategory.id}
            className={`category-item ${
              subCategory.id === selectedSubCategory?.id ? "selected" : ""
            }`}
            onClick={() => handleSubCategorySelect(subCategory)}
          >
            <span>{subCategory.title}</span>
            <span>
              <Icon name="arrowRight" />
            </span>
          </div>
        ))}
      </div>

      <div className="category-list">
        {subSubCategories.map((subSubCategory) => (
          <div
            className="category-list__item"
            key={subSubCategory.id}
            onClick={() => setIsOpened(false)}
          >
            <Link to={subSubCategory.link}>
              <img
                src={subSubCategory.imgSrc}
                className="category-item__img"
                alt={subSubCategory.title}
              />
              <p className="category-item__title">{subSubCategory.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderCategoryDesktop;
