import React from 'react';

const CategoryButton = props => {

  return (
    <button
      className={props.isSelected ? 'selected' : ''}
      onClick={() => props.setSelectedCategory(props.category)}
    >
      {props.category}
    </button>
  )
}

export default CategoryButton;