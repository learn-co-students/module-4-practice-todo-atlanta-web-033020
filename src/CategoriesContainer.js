import React from 'react';
import CategoryButton from './CategoryButton';

class CategoriesContainer extends React.Component {

  categoriesMap = categories => categories.map(category => {
    return <CategoryButton
      key={category}
      category={category}
      isSelected={this.props.selectedCategory === category}
      setSelectedCategory={this.props.setSelectedCategory}
    />
  });

  render() {
    return this.categoriesMap(this.props.categories)
  }
}

export default CategoriesContainer;