import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from './StyledComponents';

const Input = styled.input`
  background-color: transparent;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #0d56c0;
  padding: 5px;
  margin-right: 3px;
  font-size: 1.2em;
`;

export default class NewTodo extends Component {
  state = {
    inputText: ''
  }

  handleChange = (event) => {
    this.setState({inputText: event.target.value });
    event.preventDefault();
  }

  render() {
    const { onAdd, onChange } = this.props;
    const { inputText } = this.state;
    
    return (
      <React.Fragment>
        <Input
          type="text"
          name="inputText"
          onChange={this.handleChange}
          value={inputText}
        />
        <Button onClick={() => onAdd(inputText)} primary>
          Add
        </Button>

      </React.Fragment>
    );
  }
}
