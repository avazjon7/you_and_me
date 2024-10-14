import React from "react";
import { Item } from "../../types";
import {
  CardImageContainer,
  CardImageBtns,
  CardSlide,
  CardImage,
  CardTags,
  Discount,
  Tag,
} from "../styles/CardStyle";
import Icon from "../styles/IconComponent";

interface CardImageContainerProps {
  item: Item;
  handleLikeClick: () => void;
  like: boolean;
}

const CardImagesContainer: React.FC<CardImageContainerProps> = ({
  item,
  handleLikeClick,
  like,
}) => {
  const handleShareClick = () => {
    // Ensure Web Share API is supported
    if (navigator.share) {
      const data = {
        title: "You&Me share",
        text: `${item.title} shunday narsa bor ekan`,
        url:
          window.location.origin +
          `/categories/${item.category}/${item.type}/${item.id}`,
      };

      navigator
        .share(data)
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Share failed", error));
    } else {
      // Fallback for unsupported browsers
      console.log("Web Share API is not supported in this browser.");
      // Optionally, you could copy the URL to the clipboard
      navigator.clipboard
        .writeText(
          window.location.origin +
            `/categories/${item.category}/${item.type}/${item.id}`
        )
        .then(() => console.log("URL copied to clipboard"))
        .catch((error) =>
          console.error("Failed to copy URL to clipboard", error)
        );
    }
  };

  return (
    <CardImageContainer>
      <CardImageBtns>
        <button className={`card-like${like ? " liked" : ""}`} onClick={handleLikeClick}>
          <Icon name="like" />
        </button>
        <button className="card-share" onClick={handleShareClick}>
          <Icon name="share" />
        </button>
      </CardImageBtns>
      <CardSlide>
        <CardImage
          src={item.imageSrc.first}
          alt={item.title}
          className="card-image-1 card-active-img"
        />
      </CardSlide>
      <CardTags>
        {item.discount !== 0 ? (
          <Discount>{item.discount}%</Discount>
        ) : (
          <span></span>
        )}
        {item.tag && <Tag>{item.tag}</Tag>}
      </CardTags>
    </CardImageContainer>
  );
};

export default CardImagesContainer;
