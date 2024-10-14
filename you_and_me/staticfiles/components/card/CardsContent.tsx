import React from "react";
import { Item } from "../../types";
import {
  CardContent,
  CardTitle,
  CardCompany,
  CardRating,
} from "../styles/CardStyle";
import CardPriceComponent from "./CardPrice";
import Icon from "../styles/IconComponent";

interface CardContentProps {
  item: Item;
}

const CardsContent: React.FC<CardContentProps> = ({ item }) => {
  const discountedPrice = Math.floor(
    item.price - item.price * (item.discount / 100)
  );

  return (
    <CardContent>
      <CardTitle>{item.title}</CardTitle>
      <CardCompany>
        {item.companyName}{" "}
        {item.companyStatus === "approved" && <Icon name="approved" />}
      </CardCompany>
      <CardRating>
        <Icon name="star" />
        {item.feedback.rating} feedback ({item.feedback.count})
      </CardRating>
      <CardPriceComponent
        price={item.price}
        discountedPrice={discountedPrice}
        currency={item.currency}
      />
    </CardContent>
  );
};

export default CardsContent;
