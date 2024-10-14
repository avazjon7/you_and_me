import React from "react";
import {
  CardPrice,
  CardPriceBefore,
  CardPriceAfter,
} from "../styles/CardStyle";

interface CardPriceProps {
  price: number;
  discountedPrice: number;
  currency: string;
}

const CardPriceComponent: React.FC<CardPriceProps> = ({
  price,
  discountedPrice,
  currency,
}) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("de-DE").format(num);
  };

  return (
    <CardPrice>
      {discountedPrice !== price ? (
        <CardPriceBefore>
          {formatNumber(price)} {currency}
        </CardPriceBefore>
      ) : (
        <CardPriceBefore $transparent="on">
          {formatNumber(price)}
        </CardPriceBefore>
      )}
      <CardPriceAfter>
        {formatNumber(discountedPrice)} {currency}
      </CardPriceAfter>
    </CardPrice>
  );
};

export default CardPriceComponent;
