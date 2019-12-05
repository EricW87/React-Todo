import React from 'react';
import { list } from './data.js';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    if(!localStorage.list)
    {
      this.state = {
        list
      }

      localStorage.list = JSON.stringify(this.state.list);
    }
    else
    {
      this.state = {
        list: JSON.parse(localStorage.list)
      }
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

    localStorage.list = JSON.stringify(this.state.list);
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

    localStorage.list = JSON.stringify(this.state.list);
  }

  clearCompleted = () => {
    console.log("clear");
    this.setState({
      list: this.state.list.filter( item => {
          return !item.completed;
      })
    });

    localStorage.list = JSON.stringify(this.state.list);
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
