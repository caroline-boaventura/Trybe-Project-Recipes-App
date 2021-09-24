import React, { useContext, useEffect } from 'react';
import { useHistory as UseHistory } from 'react-router-dom';
import MyConText from '../context/Context';

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
  return (
    <h1>oi</h1>
  );
}
