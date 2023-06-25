import { useState } from "react";

const useToDo = () => {
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...list, { text: todo, done: false }]);
  };

  const removeTodo = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const updateTodo = (index, checked) => {
    console.log(checked);
    setList(
      list.map((todo, i) => {
        if (i === index) {
          return { ...todo, done: checked === "on" };
        }
        return todo;
      })
    );
  };

  return {
    list,
    addTodo,
    removeTodo,
    updateTodo,
  };
};

export default useToDo;
