import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import ManageCounter from "./components/ManageCounter";
import CounterList from "./components/CounterList";

const App = () => {
  const [counters, setCounters] = useState([]);
  const [showCounterCreate, setShowCounterCreate] = useState(false);

  function addCounter(name, color) {
    setCounters([...counters, { id: uuidv4(), name, count: 0, color: color, lastUpdate: null }]);
  }

  function deleteCounter(id) {
    const newCounters = [...counters];
    newCounters.forEach((counter, index) => counter.id === id && newCounters.splice(index, 1));
    setCounters(newCounters);
  }

  function editCounter(id, data) {
    const newCounters = [...counters];
    let counter = newCounters.find((counter) => counter.id === id);
    counter = Object.assign(counter, data);
    setCounters(newCounters);
  }

  function updateCount(id, value) {
    const newCounters = [...counters];
    const counter = newCounters.find((counter) => counter.id === id);
    counter.count += value;
    if (counter.count === 0) counter.lastUpdate = null;
    else counter.lastUpdate = new Date().toISOString();
    setCounters(newCounters);
  }

  return (
    <>
      {showCounterCreate && (
        <ManageCounter
          context="create"
          addCounter={addCounter}
          setShowCounterCreate={setShowCounterCreate}
        />
      )}
      <Container>
        {counters.length === 0 ? (
          <NoCounterFound>
            No counter have been found, please create some by cliking on the{" "}
            <Strong>(&#43;)</Strong> button bellow
          </NoCounterFound>
        ) : (
          <CounterList
            counters={counters}
            updateCount={updateCount}
            editCounter={editCounter}
            deleteCounter={deleteCounter}
          />
        )}
        {!showCounterCreate && (
          <ShowManager onClick={() => setShowCounterCreate(true)}>&#43;</ShowManager>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

const NoCounterFound = styled.h3`
  font-size: 4em;
  font-weight: 400;
  text-align: center;
`;

const Strong = styled.strong`
  font-weight: 700;
`;

const ShowManager = styled.button`
  position: fixed;
  right: 5%;
  bottom: 10%;
  width: 50px;
  height: 50px;
  padding: 0.5em;
  font-size: 2rem;
  font-weight: 700;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

export default App;
