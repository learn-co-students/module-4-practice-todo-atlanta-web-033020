import React from 'react';
import CategoryButton from './CategoryButton';

const CategoriesContainer = props => {

  const categoriesMap = categories => categories.map(category => {
    return (
      <CategoryButton
        key={category}
        category={category}
        isSelected={props.selectedCategory === category}
        setSelectedCategory={props.setSelectedCategory}
      />
    )
  });

  return categoriesMap(props.categories)
}

export default CategoriesContainer;