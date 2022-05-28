import React from "react";
import styled from "styled-components";

const AddCounter = () => {
  return <Button>+</Button>;
};

const Button = styled.button`
  position: fixed;
  font-size: 2rem;
  font-weight: 700;
  width: 50px;
  height: 50px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
  right: 10px;
  bottom: 10px;
`;

export default AddCounter;
