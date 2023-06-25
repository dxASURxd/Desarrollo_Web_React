import React, { useState } from "react";

const ControledComponent = () => {
  const [inputValue, setInputValue] = useState(" ");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const print = () => {
    alert(inputValue);
  };

  const clear = () => {
    setInputValue("");
  };

  const validate = () => {
    if (inputValue.length > 10) {
      alert("el valor no puede ser mayor a diez");
    } else {
      alert("el valor es correcto");
    }
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-1 border-2"
      />
      <button
        onClick={print}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Imprimir
      </button>
      <button
        onClick={clear}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Borrar
      </button>
      <button
        onClick={validate}
        className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
      >
        Validar
      </button>
    </div>
  );
};

export default ControledComponent;
