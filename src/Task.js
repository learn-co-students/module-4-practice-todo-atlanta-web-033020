import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className='task'>
        <div className='label'>{this.props.category}</div>
        <div className='text'>{this.props.text}</div>
        <button
          className="delete"
          onClick={() => this.props.deleteTask({ text: this.props.text, category: this.props.category })}
        >
          X
        </button>
      </div>
    )
  }
}

export default Task;