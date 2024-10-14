import { Link } from "react-router-dom";
import Icon from "../styles/IconComponent";

interface FormTitleInterface {
  title: string;
}

const FormTitle: React.FC<FormTitleInterface> = ({ title }) => {
  return (
    <div className="form-title">
      <h2>{title}!</h2>
      <Link to="/">
        Home<Icon name="arrowRightLine" />
      </Link>
    </div>
  );
};

export default FormTitle;
