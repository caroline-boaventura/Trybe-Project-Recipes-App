import React, { useState } from 'react';
import { Header, Search, Footer, Categories, RecipeCard } from '../components/index';

export default function Drinks() {
  const [searchBar, setSearchBar] = useState(false);

  const headleSearchBar = () => {
    setSearchBar(!searchBar);
  };
  return (
    <div>
      <Header
        id="bebidas"
        title="Bebidas"
        visibility
        headleSearchBar={ headleSearchBar }
      />
      { searchBar
        ? <Search /> : <Categories nameApi="thecocktaildb" drinkOrMeals="drinks" /> }
      <RecipeCard nameApi="thecocktaildb" drinkOrMeals="drinks" imgAndTitle="Drink" />
      <Footer />
    </div>
  );
}
