import { useState } from "react";

import CounterCreate from "./components/CounterCreate";
import AddCounter from "./components/AddCounter";
import CounterList from "./components/CounterList";

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
    <div className="container">
      <CounterCreate addCounter={addCounter} />
      <CounterList counters={counters} setCount={setCount} />
      <AddCounter />
    </div>
  );
};

export default App;
