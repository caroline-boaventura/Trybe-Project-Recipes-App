import React from 'react';
import { useHistory as UseHistory, useLocation } from 'react-router-dom';
import { RecommendedRecipes } from '../components/index';
import '../components/Footer.css';
import EspecificRecipe from '../components/EspecificRecipe';

export default function EspecificDrink() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const history = UseHistory();

  const redirectInProgress = () => {
    history.push(`/bebidas/${id}/in-progress`);
  };

  return (
    <div>
      <EspecificRecipe
        nameApi="thecocktaildb"
        id={ id }
        drinkOrMeals="drinks"
        imgAndTitle="Drink"
        food={ false }
        objType="bebida"
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
        onClick={ redirectInProgress }
      >
        Iniciar Receita
      </button>
    </div>
  );
}
