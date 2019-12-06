import React from 'react';
import { list } from './data.js';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';

class App extends React.Component {
  constructor() {
    super();

    if(!localStorage.list)
    {
      this.state = {
        list,
        search: ""
      }

      localStorage.list = JSON.stringify(this.state.list);
    }
    else
    {
      this.state = {
        list: JSON.parse(localStorage.list),
        search: "" //Search is cleared on reload
      }
    }
  };

  toggleItem = itemId => {
    this.setState(
      {list: this.state.list.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      }),
      search: this.state.search
    },
    () => (localStorage.list = JSON.stringify(this.state.list))
    );
  };

  addItem = taskName => {
    const newItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState(
      {list: [...this.state.list, newItem], search: this.state.search},
      () => (localStorage.list = JSON.stringify(this.state.list))
    );
  };


  clearCompleted = () => {
    this.setState(
      {list: this.state.list.filter( item => {
          return !item.completed;
      }), 
      search: this.state.search},
      () => (localStorage.list = JSON.stringify(this.state.list))
    );
  };

  setSearch = term => {
    this.setState({
      list: this.state.list,
      search: term
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm setSearch={this.setSearch} />
        <ToDoList 
          list={this.state.list}
          search={this.state.search} 
          toggleItem={this.toggleItem}
        />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
