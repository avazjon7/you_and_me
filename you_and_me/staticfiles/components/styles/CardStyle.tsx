import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  color: #212121;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 305px;
  overflow: hidden;
  position: relative;
  background-color: white;
`;

export const CardImageBtns = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  gap: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardTags = styled.div`
  width: calc(100% - 10px);
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Discount = styled.p`
  padding: 3px;
  font-size: 16px;
  color: white;
  background-color: #c5677f;
  border-radius: 5px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #c5677f;
  font-size: 14px;
  font-weight: 700;
  border-radius: 2px;
  background-color: white;
  padding: 3px;
  text-transform: uppercase;
`;

export const CardSlide = styled.div`
  position: relative;
  height: 305px;
  img.card-active-img {
    left: 0;
  }
`;

export const CardImage = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

export const CardContent = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 15px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 4px;
  overflow: hidden;
  -webkit-line-clamp: 1;
`;

export const CardCompany = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  i {
    margin-left: 3px;
    width: 12px;
    height: 12px;
  }
`;

export const CardRating = styled.p`
  font-size: 12px;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  margin-bottom: 16px;

  i {
    width: 14px;
    height: 14px;
  }
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

interface CardPriceBeforeProps {
  $transparent?: string;
}

export const CardPriceBefore = styled.p<CardPriceBeforeProps>`
  color: ${(props) => {
    if (props.$transparent === "on") return "transparent";
    else return "#777";
  }};
  font-size: 14px;
  ${(props) => {
    if (props.$transparent === "on") return "user-select: none;";
  }}
  text-decoration: line-through;
`;

export const CardPriceAfter = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
