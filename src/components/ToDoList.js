import "../stylefile/ToDoList.css"
import React from 'react';
import ToDoItem from './ToDoItem'


class ToDoList extends React.Component {
  renderItem() {
    const renderItem = this.props.arrayList.map((infoTask) => {
        return <ToDoItem
          key={this.props.arrayList.indexOf(infoTask)}

          taskComplite={infoTask.taskComplite}
          task={infoTask.task}
          indexTask={this.props.arrayList.indexOf(infoTask)}

          taskDelete={this.props.taskDelete}
          taskEditSave={this.props.taskEditSave}
          updateTaskComplite={this.props.updateTaskComplite}

          onEdit={infoTask.onEdit}
          taskOnEdit={this.props.taskOnEdit}/>

    });
    return renderItem;
  }

  render() {
    return (
      <div>
        <div className="todo-taskcount"> {`${this.props.arrayList.length} tasks:`} </div>
        <div className="todo_list"> {this.renderItem()} </div>
      </div>
    );
  };
};

export default ToDoList;
