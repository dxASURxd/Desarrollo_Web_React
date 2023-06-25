import React, { useState } from "react";
import useToDo from "./hooks/useToDo";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    
    const [inputValue, setInputValue] = useState("");
    const { list, addTodo, removeTodo, updateTodo } = useToDo();
  
    const newTodo = () => {
      addTodo(inputValue);
    };
  
    return (
      <div className="flex gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            onChange={({ target }) => {
              setInputValue(target.value);
            }}
          />
          <button onClick={newTodo}>Guardar</button>
        </div>
        <ul>
          {list.map((todo, index) => (
            <ToDoItem
              todo={todo}
              removeTodo={removeTodo}
              index={index}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  };
export default ToDoList;
