import { Container, Section } from "../../../styles/Styled";
import { useCategories } from "../../../../hooks/useCategories";
import HeaderCategoryMobile from "./HeaderCategoryMobile";
import HeaderCategoryDesktop from "./HeaderCategoryDesktop";
import { useCategoryContext } from "../../../../context/CategoryContextProvider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeaderCategory: React.FC = () => {
  const {
    categories,
    chosenIndex,
    chosenCategory,
    handleCategoryClick,
    handleBackClick,
  } = useCategories();
  const { isOpened, setIsOpened } = useCategoryContext();
  const location = useLocation();

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('category-focused');
    } else {
      document.body.classList.remove('category-focused');
    }
  }, [isOpened]);

  useEffect(() => {
    if (isOpened) {
      setIsOpened(false); 
    }
  }, [location.pathname]);

  return (
    <Section className={`category`}>
      <Container>
        <HeaderCategoryMobile
          categories={categories}
          chosenIndex={chosenIndex}
          chosenCategory={chosenCategory}
          handleCategoryClick={handleCategoryClick}
          handleBackClick={handleBackClick}
          setIsOpened={setIsOpened}
        />
        <HeaderCategoryDesktop
          categories={categories}
          setIsOpened={setIsOpened}
        />
      </Container>
    </Section>
  );
};

export default HeaderCategory;
