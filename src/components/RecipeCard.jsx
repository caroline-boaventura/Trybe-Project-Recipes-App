import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

const TWELVE = 12;

export default function RecipeCard(props) {
  const [recipeCardList, setRecipeCardList] = useState([]);
  const { nameApi, drinkOrMeals, imgAndTitle } = props;

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
    if (index < TWELVE) {
      return (
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
      );
    }
  };

  return (
    <div className="recipe-card-container">
      { recipeCardList.map(forEachFunc) }
      {/* { recipeCardList.map((recipeCard, index) => {
        if (index < TWELVE) {
          return (
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
          );
        }
      })} */}
    </div>
  );
}

RecipeCard.propTypes = ({
  nameApi: PropTypes.string.isRequired,
  drinkOrMeals: PropTypes.string.isRequired,
  imgAndTitle: PropTypes.string.isRequired,
});
