import React, { useState, useEffect } from "react";
import { Item } from "../../types";
import { CardWrapper } from "../styles/CardStyle";
import CardImagesContainer from "./CardImagesContainer";
import CardsContent from "./CardsContent";
import { Link } from "react-router-dom";

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "{}");
    if (savedLikes[item.id]) {
      setLike(true);
    }
  }, [item.id]);

  const handleLikeClick = () => {
    const newLikeState = !like;
    setLike(newLikeState);

    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "{}");
    if (newLikeState) {
      savedLikes[item.id] = true;
    } else {
      delete savedLikes[item.id];
    }
    localStorage.setItem("likedItems", JSON.stringify(savedLikes));
  };

  return (
    <CardWrapper>
      <CardImagesContainer
        item={item}
        handleLikeClick={handleLikeClick}
        like={like}
      />
      <CardsContent item={item} />
      <Link to={`/categories/${item.category}/${item.type}/${item.id}`} className="card-main__link"></Link>
    </CardWrapper>
  );
};

export default Card;
