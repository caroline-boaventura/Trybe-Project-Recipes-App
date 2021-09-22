import React from 'react';
import { useHistory as UseHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

export default function Footer() {
  const history = UseHistory();

  const redirectDrinks = () => {
    history.push('/bebidas');
  };

  const redirectExplore = () => {
    history.push('/explorar');
  };

  const redirectMeals = () => {
    history.push('/comidas');
  };

  return (
    <div data-testid="footer" className="footer">
      <button
        type="button"
        onClick={ redirectDrinks }
      >
        <img src={ drinkIcon } alt="Drink Icon" data-testid="drinks-bottom-btn" />
      </button>
      <button
        type="button"
        onClick={ redirectExplore }
      >
        <img src={ exploreIcon } alt="Explore Icon" data-testid="explore-bottom-btn" />
      </button>
      <button
        type="button"
        onClick={ redirectMeals }
      >
        <img src={ mealIcon } alt="Meal Icon" data-testid="food-bottom-btn" />
      </button>
    </div>
  );
}
