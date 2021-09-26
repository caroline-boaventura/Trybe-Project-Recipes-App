import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyConText from '../context/Context';
import './RecipeCard.css';

const TWELVE = 12;

export default function FoodsCategoriesCards() {
  const [foodCategoy, setFoodCategory] = useState();
  const { categoryName } = useContext(MyConText);

  const fetchFoodCategories = async () => {
    const results = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => response.json())
      .then((res) => [...res.meals]);

    setFoodCategory(results);
  };

  useEffect(() => {
    fetchFoodCategories();
  }, [categoryName]);

  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const forEachFunc = ({ strMeal, strMealThumb, idMeal }, index) => {
    if (index < TWELVE) {
      return (
        <Link to={ `/comidas/${idMeal}` }>
          <div
            className="recipeCard"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <h4
              data-testid={ `${index}-card-name` }
            >
              { strMeal }
            </h4>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className="recipe-card-container">
      { (foodCategoy)
      && foodCategoy.map((element, index) => forEachFunc(element, index)) }
    </div>
  );
}
