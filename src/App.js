import React, { Component } from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";



const tasks = [
  {
    task: 'Call Mark',
    id: 443,
    completed: false,
  },
  {
    task: 'Fire Stephanie',
    id: 444,
    completed: false,
  },
  {
    task: 'Research functional-based react vs class-based react',
    id: 445,
    completed: false,
  },
];


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      task: '',
    };
    this.toggledCompleted = this.toggledCompleted.bind(this);
  }

  handleChanges = (event) => {
    this.setState({
      task: event.target.value,
    })
  }

    // add the task to the state
  addTask = (newTaskName) => {
    const newTask = {
      task: newTaskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

    // handle the click event for addTask
  handleAdd = (e) => {
    e.preventDefault();
    this.addTask(this.state.task);
    // reset the input to an empty string
    this.setState({task: ""})
  }

  // delete
  handleClear = (e) => {
    e.preventDefault();
    let anyTasksCompleted = false;
    this.state.tasks.map( task => {
      task.completed ? anyTasksCompleted = true : anyTasksCompleted = false
    })
    anyTasksCompleted ? 
    this.setState({
      tasks: this.state.tasks.filter( task => {
        return task.completed === false;
      }
      )
    })

    :

    alert("No tasks have been completed yet")
  }

  // handle toggle on completed
  toggledCompleted(taskIdentifier) {
    console.log("toggledCompleted ", taskIdentifier);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskIdentifier) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggledCompleted}/>
        <TodoForm task={this.state.task} handleChanges={this.handleChanges} handleAdd={this.handleAdd} addTask={this.addTask} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
