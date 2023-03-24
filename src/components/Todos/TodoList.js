import React, { useState } from "react";

import Card from "../UI/Card";
import style from "./TodoList.module.css";
const TodoList = (props) => {
  const [checked, setChecked] = useState(false)
  const checkHandler=()=>{
    setChecked(!checked);
  }
  if (props.todos.length === 0) {
    return null; //if there is no user hide card
  }
  return (
    <Card className={style.todos}>
      <ul className="">
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <input checked={todo.checked} onChange={() => checkHandler(todo.id)} className={style.check} type="checkbox" />
            {todo.text}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
