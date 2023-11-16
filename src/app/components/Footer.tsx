import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 12px;
  background: #dedede;
`;

export default function Footer() {
  return (
    <Container>
      <span>MKS sistemas © Todos os direitos reservados</span>
    </Container>
  );
}
