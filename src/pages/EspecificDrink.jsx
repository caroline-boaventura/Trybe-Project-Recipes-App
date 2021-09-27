import React from 'react';
import { useLocation } from 'react-router-dom';
import { EspecificRecipe, RecommendedRecipes } from '../components/index';
import '../components/Footer.css';

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
      <RecommendedRecipes
        nameApi="themealdb"
        drinkOrMeals="meals"
        imgAndTitle="Meal"
        linkMealOrDrink="comidas"
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
