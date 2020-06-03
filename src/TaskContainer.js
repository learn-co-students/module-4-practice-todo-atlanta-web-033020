import React from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task'

const TaskContainer = props => {

  const renderTasks = () => {
    const tasks = getTasks(props.tasks, props.selectedCategory)

    return tasks.map(task => {
      return (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTask={props.deleteTask}
        />
      )
    });
  }

  const getTasks = (tasks, category) => tasks.filter(task => task.category === category || category === 'All')

  return (
    <div className='tasks'>
      <h5>Tasks</h5>
      <AddTaskForm addTask={props.addTask} />
      {renderTasks()}
    </div>
  )
}

export default TaskContainer;