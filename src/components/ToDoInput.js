import "../stylefile/ToDoInput.css"
import React from 'react';

class ToDoInput extends React.Component {
  state = {task: '' };

  onInputeChange = (event) => {
    return this.setState({ task: event.target.value } );

  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({task: '' })
    if (this.state.task !== '') {
      this.props.toDoInput(this.state.task);
    }
  };

  render() {
    return (
      <div className="todo_input-container">
        <form className="todo_form" onSubmit={this.onFormSubmit}>
          <input
            className="todo_input"
            type="text"
            onChange={this.onInputeChange}
            value={this.state.task}
            placeholder="What Needs to be Done?"
          />
          <button
            className="todo_button"
            type="submit"
            onClick={this.onFormSubmit}>
            Create
          </button>
          </form>
      </div>
    );
  };

}

export default ToDoInput;
