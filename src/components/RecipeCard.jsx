import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
import MyConText from '../context/Context';

const TWELVE = 12;
const URL_AREA = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

export default function RecipeCard(props) {
  const [recipeCardList, setRecipeCardList] = useState([]);
  const { nameApi, imgAndTitle, linkMealOrDrink, drinkOrMeals } = props;
  const { ingredient, optionArea } = useContext(MyConText);

  const fetchCategories = async () => {
    if (ingredient) {
      const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => (response.json()))
        .then((res) => res[drinkOrMeals]);
      setRecipeCardList([...results]);
    } else if (optionArea === 'All') {
      const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/search.php?s=`)
        .then((response) => response.json())
        .then((res) => res[drinkOrMeals]);

      setRecipeCardList([...results]);
    } else if (optionArea !== 'All') {
      console.log('entrei aqui');
      const results = await fetch(`${URL_AREA}${optionArea}`)
        .then((response) => response.json())
        .then((res) => res[drinkOrMeals]);

      setRecipeCardList([...results]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [optionArea, ingredient]);

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
