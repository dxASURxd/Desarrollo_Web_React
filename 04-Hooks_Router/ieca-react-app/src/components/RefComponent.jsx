import React, { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  const clear = () => {
    inputRef.current.value = "";
  };

  const print = () => {
    alert(inputRef.current.value);
  };

  return (
    <div className="flex gap-4">
      <input ref={inputRef} type="text" className="border-2 p-2" />
      <button
        onClick={focus}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Focus
      </button>

      <button
        onClick={clear}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Clear
      </button>

      <button
        onClick={print}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Imprimir
      </button>
    </div>
  );
};

export default RefComponent;
