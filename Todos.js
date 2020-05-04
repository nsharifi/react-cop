import React, { Component } from "react";
import Todo from './Todo';

export default class Todos extends Component {
  render() {
    const { todos, onDeleteTodo } = this.props;

    return (
      <ul>
        {todos.map((todo, idx) => (
          <Todo todo={todo} idx={idx} onDelete={onDeleteTodo} key={idx} />            
        ))}
      </ul>
    );
  }
}
