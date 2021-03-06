import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../theme";

const ColorsList = ({ setColor, defaultColor }) => {
  const [selected, setSelected] = useState(defaultColor);

  function onSelect({ value }) {
    setColor(value);
    setSelected(value);
  }

  return (
    <Container>
      {theme.colors.extras.map((color, index) => (
        <Button
          onClick={({ target }) => onSelect(target)}
          key={index}
          type="button"
          style={{ backgroundColor: color }}
          value={color}
        >
          {color === selected && <Span>&#10004;</Span>}
        </Button>
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
  color: ${({ theme }) => theme.colors.secondary};
  flex-shrink: 0;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.3);
`;

const Span = styled.span``;

export default ColorsList;
