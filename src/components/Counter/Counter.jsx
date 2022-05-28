import React from "react";
import styled from "styled-components";

const COUNTER_INCREASE = 1;
const COUNTER_DECREASE = COUNTER_INCREASE * -1;

const Counter = ({ counter, setCount }) => {
  const canDecrease = counter.count === 0;

  function handleCount(value) {
    setCount(counter.id, value);
  }

  return (
    <Container>
      <Button onClick={() => handleCount(COUNTER_DECREASE)} disabled={canDecrease}>
        -
      </Button>
      <Datas>
        <Name>{counter.name}</Name>
        <Count>{counter.count}</Count>
        <LastUpdate>{counter.lastUpdate}</LastUpdate>
      </Datas>
      <Button onClick={() => handleCount(COUNTER_INCREASE)}>+</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

const Button = styled.button`
  padding: 0.1em 0.6em;
  font-size: 5rem;
  font-weight: 400;
  cursor: pointer;
`;

const Datas = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  text-align: center;
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const Count = styled.span`
  font-size: 3em;
`;
const LastUpdate = styled.span`
  font-size: 1.6rem;
`;

export default Counter;
