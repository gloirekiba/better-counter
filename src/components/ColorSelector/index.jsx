import React from "react";
import styled from "styled-components";

import COLORS from "../../data/ColorList";

const ColorsList = ({ setColor }) => {
  return (
    <Container>
      {COLORS.map((color, index) => (
        <Button
          onClick={({ target }) => setColor(target.value)}
          key={index}
          type="button"
          style={{ backgroundColor: color }}
          title={color}
          value={color}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 0.4em;
  margin-top: 1em;
  padding: 1em 0;
  overflow-x: scroll;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.101);
`;

export default ColorsList;
