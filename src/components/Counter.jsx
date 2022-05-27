const Counter = () => {
  return (
    <div className="counter">
      <button className="btn decrease">-</button>
      <div className="counter-data">
        <span className="counter-name">eat banana</span>
        <span className="counter-count">0</span>
        <span className="counter-last-count">never</span>
      </div>
      <button className="btn increase">+</button>
    </div>
  );
};

export default Counter;
