import React from 'react';
import { useLocation } from 'react-router-dom';
import EspecificRecipeProgress from '../components/EspecificRecipeProgress';

export default function EspecificFoodProgress() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  return (
    <EspecificRecipeProgress
      id={ id }
      imgAndTitle="Meal"
      objType="comida"
      food
    />
  );
}
