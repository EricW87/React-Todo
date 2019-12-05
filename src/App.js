import React from 'react';
import { list } from './data.js';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    }
  };

  toggleItem = itemId => {
    this.setState({
      list: this.state.list.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = taskName => {
    const newItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newItem]
    });
  }

  clearCompleted = () => {
    console.log("clear");
    this.setState({
      list: this.state.list.filter( item => {
          return !item.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList 
          list={this.state.list} 
          toggleItem={this.toggleItem}
        />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
