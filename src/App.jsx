const App = () => {
  return (
    <div className="counter-list">
      <div className="counter">
        <button className="decrease">-</button>
        <div className="content">
          <span className="name">eat banana</span>
          <span className="count">0</span>
          <span className="last-count">never</span>
        </div>
        <button className="increase">+</button>
      </div>
    </div>
  );
};

export default App;
