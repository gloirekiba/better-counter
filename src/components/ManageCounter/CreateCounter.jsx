import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ColorSelector from "../ColorSelector";

const CreateCounter = ({ addCounter, setShowForm }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("white");

  function onChange({ target }) {
    setName(target.value);
  }

  function onCreateCounter(e) {
    e.preventDefault();
    if (name.trim() === "") return;
    addCounter(name, color);
    setName("");
  }

  function onClose() {
    document.body.style.overflow = "auto";
    setShowForm(false);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <Overlay>
      <Container>
        <Title>Add Counter</Title>
        <Form onSubmit={onCreateCounter}>
          <Input
            onChange={onChange}
            value={name}
            type="text"
            placeholder="Counter name"
            autoFocus
          />
          <ColorSelector setColor={setColor} defaultColor={color} />
          <ButtonGroup>
            <Button type="button" onClick={() => onClose(false)}>
              Close
            </Button>
            <Button type="submit">Save</Button>
          </ButtonGroup>
        </Form>
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
  background-color: rgba(0, 0, 0, 0.7);
  animation: anim 0.4s 0s forwards;
  @keyframes anim {
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Container = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 95%;
  max-width: 600px;
  padding: 2em;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1em;
  text-transform: capitalize;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  font-size: 2.3rem;
  border: none;
  padding: 0.3em 0;
  border-bottom: 2px solid #4444446a;
  outline: none;
  background-color: transparent;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 50px;
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default CreateCounter;
