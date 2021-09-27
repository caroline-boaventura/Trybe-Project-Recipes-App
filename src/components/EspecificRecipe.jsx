import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';
import { Ingredients, IngredientsInProgress } from './index';
import MyConText from '../context/Context';

export default function EspecificRecipe(props) {
  const [especificRecipe, setEspecificRecipe] = useState({});
  const [favoriteButton, setFavoriteButton] = useState('/static/media/whiteHeartIcon.ea3b6ba8.svg');
  const { nameApi, drinkOrMeals, imgAndTitle, id, food } = props;
  const { ingredientIndex } = useContext(MyConText);

  const fetchRecipeId = async () => {
    const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((res) => res[drinkOrMeals]);

    setEspecificRecipe({ ...results[0] });
  };

  useEffect(() => {
    fetchRecipeId();
  }, [id]);

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

  const handleFavoriteButton = () => {
    if (favoriteButton === '/static/media/whiteHeartIcon.ea3b6ba8.svg') {
      setFavoriteButton('/static/media/blackHeartIcon.b8913346.svg');
    } else {
      setFavoriteButton('/static/media/whiteHeartIcon.ea3b6ba8.svg');
    }
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
          <button type="button" onClick={ handleFavoriteButton }>
            <img data-testid="favorite-btn" src={ favoriteButton } alt="favorite-icon" />
          </button>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        { ingredientIndex === 1
          ? <Ingredients ingredientsList={ especificRecipe } />
          : <IngredientsInProgress /> }
      </div>
      <div width="360">
        <h2>Instructions</h2>
        <p data-testid="instructions">{ especificRecipe.strInstructions }</p>
      </div>
      { (food && ingredientIndex === 1) && videoYoutube() }
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
