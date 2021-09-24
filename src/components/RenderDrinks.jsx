import React, { useContext, useEffect } from 'react';
import { useHistory as UseHistory } from 'react-router-dom';
import MyConText from '../context/Context';
import './RecipeCard.css';

const TWELVE = 12;

export default function RenderDrinks() {
  const { drinkState } = useContext(MyConText);
  const history = UseHistory();

  useEffect(() => {
    const pushe = (bebidas = drinkState) => {
      if (drinkState.drinks.length === 1) {
        history.push(`/bebidas/${bebidas.drinks[0].idDrink}`);
      } else {
        console.log('oi');
      }
    };

    pushe();
  }, [drinkState, history]);

  const forEachFunc = ({ strDrink, strDrinkThumb }, index) => {
    if (index < TWELVE) {
      return (
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
      );
    }
  };

  return (
    <div className="recipe-card-container">
      {
        drinkState.drinks.map((drink, index) => forEachFunc(drink, index))
      }
    </div>
  );
}
