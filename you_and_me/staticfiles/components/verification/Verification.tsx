import { Link } from "react-router-dom";
import FormTitle from "../form-title/FormTitle";
import Input from "../input/Input";
import { Section } from "../styles/Styled";
import "./verification.scss";
import { useState } from "react";

const Verification: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    if (value && idx < 5) {
      // inputRefs.current[idx + 1].focus();
    }
  };
  const title = "Verification";
  return (
    <Section className="verification userModal">
      <h1 className="great-title">{title}</h1>
      <form className="form">
        <FormTitle title={title} />
        <p className="form-desc">
          We have send your phone a verification code.
          <br />
          <span className="primary">Enter the code:</span>
        </p>
        <div className="input-box">
          <div className="input-row">
            {code.map((num, idx) => (
              <div key={idx} className="input">
                <input
                  // ref={(el) => (inputRefs.current[idx] = el!)}
                  type="text"
                  name="verification-code-1"
                  id="verification-code-1"
                  className="no-outline"
                  onChange={(e) => handleInputChange(e, idx)}
                  value={num}
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <div className="userLinks">
          <p>
            You didn’t receive a verification code?{" "}
            <Link to="/">Send again</Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn primary full-w no-border no-margin"
        >
          Login
        </button>
      </form>
    </Section>
  );
};

export default Verification;
function useRef<T>(arg0: never[]) {
  throw new Error("Function not implemented.");
}
