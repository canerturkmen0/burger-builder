import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

  let ingredients = [];
  Object.keys(props.ingredients).forEach(ingKey => {
    for(let i=0; i<props.ingredients[ingKey]; i++)
      ingredients.push(<BurgerIngredient key={ingKey+i} type={ingKey} />)
  });

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
