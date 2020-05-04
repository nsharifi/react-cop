import React from 'react';
import styled from 'styled-components';
import { Button } from '../StyledComponents';

const ListItem = styled.li`
  list-style-type: none;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ItemText = styled.span`
  background-color: #c9e7fd;
  width: 100%;
  padding: 3px;
  border-radius: 3px;
  margin: 2px 0;
`;

const Todo = ({ todo, idx, onDelete}) => (
  <ListItem>
    <ItemText>{todo.text}</ItemText>
    <Button onClick={() => onDelete(idx)}>X</Button>
  </ListItem>
);

export default Todo;