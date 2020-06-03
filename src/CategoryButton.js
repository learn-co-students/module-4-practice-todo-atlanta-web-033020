import React from 'react';

class CategoryButton extends React.Component {

  render() {
    return (
      <button
        className={this.props.isSelected ? 'selected' : ''}
        onClick={() => this.props.setSelectedCategory(this.props.category)}
      >
        {this.props.category}
      </button>
    )
  }
}

export default CategoryButton;