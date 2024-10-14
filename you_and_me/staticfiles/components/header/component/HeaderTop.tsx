import { Link } from "react-router-dom";
import { Container, Section } from "../../styles/Styled";
import Icon from "../../styles/IconComponent";
import LanguageSelection from "./language-selection/LanguageSelection";

const HeaderTop = () => {
  return (
    <Section className="header-top bg-soft-pink">
      <Container>
        <Link to="/become-merchant/" className="header-top__link merchant">
          <Icon name="seller" />
          <span className="header-top__link-p">Become a merchant</span>
        </Link>
        <Link to="https://t.me/unmsupportbot" className="header-top__link">
          <Icon name="telegram" />
          <span className="header-top__link-p">You&Me support</span>
        </Link>
        <LanguageSelection />
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
      </Container>
    </Section>
  );
};

export default HeaderTop;
