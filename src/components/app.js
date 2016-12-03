import React from 'react';
import List from './list'
import NewItem from './new-item'
const todos = [
  {
    task: 'make todo lists',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: false
  },
  {
    task: 'watch movie with jianjian',
    isCompleted: false
  },
  {
    task: 'laugh laugh laugh',
    isCompleted: false
  }
];
export default class App extends React.Component {
  createTask(task){
    this.state.todos.push({
      task: task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }
  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState ({ todos : this.state.todos });
  }
  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState ({ todos : this.state.todos });
  }
  deleteTask(task){
    _.remove(this.state.todos, todo => todo.task === task);
    this.setState ({ todos : this.state.todos });
  }
  constructor(props) {
    super(props);
    this.state= {todos}
  }
  render() {
    return(
        <div>
          <h1>React Todos List App Version 1 (with only react and webpack)</h1>
        <NewItem createTask = {this.createTask.bind(this)} todos = {this.state.todos}/>
          <List todos= {this.state.todos}
            toggleTask= {this.toggleTask.bind(this)}
            saveTask= {this.saveTask.bind(this) }
            deleteTask = {this.deleteTask.bind(this) }/>
        </div>
    );
  }
}
