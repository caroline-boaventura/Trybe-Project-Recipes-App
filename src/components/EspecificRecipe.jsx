import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';

export default function EspecificRecipe(props) {
  const [especificRecipe, setEspecificRecipe] = useState({});
  const { nameApi, drinkOrMeals, imgAndTitle, id, food } = props;

  const fetchRecipeId = async () => {
    const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((res) => res[drinkOrMeals]);

    setEspecificRecipe({ ...results[0] });
  };

  useEffect(() => {
    fetchRecipeId();
  }, [id]);

  const mapIngredients = () => {
    const objectIngredients = Object.entries(especificRecipe);

    const ingredientsName = objectIngredients
      .filter((element) => element[0].includes('strIngredient'));

    const ingredientsQuantities = objectIngredients
      .filter((element) => element[0].includes('strMeasure'));

    const arrayIngredients = ingredientsName
      .map((ingredient, index) => [ingredient[1], ingredientsQuantities[index][1]]);

    return arrayIngredients;
  };

  const videoYoutube = () => (
    <iframe
      data-testid="video"
      title="Recipe"
      width="340"
      height="315"
      src={ especificRecipe.strYoutube }
      allowfull
    />
  );

  const category = () => {
    if (food) {
      return (
        <h3 data-testid="recipe-category">{ especificRecipe.strCategory }</h3>
      );
    }
    return (
      <h3 data-testid="recipe-category">{ especificRecipe.strAlcoholic }</h3>
    );
  };

  return (
    <div>
      { console.log(especificRecipe) }
      <img
        data-testid="recipe-photo"
        src={ especificRecipe[`str${imgAndTitle}Thumb`] }
        alt={ especificRecipe[`str${imgAndTitle}`] }
        width="360"
      />
      <div>
        <div>
          <h1 data-testid="recipe-title">{ especificRecipe[`str${imgAndTitle}`] }</h1>
          { category() }
        </div>
        <div>
          <button type="button">
            <img data-testid="share-btn" src={ shareIcon } alt="share-icon" />
          </button>
          <button type="button">
            <img data-testid="favorite-btn" src={ favoriteIcon } alt="favorite-icon" />
          </button>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        { mapIngredients().map((ingredient, index) => {
          if (ingredient[0] !== '') {
            return (
              <p
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                { `${ingredient[0]} - ${ingredient[1]}` }
              </p>
            );
          } return console.log('oi');
        }) }
      </div>
      <div width="360">
        <h2>Instructions</h2>
        <p data-testid="instructions">{ especificRecipe.strInstructions }</p>
      </div>
      { (food) && videoYoutube() }
    </div>
  );
}

EspecificRecipe.propTypes = ({
  nameApi: PropTypes.string.isRequired,
  drinkOrMeals: PropTypes.string.isRequired,
  imgAndTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  food: PropTypes.bool.isRequired,
});
