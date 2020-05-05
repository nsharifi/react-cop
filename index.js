import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: []
    };
  }

  componentDidMount() {
    this.refs.inputField.focus();
  }

  handleInputChange = event => {
    this.setState({ input: event.target.value });
    event.preventDefault();
  };

  handleAddTodo = input => {
    this.setState({
      todos: [...this.state.todos, { text: input }],
      input: ''
    });
    this.refs.inputField.focus();
  };

  handleDelete = idx => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        ...this.state.todos.slice(idx + 1)
      ]
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>TODO App</h1>
        <input
          ref="inputField"
          type="text"
          name="input"
          onChange={this.handleInputChange}
          value={this.state.input}
        />
        <button onClick={() => this.handleAddTodo(this.state.input)}>
          Add
        </button>
        <ul>
          {todos.map((todo, idx) => (
            <li>
              {todo.text}
              <button onClick={() => this.handleDelete(idx)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
