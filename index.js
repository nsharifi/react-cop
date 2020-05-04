import React, { Component } from "react";
import { render } from "react-dom";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import "./style.css";

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
        <h1>TODO App</h1>
        <NewTodo onAdd={this.handleAddTodo} />
        <Todos todos={todos} onDeleteTodo={this.handleDeleteTodo} />
      </div>
    );
  }
}

render(<TodoApp />, document.getElementById("root"));
