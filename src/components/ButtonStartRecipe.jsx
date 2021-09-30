import React from 'react';
import { useHistory as UseHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ButtonStartRecipe(props) {
  const history = UseHistory();
  const { id, localstorage, linkMealOrDrink } = props;

  const redirectInProgress = () => {
    history.push(`/${linkMealOrDrink}/${id}/in-progress`);
    const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (getLocalStorage === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        [localstorage]: {
          [id]: [],
        },
      }));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify(
        { ...getLocalStorage,
          [localstorage]: {
            ...getLocalStorage[localstorage],
            [id]: [],
          },
        },
      ));
    }
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="footer"
      onClick={ redirectInProgress }
    >
      Iniciar Receita
    </button>
  );
}

ButtonStartRecipe.propTypes = ({
  id: PropTypes.string.isRequired,
  localstorage: PropTypes.string.isRequired,
  linkMealOrDrink: PropTypes.string.isRequired,
});
