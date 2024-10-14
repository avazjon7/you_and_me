import { Link } from "react-router-dom";
import Icon from "../../styles/IconComponent";
import { Section, Container } from "../../styles/Styled";
import { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import Search from "./search/Search";
import InfoMenu from "./info-menu/InfoMenu";
import logo from "../../../assets/images/logo.png";

const HeaderContent: React.FC = () => {
  const [likedCount, setLikedCount] = useState<number>(0);
  const [isInfoActive, setIsInfoActive] = useState<boolean>(false);

  const updateLikedCount = useCallback(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "{}");
    setLikedCount(Object.keys(savedLikes).length);
  }, []);

  useEffect(() => {
    updateLikedCount(); 

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "likedItems") {
        updateLikedCount(); 
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [updateLikedCount]);

  const handleInfoMenuToggle = useCallback(() => {
    setIsInfoActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const headerContent = document.querySelector(".header-content");
    const btn = headerContent?.querySelector<HTMLDivElement>(".burger-btn");
    const infoMenu = document.querySelector<HTMLDivElement>(".info-menu");
    const closeBtn = infoMenu?.querySelector<HTMLButtonElement>(".burger-btn");

    const handleClickers = () => {
      handleInfoMenuToggle();
    };

    if (btn) {
      btn.addEventListener("click", handleClickers);
      closeBtn?.addEventListener("click", handleClickers);

      return () => {
        closeBtn?.removeEventListener("click", handleClickers);
        btn.removeEventListener("click", handleClickers);
      };
    }
  }, [handleInfoMenuToggle]);

  useEffect(() => {
    const like = document.querySelector("#liked-count");
    if (like) {
      like.innerHTML = likedCount.toString();
    }
  }, [likedCount]);

  return (
    <>
      <Section className="header-content">
        <Container>
          <Link to="/" className="header-content__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Search />
          <Link to="/liked-items" className="header-content__liked">
            <Icon name="like" />
            <p
              id="liked-count"
              className={classNames({ liked: likedCount > 0 })}
            >
              {likedCount}
            </p>
          </Link>
          <div
            className={`burger-btn primary hotdog${
              isInfoActive ? " open" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Container>
      </Section>
      <InfoMenu isActive={isInfoActive} />
    </>
  );
};

export default HeaderContent;
