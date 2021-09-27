import React from 'react';
import { useLocation } from 'react-router-dom';
import { EspecificRecipe } from '../components/index';

export default function EspecificFood() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];

  return (
    <div>
      <EspecificRecipe
        nameApi="themealdb"
        id={ id }
        drinkOrMeals="meals"
        imgAndTitle="Meal"
        food
      />
    </div>
  );
}
