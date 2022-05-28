import React, { useState } from "react";
import styled from "styled-components";
import { formatDistance } from "date-fns";

import ManageCounter from "../ManageCounter";

const COUNTER_INCREASE = 1;
const COUNTER_DECREASE = COUNTER_INCREASE * -1;

const Counter = ({ counter, updateCount, editCounter, deleteCounter }) => {
  const canDecrease = counter.count === 0;
  const [showForm, setShowForm] = useState(false);

  function onUpdateCount(value) {
    updateCount(counter.id, value);
  }

  return (
    <>
      {showForm && (
        <ManageCounter
          context="edit"
          counter={counter}
          editCounter={editCounter}
          deleteCounter={deleteCounter}
          setShowForm={setShowForm}
        />
      )}
      <Container style={{ backgroundColor: counter.color }}>
        <Button onClick={() => onUpdateCount(COUNTER_DECREASE)} disabled={canDecrease}>
          &#8722;
        </Button>
        <Datas onClick={() => setShowForm(true)}>
          <Name>{counter.name}</Name>
          <Count>{counter.count}</Count>
          <LastUpdate>
            <Span role="img" aria-label="clock">
              &#128336;
            </Span>{" "}
            {counter.lastUpdate
              ? formatDistance(new Date(counter.lastUpdate), new Date(), { addSuffix: true })
              : "never"}
          </LastUpdate>
        </Datas>
        <Button onClick={() => onUpdateCount(COUNTER_INCREASE)}>&#43;</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
  animation: anim 0.4s 0s forwards;
  @keyframes anim {
    to {
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  padding: 0.1em 0.6em;
  font-size: 5rem;
  font-weight: 400;
`;

const Datas = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  text-align: center;
  cursor: cell;
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  word-break: break-all;
`;

const Count = styled.span`
  font-size: 3em;
`;
const LastUpdate = styled.span`
  font-size: 1.6rem;
`;

const Span = styled.span``;

export default Counter;
