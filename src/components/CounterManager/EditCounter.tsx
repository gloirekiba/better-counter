import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ColorsList from "../ColorSelector";

const EditCounter = ({ counter, editCounter, deleteCounter, setShowForm }) => {
  const [name, setName] = useState(counter.name);
  const [color, setColor] = useState(counter.color);
  const [canSave, setCanSave] = useState(true);

  function onChange({ value }) {
    setName(value);
    if (value.trim() === "") setCanSave(false);
    else setCanSave(true);
  }

  function onClose() {
    setShowForm(false);
    document.body.style.overflow = "auto";
  }

  function onDelete() {
    onClose();
    deleteCounter(counter.id);
  }

  function onSave(e) {
    e.preventDefault();
    onClose();
    editCounter(counter.id, {
      id: counter.id,
      name,
      color,
      count: counter.count,
      lastUpdate: counter.lastUpdate,
    });
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Overlay>
      <Container>
        <Title>Edit counter</Title>
        <Form onSubmit={onSave}>
          <Input
            onChange={({ target }) => onChange(target)}
            value={name}
            type="text"
            placeholder="Counter name"
            autoFocus
          />
          <ColorsList setColor={setColor} defaultColor={color} />
          <ButtonGroup>
            <Button type="button" onClick={onDelete}>
              Delete
            </Button>
            <Button type="button" onClick={onClose}>
              Close
            </Button>
            <Button disabled={!canSave} type="submit">
              Save
            </Button>
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
  width: 95%;
  max-width: 400px;
  margin: 100px auto 0;
  padding: 2em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: lowercase;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  font-size: 2.3rem;
  border: none;
  padding: 0.3em 0;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  outline: none;
  background-color: transparent;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3em;
  margin-top: 50px;
`;

const Button = styled.button`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  text-transform: uppercase;
  :first-child {
    margin-right: auto;
    color: tomato;
  }
`;

export default EditCounter;
