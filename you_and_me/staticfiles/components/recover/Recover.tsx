import { Link } from "react-router-dom";
import FormTitle from "../form-title/FormTitle";
import Input from "../input/Input";
import { Section } from "../styles/Styled";

const Recover: React.FC = () => {
  const title = "Recover";
  return (
    <Section className="recover userModal">
      <h1 className="great-title">Recovering an account</h1>
      <form className="form">
        <FormTitle title={title} />
        <div className="input-box">
          <Input
            inputId="recover-phone"
            inputType="phone"
            label="Enter your phone number"
            required
            type="input"
          />
        </div>
        <button type="submit" className="btn primary full-w no-border">
          Recover
        </button>
        <div className="userLinks">
          <p>
            Don’t have an account yet?{" "}
            <Link to="/register/">Create an account</Link>
          </p>
          <p>
            Do you remember your password? <Link to="/recover/">Log in</Link>
          </p>
        </div>
      </form>
    </Section>
  );
};

export default Recover;
