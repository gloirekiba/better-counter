import React from "react";
import styled from "styled-components";

import COLORS from "../../data/ColorList";

const ColorsList = () => {
  return (
    <Container>
      {COLORS.map((color, index) => (
        <Button key={index} style={{ backgroundColor: color }} title={color} value={color} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1em;
  padding: 1em 1em 1em 0;
  display: flex;
  gap: 0.4em;
  overflow-x: scroll;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
`;

export default ColorsList;
