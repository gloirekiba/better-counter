const CounterCreate = () => {
  return (
    <div className="counter-create">
      <h3 className="title">Add Counter</h3>
      <input type="text" className="counter-create-name" placeholder="Counter name" />
      <div className="counter-create-colors">
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
        <span className="counter-create-color"></span>
      </div>
      <div className="counter-create-buttons">
        <button className="counter-create-btn">Cancel</button>
        <button className="counter-create-btn">Save</button>
      </div>
    </div>
  );
};

export default CounterCreate;
