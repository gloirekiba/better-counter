import COLORS from "../../data/ColorList";

const Colors = () => {
  return (
    <>
      {COLORS.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          title={color}
          className="counter-create-color"
          value={color}
        ></button>
      ))}
    </>
  );
};

export default Colors;
