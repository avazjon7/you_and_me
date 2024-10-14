import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./language.scss";
import Icon from "../../../styles/IconComponent";

const LanguageSelection = () => {
  const languageSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleClass = () => {
      if (languageSelectRef.current) {
        languageSelectRef.current.classList.toggle("lang-active");
      }
    };

    const currentLang = languageSelectRef.current;
    currentLang?.addEventListener("click", toggleClass);

    return () => {
      currentLang?.removeEventListener("click", toggleClass);
    };
  }, []);

  return (
    <div ref={languageSelectRef} className="header-top__link language-select">
      <div className="language-select__current">
        <Icon name="translater" />
        <span>English</span>
        <Icon name="arrowDown" />
      </div>
      <div className="language-select__choice">
        <Link to="/" className="language-select__choice-link">
          Uzbek
        </Link>
        <Link to="/" className="language-select__choice-link">
          Русский
        </Link>
      </div>
    </div>
  );
};

export default LanguageSelection;
