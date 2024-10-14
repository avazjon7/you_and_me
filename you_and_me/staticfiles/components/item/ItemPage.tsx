import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../../assets/mocks/items";

const ItemPage: React.FC = () => {
  const { itemID } = useParams();

  const item = items.items.find((i) => i.id === Number(itemID));

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="item-page">
      <h1>{item.title}</h1>
      <img src={item.imageSrc.first} alt={item.title} />
      <p>{item.companyName}</p>
      <p>
        {item.price} {item.currency}
      </p>
    </div>
  );
};

export default ItemPage;
