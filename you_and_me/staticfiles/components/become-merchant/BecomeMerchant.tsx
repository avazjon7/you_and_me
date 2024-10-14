import { useCategories } from "../../hooks/useCategories";
import FormTitle from "../form-title/FormTitle";
import Input from "../input/Input";
import { Section } from "../styles/Styled";

const BecomeMerchant: React.FC = () => {
  const title = "Become a Merchant";
  const { categories } = useCategories();
  return (
    <Section className="becomeMerchant userModal">
      <h1 className="great-title">{title}</h1>
      <form className="form">
        <FormTitle title={title} />
        <div className="input-box no-margin">
          <div className="input-row">
            <Input
              inputId="companyName"
              inputType="text"
              label="Company name"
              type="input"
              required
            />
            <Input
              inputId="companyNumber"
              inputType="phone"
              label="Company number"
              type="input"
              required
            />
          </div>
          <div className="input-row">
            <Input
              inputId="ownerName"
              inputType="text"
              label="Owner name"
              type="input"
              required
            />
            <Input
              inputId="ownerNumber"
              inputType="phone"
              label="Owner number"
              type="input"
              required
            />
          </div>
          <Input
            inputId="email"
            inputType="email"
            label="Company email"
            type="input"
            required
          />
          <Input
            inputId="category"
            inputType="text"
            label="Category"
            type="selector"
            data={categories}
            required
          />
          <Input
            inputId="calendar"
            inputType="text"
            label="Timetable"
            type="calendar"
            required
          />
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
          <button type="submit" className="btn primary full-w no-border no-margin">
            become a merchant
          </button>
        </div>
      </form>
    </Section>
  );
};

export default BecomeMerchant;
