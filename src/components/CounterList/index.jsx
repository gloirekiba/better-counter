import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const CounterList = ({ counters, updateCount, editCounter, deleteCounter }) => {
  return (
    <Container>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          updateCount={updateCount}
          deleteCounter={deleteCounter}
          editCounter={editCounter}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1em;
`;

export default CounterList;
