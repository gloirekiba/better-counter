import { useState } from "react";

const CounterCreate = ({ addCounter }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("white");

  function handleSetname({ target }) {
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
        onChange={handleSetname}
        value={name}
        type="text"
        className="counter-create-name"
        placeholder="Counter name"
      />
      <div className="counter-create-colors">
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
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
