import React, { useState } from "react";
import styled from "styled-components";

import ColorsList from "../ColorSelector";

const CreateCounter = ({ addCounter }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("white");

  function handleSetName({ target }) {
    setName(target.value);
  }

  function handleAddCounter() {
    if (name.trim() === "") return;
    addCounter(name, color);
  }

  return (
    <Overlay>
      <Container>
        <Title>Add Counter</Title>
        <Input onChange={handleSetName} value={name} type="text" placeholder="Counter name" />
        <ColorsList />
        <ButtonsContainer>
          <Button>Cancel</Button>
          <Button onClick={handleAddCounter}>Save</Button>
        </ButtonsContainer>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 95%;
  max-width: 600px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border-radius: 5px;
  background-color: rgb(181, 177, 177);
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1em;
  text-transform: capitalize;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2.3rem;
  border: none;
  padding: 0.3em 0;
  border-bottom: 2px solid #4444446a;
  outline: none;
  background-color: transparent;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: auto;
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default CreateCounter;
