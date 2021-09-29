import React from 'react';
import { Header } from '../components/index';
import RecipeCardDone from '../components/RecipeCardDone';

export default function DoneRecipes() {
  return (
    <>
      <Header title="Receitas Feitas" visibility={ false } />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      <div>
        <RecipeCardDone />
      </div>
    </>

  );
}
