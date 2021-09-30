import React from 'react';
import { useLocation } from 'react-router-dom';
import { RecommendedRecipes, ButtonStartRecipe } from '../components/index';
import '../components/Footer.css';
import EspecificRecipe from '../components/EspecificRecipe';

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
        objType="bebida"
        food={ false }
      />
      <RecommendedRecipes
        nameApi="themealdb"
        drinkOrMeals="meals"
        imgAndTitle="Meal"
        linkMealOrDrink="comidas"
      />
      <ButtonStartRecipe
        id={ id }
        localstorage="cocktails"
        linkMealOrDrink="bebidas"
      />
    </div>
  );
}
