import React, { Component } from "react";

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
        <input
          type="text"
          name="inputText"
          onChange={this.handleChange}
          value={inputText}
        />
        <button onClick={() => onAdd(inputText)}>
          Add
        </button>
      </React.Fragment>
    );
  }
}
