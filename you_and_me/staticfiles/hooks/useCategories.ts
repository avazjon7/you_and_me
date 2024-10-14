import { useEffect, useState } from "react";
import { Category } from "../types";
import { fetchCategories } from "../services/categoryService";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const [chosenCategory, setChosenCategory] = useState<Category | null>(null);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch {
        console.error("Failed to fetch categories");
      }
    };
    loadCategory();
  }, []);

  const handleCategoryClick = (index: number, category: Category) => {
    setChosenIndex(index);
    setChosenCategory({
      ...category,
      subCategory: [
        {
          id: 0,
          title: "Show All",
          link: category.link,
          imgSrc: category.imgSrc,
          subCategory: [],
        },
        ...category.subCategory,
      ],
    });
  };

  const handleBackClick = () => {
    setChosenIndex(0);
    setChosenCategory(null);
  };

  return {
    categories,
    chosenIndex,
    chosenCategory,
    handleCategoryClick,
    handleBackClick,
  };
};
