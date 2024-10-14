import React, { useEffect } from "react";
import SlideItem from "./SlideItem";
import NavigationButtons from "./NavigationButtons";
import useSlideShow from "../../../../hooks/useSlideShow";

const slideItems = [
  {
    title: "Wedding dresses for women",
    link: "/categories/",
    imgSrc: "/assets/slide-item-1.jpg",
  },
  {
    title: "Wedding dresses for men",
    link: "/categories/",
    imgSrc: "/assets/slide-item-2.webp",
  },
  {
    title: "Wedding cars",
    link: "/categories/",
    imgSrc: "/assets/slide-item-3.webp",
  },
];

const SlideShow: React.FC = () => {
  const { currentSlide, handleDotClick, handleNext, handlePrev } = useSlideShow(
    slideItems.length
  );

  useEffect(() => {
    const dotsContainer =
      document.querySelector<HTMLDivElement>(".slide-btns__dots");
    if (dotsContainer && dotsContainer.childElementCount === 0) {
      slideItems.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("slide-btns__dots-item");
        dot.addEventListener("click", () => handleDotClick(index));
        if (index === 0) {
          dot.classList.add("active-dot");
        }
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer?.querySelectorAll<HTMLButtonElement>(
      ".slide-btns__dots-item"
    );
    slideItems.forEach((_, index) => {
      dots?.[index]?.classList.toggle("active-dot", index === currentSlide);
    });
  }, [currentSlide, handleDotClick]); 

  return (
    <div className="trend-slide">
      {slideItems.map((item, index) => (
        <SlideItem
          key={index}
          title={item.title}
          link={item.link}
          imgSrc={item.imgSrc}
          active={currentSlide === index}
        />
      ))}
      <NavigationButtons handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default SlideShow;
