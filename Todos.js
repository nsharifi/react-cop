import React, { Component } from "react";
import styled from 'styled-components';
import Todo from './Todo';

const List = styled.ul`
  padding-left: 0;
  margin-left: 0;
`;

export default class Todos extends Component {
  render() {
    const { todos, onDeleteTodo } = this.props;

    return (
      <List>
        {todos.map((todo, idx) => (
          <Todo todo={todo} idx={idx} onDelete={onDeleteTodo} key={idx} />   
        ))}
      </List>
    );
  }
}
