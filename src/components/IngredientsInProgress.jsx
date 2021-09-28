import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

export default function IngredientsInProgress(props) {
  const { ingredientsList } = props;

  const mapIngredientsInProgress = () => {
    const objectIngredients = Object.entries(ingredientsList);

    const ingredientsName = objectIngredients
      .filter((element) => element[0].includes('strIngredient'));

    const ingredientsQuantities = objectIngredients
      .filter((element) => element[0].includes('strMeasure'));

    const arrayIngredients = ingredientsName
      .map((ingredient, index) => [ingredient[1], ingredientsQuantities[index][1]]);

    return arrayIngredients;
  };

  const handleClassName = ({ target }) => {
    if (target.checked) {
      target.parentElement.className = 'scratched';
    } else {
      target.parentElement.classList.remove('scratched');
    }
  };

  return (
    <div>
      { mapIngredientsInProgress().map((ingredient, index) => {
        if (ingredient[0]) {
          return (
            <div>
              <label
                htmlFor={ ingredient[0] }
                key={ index }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ ingredient[0] }
                  value={ ingredient[0] }
                  onClick={ (event) => handleClassName(event) }
                />
                { `${ingredient[0]} - ${ingredient[1]}` }
              </label>
            </div>
          );
        } return console.log('oi');
      }) }
    </div>
  );
}

IngredientsInProgress.propTypes = ({
  ingredientsList: PropTypes.objectOf().isRequired,
});
