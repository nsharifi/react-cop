import React, { Component } from "react";
import { render } from "react-dom";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import styled from 'styled-components';
import "./style.css";

const Header = styled.h1`
  background-color: #0a3782;
  color: white;
  padding: 5px;
  border-radius: 3px;
`;

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  handleAddTodo = input => {
    this.setState({
      todos: [...this.state.todos, { text: input }]
    });
  };

  handleDeleteTodo = idx => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== idx)
    });
  };

  render() {
    const { todos, inputText } = this.state;

    return (
      <div>
        <Header>TODO App</Header>
        <NewTodo onAdd={this.handleAddTodo} />
        <Todos todos={todos} onDeleteTodo={this.handleDeleteTodo} />
      </div>
    );
  }
}

render(<TodoApp />, document.getElementById("root"));
