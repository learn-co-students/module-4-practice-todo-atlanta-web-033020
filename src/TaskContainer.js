import React from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task'

class TaskContainer extends React.Component {

  renderTasks = () => {
    const tasks = this.getTasks(this.props.tasks, this.props.selectedCategory)

    return tasks.map(task => {
      return (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTask={this.props.deleteTask}
        />
      )
    });
  }

  getTasks = (tasks, category) => tasks.filter(task => task.category === category || category === 'All')

  render() {
    return <div className='tasks'>
      <h5>Tasks</h5>
      <AddTaskForm addTask={this.props.addTask} />
      {this.renderTasks()}
    </div>
  }
}

export default TaskContainer;