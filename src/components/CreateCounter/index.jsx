import { useState } from "react";

import Colors from "../ColorSelector";

const CounterCreate = ({ addCounter }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("white");

  function handleSetName({ target }) {
    setName(target.value);
  }

  function handleAddCounter() {
    if (name.trim() === "") return;
    addCounter(name, color);
  }

  return (
    <div className="counter-create">
      <h3 className="title">Add Counter</h3>
      <input
        onChange={handleSetName}
        value={name}
        type="text"
        className="counter-create-name"
        placeholder="Counter name"
      />
      <div className="counter-create-colors">
        <Colors />
      </div>
      <div className="counter-create-buttons">
        <button className="counter-create-btn">Cancel</button>
        <button onClick={handleAddCounter} className="counter-create-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default CounterCreate;
