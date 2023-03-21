import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      setError({
        title: "Ooops..",
        message: "Please enter a Too-Doo",
      });
      return;
    }
    const firstWordIndex = enteredTodo.indexOf(" ");
    const formattedTodo =
      firstWordIndex === -1
        ? enteredTodo.charAt(0).toUpperCase() + enteredTodo.slice(1)
        : enteredTodo.slice(0, firstWordIndex).charAt(0).toUpperCase() +
          enteredTodo.slice(firstWordIndex + 1);

    props.onAddTodo(formattedTodo);
    setEnteredTodo("");
  };

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addTodoHandler}>
          <div className={style.formControl}>
            <input
              id="todo"
              type="text"
              onChange={todoChangeHandler}
              value={enteredTodo}
              required
            />
            <label htmlFor="todo">
              <span style={{ transitionDelay: "0ms" }}>T</span>
              <span style={{ transitionDelay: "50ms" }}>o</span>
              <span style={{ transitionDelay: "100ms" }}>-</span>
              <span style={{ transitionDelay: "150ms" }}>D</span>
              <span style={{ transitionDelay: "200ms" }}>o</span>
            </label>
          </div>
          <Button type="submit">Add To-Do List</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTodo;
