import { Link } from "react-router-dom";
import { Section } from "../styles/Styled";
import Input from "../input/Input";
import FormTitle from "../form-title/FormTitle";

const Register: React.FC = () => {
  const title = "Registration";
  return (
    <Section className="register userModal">
      <h1 className="great-title">{title}</h1>
      <form className="form register-form">
        <FormTitle title={title} />
        <div className="input-box">
          <div className="input-row">
            <Input
              inputType="text"
              inputId="firstName"
              label="First name"
              type="input"
              required
            />
            <div className="input-radio">
              <p className="input-radio__title">Gender*</p>
              <div className="input-radio__box">
                <div className="input-radio__box-item">
                  <input type="radio" name="gender" value="Male" id="male" />
                  <label htmlFor="male" className="radio-check"></label>
                  <label htmlFor="male">Male</label>
                </div>
                <div className="input-radio__box-item">
                  <input type="radio" name="gender" value="Male" id="female" />
                  <label htmlFor="female" className="radio-check"></label>
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-row">
            <Input
              inputId="phone"
              inputType="phone"
              type="input"
              label="Phone number"
              required
            />
            <Input
              inputId="email"
              inputType="email"
              type="input"
              label="Email"
              required={false}
            />
          </div>
          <Input
            inputId="password"
            inputType="password"
            type="input"
            label="Password"
            required
          />
          <Input
            inputId="repeat"
            inputType="password"
            type="input"
            label="Repeat password"
            required
          />
        </div>
        <button type="submit" className="btn primary full-w no-border">
          Register
        </button>
        <div className="userLinks">
          <p>
            Do you have an account? <Link to="/login/">Log in</Link>
          </p>
        </div>
      </form>
    </Section>
  );
};

export default Register;
