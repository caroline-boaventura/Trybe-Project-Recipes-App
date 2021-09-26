import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyConText from '../context/Context';
import './RecipeCard.css';

const TWELVE = 12;

export default function DrinksCategoriesCards() {
  const [drinkCategoy, setDrinkCategory] = useState();
  const { categoryName } = useContext(MyConText);

  const fetchFoodCategories = async () => {
    const results = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => response.json())
      .then((res) => [...res.drinks]);

    setDrinkCategory(results);
  };

  useEffect(() => {
    fetchFoodCategories();
  }, [categoryName]);

  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const forEachFunc = ({ strDrink, strDrinkThumb, idDrink }, index) => {
    if (index < TWELVE) {
      return (
        <Link to={ `/bebidas/${idDrink}` }>
          <div
            className="recipeCard"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
            />
            <h4
              data-testid={ `${index}-card-name` }
            >
              { strDrink }
            </h4>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className="recipe-card-container">
      { (drinkCategoy)
      && drinkCategoy.map((element, index) => forEachFunc(element, index)) }
    </div>
  );
}
