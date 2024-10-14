import { Link } from "react-router-dom";
import Icon from "../../styles/IconComponent";
import { Container, Section } from "../../styles/Styled";
import { useCallback, useEffect, useState } from "react";
import { useCategoryContext } from "../../../context/CategoryContextProvider";

const HeaderBottom: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const { isOpened, setIsOpened } = useCategoryContext();

  const handleMenuToggle = useCallback(() => {
    setIsMenuActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const btn = document.querySelector<HTMLDivElement>(
      ".header-bottom .burger-btn"
    );

    const handleClickers = () => {
      handleMenuToggle();
    };

    if (btn) {
      btn.addEventListener("click", handleClickers);

      return () => {
        btn.removeEventListener("click", handleClickers);
      };
    }
  }, [handleMenuToggle]);

  const handleCategoryBtnClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <Section className="header-bottom bg-primary">
      <Container>
        <button onClick={handleCategoryBtnClick} className="header-category__btn no-outline">
          Category
          <Icon name="arrowDown" />
        </button>
        <nav className={`header-menu${isMenuActive ? " menu-active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Ideas for wedding</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </nav>
        <button className={`burger-btn${isMenuActive ? " open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>
    </Section>
  );
};

export default HeaderBottom;
