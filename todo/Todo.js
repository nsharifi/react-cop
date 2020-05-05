import React, { useState } from 'react';
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
  text-decoration: ${({done}) => done ? 'line-through': 'inherit'};
  color: ${({done}) => done ? 'gray': 'inherit'};
`;

const Todo = ({ todo, idx, onDelete}) => {
  const [ isDone, setIsDone ] = useState(false);

  const handleTextClick = done => {
    setIsDone(done);
  };

  return (
    <ListItem>
      <ItemText done={isDone} onClick={() => handleTextClick(!isDone)}>{todo.text}</ItemText>
      <Button onClick={() => onDelete(idx)}>X</Button>
    </ListItem>
  );
};

export default Todo;