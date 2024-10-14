import { Link } from "react-router-dom";
import { useFooterInput } from "../../hooks/useFooterInput";
import Icon from "../styles/IconComponent";
import { GridContainer, GridItem } from "../styles/Styled";
import { useCategories } from "../../hooks/useCategories";

const Footer = () => {
  const { inputRef, labelRef } = useFooterInput();
  const { categories } = useCategories();
  return (
    <footer>
      <GridContainer>
        <GridItem $columns={6} className="footer-left">
          <h2 className="footer-left__title">Stay up to date</h2>
          <p className="footer-left__desc">
            Subscribe to our newsletter and get 20% discount offer in your first
            order.
          </p>
          <form className="footer-left__form">
            <label ref={labelRef} htmlFor="email">
              Write your email
            </label>
            <input
              ref={inputRef}
              name="email"
              type="email"
              id="email"
              className="footer-left__form-input no-outline"
              required
            />
            <button className="btn btn-white footer-left__form-btn">
              Submit
            </button>
          </form>
          <div className="footer-menu">
            <div className="footer-categories">
              <Link to="/categories/" className="footer-categories-title">
                Categories
              </Link>
              <ul className="footer-categories-menu">
                {categories.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="company">
              <h2 className="company-title">Company</h2>
              <ul className="company-menu">
                <li>
                  <Link to="/about/">About us</Link>
                </li>
                <li>
                  <Link to="/ideas/">Ideas for wedding</Link>
                </li>
                <li>
                  <Link to="/contacts/">Contacts</Link>
                </li>
                <li>
                  <Link to="/help/">Help & FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </GridItem>
        <GridItem $columns={6} className="help">
          <h2 className="help-title">Happy to help</h2>
          <p>29B, Mehnatkash st., Yangiobod m, Shayhontokhur r., Tashkent.</p>
          <p>
            Phone: <a href="tel:+998944100800">+998 (94) 410 08-00</a>
          </p>
          <p>
            Email: <a href="mailto:info@unm.uz">info@unm.uz</a>
          </p>
          <div className="help-socials">
            <a href="https://facebook.com">
              <Icon name="facebook"></Icon>
            </a>
            <a href="https://instagram.com">
              <Icon name="instagram"></Icon>
            </a>
            <a href="https://linkedin.com">
              <Icon name="linkedin"></Icon>
            </a>
          </div>
        </GridItem>
      </GridContainer>
    </footer>
  );
};

export default Footer;
