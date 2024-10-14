import { StateProvider } from "../../context/CategoryContextProvider";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Section } from "../styles/Styled";

const Layout: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  return (
    <Section>
      <StateProvider>
        <Header />
      </StateProvider>
      <Section>{children}</Section>
      <Footer />
    </Section>
  );
};

export default Layout;
