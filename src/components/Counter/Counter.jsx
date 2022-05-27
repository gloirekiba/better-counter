const COUNTER_INCREASE = 1;
const COUNTER_DECREASE = COUNTER_INCREASE * -1;

const Counter = ({ counter, setCount }) => {
  const canDecrease = counter.count === 0;

  function handleCount(value) {
    setCount(counter.id, value);
  }

  return (
    <div className="counter">
      <button
        onClick={() => handleCount(COUNTER_DECREASE)}
        disabled={canDecrease}
        className="btn decrease"
      >
        -
      </button>
      <div className="counter-data">
        <span className="counter-name">{counter.name}</span>
        <span className="counter-count">{counter.count}</span>
        <span className="counter-last-update">{counter.lastUpdate}</span>
      </div>
      <button onClick={() => handleCount(COUNTER_INCREASE)} className="btn increase">
        +
      </button>
    </div>
  );
};

export default Counter;
