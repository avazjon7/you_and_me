import React from "react";
import Trend from "./trend/Trend";
import PopularCategory from "./popular/PopularCategory";
import TopProduct from "./top_product/TopProduct";

const MainApp: React.FC = () => {
  return (
    <main className="main">
      <Trend />
      <PopularCategory />
      <TopProduct />
    </main>
  );
};

export default MainApp;
