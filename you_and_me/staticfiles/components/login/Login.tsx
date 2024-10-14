import { Link } from "react-router-dom";
import Input from "../input/Input";
import { Section } from "../styles/Styled";
import Icon from "../styles/IconComponent";
import FormTitle from "../form-title/FormTitle";

const Login: React.FC = () => {
  const title = "Login";
  return (
    <Section className="login userModal">
      <h1 className="great-title">{title}</h1>
      <form className="login-form form">
        <FormTitle title={title} />
        <div className="input-box">
          <Input
            inputType="phone"
            type="input"
            label="Phone number"
            inputId="phone-number"
            required
          />
          <Input
            inputType="password"
            type="input"
            label="Password"
            inputId="password"
            required
          />
        </div>
        <div className="remember">
          <input type="checkbox" id="remember" name="remember" />
          <label className="checkbox" htmlFor="remember">
            <Icon name="checkbox" />
          </label>
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className="btn primary full-w no-border">
          Login
        </button>
        <div className="userLinks">
          <p>
            Don’t have an account yet?{" "}
            <Link to="/register/">Create an account</Link>
          </p>
          <p>
            Forgot your password? <Link to="/recover/">Recover it</Link>
          </p>
        </div>
      </form>
    </Section>
  );
};

export default Login;
