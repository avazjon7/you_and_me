import { categories } from "../assets/mocks/categories";
import { Category } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const data = categories;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
