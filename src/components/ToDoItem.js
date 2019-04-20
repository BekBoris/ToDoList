import "../stylefile/ToDoItem.css"
import React from 'react';

class ToDoItemm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editSaveTuggle: this.props.onEdit, editText: this.props.task, mouse: "leave" };
  };
  inputEditSave = (event) => {
    this.setState({ editText: event.target.value }, () => {
      this.renderType(this.state.editText);
    })
  }

  mouseEvent(event) {
    this.setState({mouse: event});
  }

  updateTaskIf(index) {
    if (!this.props.onEdit) {
      return this.props.updateTaskComplite(index);
    }
  }
	// what is the problem with unreachble code  in function ?

  renderType(value, type) {
    if (!type) {
       return (
         <div
           className={`${this.state.mouse}`}
           onMouseEnter={() => {this.mouseEvent("enter")}}
           onMouseLeave={() => {this.mouseEvent("leave")}}
           >
           {this.props.task}
         </div>
       );
    };
	if (type) {
      return (
        <div className="input_wrapper">
          <input  type="text"
            className="input_editsave"
            onChange={ this.inputEditSave }
            value={ value }/>
        </div>
      );
    };
  }

  EditSave = (index, value) => {
    if(!this.props.onEdit){
      this.setState({editSaveTuggle: true, editText: value }, () => {
      this.renderType(value, true);
      this.props.taskOnEdit(this.props.indexTask, true);
      });
    } else {
      this.setState({ editSaveTuggle: false, editText: value }, () => {
      this.renderType(value, false);
      this.props.taskOnEdit(this.props.indexTask, false);
      this.props.taskEditSave(this.props.indexTask, this.state.editText);
      });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.task !== this.props.task) {
      this.setState({ editText: this.props.task })
    }
    if (prevState.editText !== this.state.editText) {
      this.props.taskEditSave(this.props.indexTask, this.state.editText);
    }
  }

  render() {
    return (
      <div className="todo_item">
        <div
          className={`${this.props.taskComplite} todo_item-row`}
          onClick={() => {this.updateTaskIf(this.props.indexTask)}}
        >
          { this.renderType(this.state.editText, this.props.onEdit) }
        </div>
        <button className={`${this.props.taskComplite} doneundone`} onClick={ () => { this.props.updateTaskComplite(this.props.indexTask)} } >
          {this.props.taskComplite ? "done" : "undone"}
        </button>

        <button className="editsave" onClick={ () => { this.EditSave(this.props.indexTask, this.state.editText) } }>
          {!this.props.onEdit ? "Edit" : "Save"}
        </button>

        <button className="delete" onClick={() => {this.props.taskDelete(this.props.indexTask)}}>
          Delete
        </button>

      </div>
    );
  };
}

export default ToDoItemm;
