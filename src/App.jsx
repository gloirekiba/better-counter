import React, { useState } from "react";
import styled from "styled-components";

import CreateCounter from "./components/CreateCounter";
import AddCounter from "./components/AddCounter";
import CounterList from "./components/Counter";

const App = () => {
  const [counters, setCounters] = useState([]);

  function addCounter(name, color) {
    setCounters([
      ...counters,
      { id: counters.length + 1, name, count: 0, color: color, lastUpdate: "never" },
    ]);
  }

  function setCount(id, value) {
    const newCounters = [...counters];
    const counter = newCounters.find((counter) => counter.id === id);
    counter.count += value;
    if (counter.count === 0) counter.lastUpdate = "never";
    // else set lastUpdate to date now
    setCounters(newCounters);
  }

  return (
    <Container>
      <CreateCounter addCounter={addCounter} />
      <CounterList counters={counters} setCount={setCount} />
      <AddCounter />
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
