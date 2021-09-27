import React from 'react';
import { useLocation } from 'react-router-dom';
import { EspecificRecipe, RecommendedRecipes } from '../components/index';
import '../components/Footer.css';

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
      <RecommendedRecipes
        nameApi="thecocktaildb"
        drinkOrMeals="drinks"
        imgAndTitle="Drink"
        linkMealOrDrink="bebidas"
      />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="footer"
      >
        Iniciar Receita
      </button>
    </div>
  );
}
