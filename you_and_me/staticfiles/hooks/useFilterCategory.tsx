import { useLocation, useParams } from "react-router-dom";
import { items } from "../assets/mocks/items";

const useFilterCategory = () => {
  const { categoryName, subCategoryName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productFilter = searchParams.get("product");

  const filteredItems = items.items.filter((item) => {
    const categoryMatch =
      item.category.toLowerCase() === categoryName?.toLowerCase();
    const subCategoryMatch = subCategoryName
      ? item.type.toLowerCase() === subCategoryName?.toLowerCase()
      : true;
    const productMatch = productFilter
      ? item.product?.toLowerCase() === productFilter?.toLowerCase()
      : true;
    return categoryMatch && subCategoryMatch && productMatch;
  });

  return {
    categoryName,
    subCategoryName,
    filteredItems,
  };
};

export default useFilterCategory;
