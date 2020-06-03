import React from 'react';

const task = props => {
  return (
    <div className='task'>
      <div className='label'>{props.category}</div>
      <div className='text'>{props.text}</div>
      <button
        className="delete"
        onClick={() => props.deleteTask({ text: props.text, category: props.category })}
      >
        X
          </button>
    </div>
  )
}

export default task;