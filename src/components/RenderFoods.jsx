import React, { useContext, useEffect } from 'react';
import { useHistory as UseHistory } from 'react-router-dom';
import MyConText from '../context/Context';

export default function RenderFoods() {
  const { mealState } = useContext(MyConText);
  const history = UseHistory();

  useEffect(() => {
    const pushe = (comidas = mealState) => {
      if (mealState.meals.length === 1) {
        history.push(`/comidas/${comidas.meals[0].idMeal}`);
      } else {
        console.log('oi');
      }
    };

    pushe();
  }, [mealState, history]);
  return (
    <h1>oi</h1>
  );
}
