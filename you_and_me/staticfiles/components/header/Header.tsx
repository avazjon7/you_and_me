import HeaderTop from "./component/HeaderTop";
import HeaderContent from "./component/HeaderContent";
import HeaderBottom from "./component/HeaderBottom";
import HeaderCategory from "./component/category/HeaderCategory";
import { useCategoryContext } from "../../context/CategoryContextProvider";

const Header: React.FC = () => {
  const { isOpened } = useCategoryContext();

  return (
    <header className={`header ${isOpened && "opened-category"}`}>
      <HeaderTop />
      <HeaderContent />
      <HeaderBottom />
      <HeaderCategory />
    </header>
  );
}

export default Header;
