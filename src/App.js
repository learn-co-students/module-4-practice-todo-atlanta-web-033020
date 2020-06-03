import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoriesContainer from './CategoriesContainer';
import TaskContainer from './TaskContainer';

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: 'All'
  }

  setSelectedCategory = category => {
    this.setState({ selectedCategory: category })
  }

  addTask = task => this.setState({ tasks: [...this.state.tasks, task] })

  deleteTask = taskToDelete => {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(task => task.text === taskToDelete.text && task.category === taskToDelete.category)
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className="categories">
          <h5>Category Filters</h5>
          <CategoriesContainer
            selectedCategory={this.state.selectedCategory}
            setSelectedCategory={this.setSelectedCategory}
            categories={CATEGORIES}
          />
        </div>
        <TaskContainer
          selectedCategory={this.state.selectedCategory}
          tasks={this.state.tasks} addTask={this.addTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}


export default App;
