import React, { Component } from "react";
import styled from "styled-components";
import Todo from "./todo/Todo";

const List = styled.ul`
  padding-left: 0;
  margin-left: 0;
`;

export default class Todos extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== this.props.todos) {
      console.log('todos changed');
    }
  }

  render() {
    const { todos, onDeleteTodo } = this.props;

    return !!todos ? (
      <List>
        {todos.map((todo, idx) => (
          <Todo todo={todo} idx={idx} onDelete={onDeleteTodo} key={idx} />
        ))}
      </List>
    ) : (
      "loading..."
    );
  }
}
