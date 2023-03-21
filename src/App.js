import React, { useState } from "react";

import AddTodo from "./components/Todos/AddTodo.js";
import TodoList from "./components/Todos/TodoList.js";

const App = () => {
  const [todoList,setTodoList]=useState([])

  const addTodoHandler=(todo)=>{
    setTodoList((prevTodoList)=>{
      return [...prevTodoList, { text: todo, id: Math.random() + 1 }];
    });
  }
  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} />
    </div>
  );
};

export default App;
