import React, { useState } from "react";

import Card from "../UI/Card";
import CheckBox from "../UI/CheckBox"
import style from "./TodoList.module.css";
const TodoList = (props) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked(!checked);
  };
  if (props.todos.length === 0) {
    return null; //if there is no todo in list-> hide card
  }
  return (
    <Card className={style.todos}>
      <ul className="">
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <CheckBox
              checked={todo.checked}
              id={todo.id}
              onChange={() => checkHandler(todo.id)}
              type="checkbox"
              text={todo.text}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
