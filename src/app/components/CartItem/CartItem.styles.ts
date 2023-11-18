import styled from "styled-components";

export const Close = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  width: 15px;
  height: 20px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  position: absolute;
  left: 2px;
  top: -1px;
  z-index: 1;
`;

export const CloseButton = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: #000;
  position: relative;
  right: 13px;
  top: 21px;
  align-self: flex-end;
`;

export const ImageContainer = styled.div`
  width: 46px;
  height: 57px;
  flex-shrink: 0;
  margin: 0 0 0 19px;
  display: flex;
`;

export const CartItemContainer = styled.div`
  width: 379px;
  height: 95px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductName = styled.h2`
  width: 100px;
  height: 33px;
  flex-shrink: 0;
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

export const PriceTag = styled.span`
  width: 62px;
  height: 17px;
  flex-shrink: 0;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 121.429% */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  width: 100%;
`;
