import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RecommendedRecipes, ButtonStartRecipe } from '../components/index';
import '../components/Footer.css';
import MyConText from '../context/Context';
import EspecificRecipe from '../components/EspecificRecipe';

export default function EspecificFood() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const { ingredientIndex } = useContext(MyConText);

  return (
    <div>
      <EspecificRecipe
        nameApi="themealdb"
        id={ id }
        drinkOrMeals="meals"
        imgAndTitle="Meal"
        objType="comida"
        food
      />
      {(ingredientIndex === 1) && <RecommendedRecipes
        nameApi="thecocktaildb"
        drinkOrMeals="drinks"
        imgAndTitle="Drink"
        linkMealOrDrink="bebidas"
      />}
      <ButtonStartRecipe
        id={ id }
        localstorage="meals"
        linkMealOrDrink="comidas"
      />
    </div>
  );
}
