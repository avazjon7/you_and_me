import React from "react";
import Icon from "../../../styles/IconComponent";

interface NavigationButtonsProps {
  handleNext: () => void;
  handlePrev: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="slide-btns">
      <button className="arrow-prev no-outline" onClick={handlePrev}>
        <Icon name="arrowUp" />
      </button>
      <div className="slide-btns__dots"></div>
      <button className="arrow-next no-outline" onClick={handleNext}>
        <Icon name="arrowDown" />
      </button>
    </div>
  );
};

export default NavigationButtons;
