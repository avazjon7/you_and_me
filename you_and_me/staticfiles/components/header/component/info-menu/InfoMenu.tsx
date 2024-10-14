import { Link } from "react-router-dom";
import Icon from "../../../styles/IconComponent";
import LanguageSelection from "../language-selection/LanguageSelection";
import Search from "../search/Search";
import "./infoMenu.scss";

interface InfoMenuProps {
  isActive: boolean;
}

const InfoMenu: React.FC<InfoMenuProps> = ({ isActive }) => {
  return (
    <div className={`info-menu${isActive ? ` info-active` : ""}`}>
      <div className="info-menu__top">
        <div className="user-auth">
          <Link
            to="/register/"
            className="header-top__link user-auth__link"
            id="register"
          >
            <Icon name="register" />
            <span className="header-top__link-p">Register</span>
          </Link>
          <div className="user-auth__line"></div>
          <Link to="/login/" className="header-top__link user-auth__link" id="login">
            <Icon name="person" />
            <span className="header-top__link-p">Sign in</span>
          </Link>
        </div>
        <button className="burger-btn open primary">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <LanguageSelection />
      <Search />
      <Link to="/liked-items" className="info-menu__liked btn btn-outline">
        <span>Liked items</span>
        <Icon name="like" />
      </Link>
      <Link to="/become-merchant/" className="become-merchant btn btn-primary">
        <Icon name="register" />
        Become a merchant
      </Link>
      <div className="info-menu__contact">
        <div className="telegram">
          <Icon name="telegram" />
          <a href="https://t.me/unmsupportbot">You&Me Support</a>
        </div>
        <div className="phone">
          <Icon name="phone" />
          <a href="tel:+998944100800">+998 (94) 410-08 00</a>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;
