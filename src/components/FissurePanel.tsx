import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../constants/style.ts";
const fissurasTermicas = ['/img1.jpg', '/img2.jpg'];
const fissurasRetracao = ['/img3.jpg', '/img4.jpg'];

const FissurePanel = () => (
  <Panel>
    <Title>Fissuras térmicas</Title>
    <Column>
      <ImageGrid>{fissurasTermicas.map((src, i) => <img src={src} key={i} />)}</ImageGrid>
    </Column>
    <Column>
      <Title>Fissuras de retração</Title>
      <ImageGrid>{fissurasRetracao.map((src, i) => <img src={src} key={i} />)}</ImageGrid>
    </Column>
  </Panel>
);

const Panel = styled.div`
  flex: 2;
  display: flex;
  background: #5a382c;
  border-radius: 16px;
  padding: 1rem;
  gap: 1rem;
`;

const Column = styled.div`
  flex: 1;
  background:rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: white;
  text-align: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  background-color: ${COLORS.white};

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export default FissurePanel;