import styled from "styled-components";

export const FinishText = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 53.571% */
`;

export const GotoCheckoutButton = styled.button`
  width: 486px;
  height: 97px;
  background: #000;
`;

export const TotalText = styled.span`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem 0 4rem;
  margin-bottom: 2rem;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  margin: 40px 0 0 48px;
  height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007aff;
    border-radius: 20px;
  }
`;

export const Title = styled.h1`
  width: 180px;
  height: 56px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 36px 0 0 47px;
`;

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  fill: #000;
  top: 39px;
  position: relative;
  right: 23px;
`;

export const Close = styled.span`
  width: 15px;
  height: 20px;
  flex-shrink: 0;
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  top: 11px;
  right: 11px;
  z-index: 1;
`;

export const CartHeader = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const CartProduct = styled.div`
width: 379px;
height: 95px;
flex-shrink: 0;
Copy
border-radius: 8px;
background: #FFF;

box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);`;
