import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

const TWELVE = 12;

export default function RecipeCard(props) {
  const [recipeCardList, setRecipeCardList] = useState([]);
  const { nameApi, drinkOrMeals, imgAndTitle, linkMealOrDrink } = props;

  const fetchCategories = async () => {
    const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/search.php?s=`)
      .then((response) => response.json())
      .then((res) => res[drinkOrMeals]);

    setRecipeCardList([...results]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const forEachFunc = (recipeCard, index) => {
    const id = recipeCard[`id${imgAndTitle}`];
    if (index < TWELVE) {
      return (
        <Link to={ `/${linkMealOrDrink}/${id}` }>
          <div
            className="recipeCard"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ recipeCard[`str${imgAndTitle}Thumb`] }
              alt={ recipeCard[`str${imgAndTitle}`] }
            />
            <h4
              data-testid={ `${index}-card-name` }
            >
              {recipeCard[`str${imgAndTitle}`]}
            </h4>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className="recipe-card-container">
      { recipeCardList.map(forEachFunc) }
    </div>
  );
}

RecipeCard.propTypes = ({
  nameApi: PropTypes.string.isRequired,
  drinkOrMeals: PropTypes.string.isRequired,
  imgAndTitle: PropTypes.string.isRequired,
  linkMealOrDrink: PropTypes.string.isRequired,
});
