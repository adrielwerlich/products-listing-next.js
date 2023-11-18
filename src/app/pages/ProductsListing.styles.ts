import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 23px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin-top: 100px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007aff;
    border-radius: 20px;
  }
`;