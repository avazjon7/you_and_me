import React from "react";
import { Link } from "react-router-dom";

interface SlideItemProps {
  title: string;
  link: string;
  imgSrc: string;
  active: boolean;
}

const SlideItem: React.FC<SlideItemProps> = ({
  title,
  link,
  imgSrc,
  active,
}) => {
  return (
    <div className={`trend-slide__item ${active ? "active-slide" : ""}`}>
      <div className="slide-content">
        <h2 className="slide-content__title">{title}</h2>
        <Link to={link} className="slide-content__link btn btn-white">
          Shop now
        </Link>
      </div>
      <img src={imgSrc} alt={title} />
      <div className="slide-item__effect"></div>
    </div>
  );
};

export default SlideItem;
