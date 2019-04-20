import './stylefile/app.css';
import React from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

class App extends React.Component  {
  state = { arrayList: [] };

  toDoInput = (task) => {
    this.setState((state) => {
             state.test=true;
      return state.arrayList = [ ...state.arrayList, {task: task, taskComplite: false, onEdit: false} ]
    });
  };

  taskDelete = (index) => {
    this.setState((state) => {
      return state.arrayList.splice(index, 1);
    })
  };

  taskOnEdit = (index, value) => {
    this.setState((state) => {
      return state.arrayList[index].onEdit = value;
    })
  }

  taskEditSave = (indexEditTask, editTask) => {
    this.setState((state) => {
      return state.arrayList[indexEditTask].task = editTask;
    });
  };

  updateTaskComplite = (index) => {
    if (!this.state.arrayList[index].taskComplite) {
      return this.setState(state =>  state.arrayList[index].taskComplite = true);
    }
      return  this.setState(state => state.arrayList[index].taskComplite = false);
  };

  render() {
    // console.log(this.state.arrayList);
    return (
      <div className="main_container">
      <div className="todo_app-cont">
          <h3 className="title"> React ToDo-List Front Side </h3>
          <div className="todo_container">
            <ToDoInput toDoInput={this.toDoInput} />
            <ToDoList
              taskDelete={this.taskDelete}
              taskEditSave={this.taskEditSave}
              arrayList={this.state.arrayList}
              updateTaskComplite={this.updateTaskComplite}

              taskOnEdit={this.taskOnEdit}/>
          </div>
        </div>
      </div>
    );
  };
}
export default App;
