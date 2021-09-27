import React from 'react';
import { useLocation } from 'react-router-dom';
import { EspecificRecipe } from '../components/index';

export default function EspecificDrink() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  return (
    <div>
      <EspecificRecipe
        nameApi="thecocktaildb"
        id={ id }
        drinkOrMeals="drinks"
        imgAndTitle="Drink"
        food={ false }
      />
    </div>
  );
}
