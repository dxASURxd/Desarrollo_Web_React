import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

const Contador = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="flex gap-4">
      <h1 className="p-4 font-semibold">{counter}</h1>
      <button
        onClick={increment}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Incrementar
      </button>
      <button
        onClick={decrement}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
