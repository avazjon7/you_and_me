import React, { useState } from "react";
import { GridItem } from "../styles/Styled";
import "./filter.scss";

const Filter: React.FC = () => {
  const [openedItems, setOpenedItems] = useState<{ [key: number]: boolean }>(
    {0: true}
  );

  const toggleItem = (index: number) => {
    setOpenedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const filterTitles = ["For wedding", "Price", "Tags", "Category"];

  return (
    <GridItem $columns={3} className="filter">
      <h2 className="filter-title">
        <div id="burger-btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span id="title">Filter</span>
      </h2>
      <div className="filter-box">
        <ul className="filter-menu">
          {filterTitles.map((title, index) => (
            <li
              key={index}
              className={`filter-menu__item ${
                openedItems[index] ? "filter-opened" : ""
              }`}
              onClick={() => toggleItem(index)}
            >
              <h5 className="filter-menu__item-title">{title}</h5>
              <ul className="filter-list">
                {index === 0 && (
                  <>
                    <li>
                      <input type="checkbox" id="for-male" name="for-male" />
                      <span className="checkbox"></span>
                      <label htmlFor="for-male">For male</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="for-female"
                        name="for-female"
                      />
                      <span className="checkbox"></span>
                      <label htmlFor="for-female">For female</label>
                    </li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li>
                      <input type="checkbox" name="priceMax" id="priceMax" />
                      <span className="checkbox"></span>
                      <label htmlFor="priceMax">Price Max</label>
                    </li>
                    <li>
                      <input type="checkbox" name="priceMin" id="priceMin" />
                      <span className="checkbox"></span>
                      <label htmlFor="priceMin">Price Min</label>
                    </li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li>
                      <input type="checkbox" id="tags-new" name="tags-new" />
                      <span className="checkbox"></span>
                      <label htmlFor="tags-new">New Arrivals</label>
                    </li>
                    <li>
                      <input type="checkbox" id="tags-sale" name="tags-sale" />
                      <span className="checkbox"></span>
                      <label htmlFor="tags-sale">On Sale</label>
                    </li>
                  </>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </GridItem>
  );
};

export default Filter;
