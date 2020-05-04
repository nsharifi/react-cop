import React from 'react';

const Todo = ({ todo, idx, onDelete}) => (
  <li>
    <span>{todo.text}</span>
    <button onClick={() => onDelete(idx)}>x</button>
  </li>
);

export default Todo;