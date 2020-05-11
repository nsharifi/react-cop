import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import styled from "styled-components";
import { getTodos, postTodo } from "./ApiService";
import "./style.css";

const Header = styled.h1`
  background-color: #0a3782;
  color: white;
  padding: 5px;
  border-radius: 3px;
`;

const TodoApp = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getTodos().then(todos => {
      setTodos(
        todos.slice(0, 10).map(todo => ({ text: todo.title }))
      )
    })
  }, []);

  const handleAddTodo = input => {
    postTodo(input).then(res => {
      res.id === 201 && setTodos([...(todos || []), { text: input }]);
    });
  };

  const handleDeleteTodo = idx => {
    setTodos(todos.filter((todo, i) => i !== idx));
  };

  return (
      <div>
        <Header>TODO App</Header>
        <NewTodo onAdd={handleAddTodo} />
        <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
    );
}

render(<TodoApp />, document.getElementById("root"));
