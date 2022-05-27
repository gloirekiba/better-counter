import Counter from "./Counter";

const CounterList = ({ counters, setCount }) => {
  return (
    <div className="counter-list">
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} setCount={setCount} />
      ))}
    </div>
  );
};

export default CounterList;
