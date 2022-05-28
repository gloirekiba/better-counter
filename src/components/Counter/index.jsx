import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const CounterList = ({ counters, setCount }) => {
  return (
    <Container>
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} setCount={setCount} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export default CounterList;
