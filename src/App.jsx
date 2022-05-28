import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import CounterManager from "./components/CounterManager";
import CounterList from "./components/CounterList";

const LOCAL_STORAGE_KEY = "better-counter-clone";

const App = () => {
  const [counters, setCounters] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function addCounter(name, color) {
    setCounters([...counters, { id: uuidv4(), name, count: 0, color, lastUpdate: null }]);
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

  useEffect(() => {
    const storedCounters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedCounters) setCounters(storedCounters);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  return (
    <>
      {showForm && (
        <CounterManager context="create" addCounter={addCounter} setShowForm={setShowForm} />
      )}
      <Container>
        {counters.length === 0 ? (
          <NoCounterFound>
            No counter found, click the <Strong>(&#43;)</Strong> button bellow to add
          </NoCounterFound>
        ) : (
          <CounterList
            counters={counters}
            updateCount={updateCount}
            editCounter={editCounter}
            deleteCounter={deleteCounter}
          />
        )}
        {!showForm && <ShowManager onClick={() => setShowForm(true)}>&#43;</ShowManager>}
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
  width: 60px;
  height: 60px;
  padding: 0.5em;
  font-size: 2.3rem;
  font-weight: 700;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.144);
`;

export default App;
