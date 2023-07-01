import { useReducer } from "react";

const ReducerComponent = () => {
  const [sum, increment] = useReducer((val, type) => {
    switch (type) {
      case "by_one":
        return val + 1;
      case "by_two":
        return val + 2;
      default:
        return val;
    }
  }, 10);

  return (
    <div className="w-full p-4 flex gap-4">
      <span className="text-3xl text-red-500">{sum}</span>
      <button
        className="p-2 bg-green-500 text-white"
        onClick={() => increment("by_one")}
      >
        Aumentar + 1
      </button>
      <button
        className="p-2 bg-green-500 text-white"
        onClick={() => increment("by_two")}
      >
        Aumentar + 2
      </button>
    </div>
  );
};

export default ReducerComponent;
