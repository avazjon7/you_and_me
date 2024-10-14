import { GridContainer, Section } from "../../styles/Styled";
import SlideShow from "./slideShow/SlideShow";
import TrendCat from "./trendlist/TrendCat";

const Trend = () => {
  return (
    <Section className="trend">
      <h2 className="trend-title">Trending Categories</h2>
      <GridContainer style={{ flexWrap: "nowrap" }}>
        <TrendCat />
        <SlideShow />
      </GridContainer>
    </Section>
  );
};

export default Trend;
