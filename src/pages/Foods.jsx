import React, { useState } from 'react';
import { Header, Search, Footer, Categories, RecipeCard } from '../components/index';

export default function Foods() {
  const [searchBar, setSearchBar] = useState(false);

  const headleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  return (
    <div>
      <Header
        title="Comidas"
        visibility
        headleSearchBar={ headleSearchBar }
      />
      { searchBar ? <Search /> : <Categories nameApi="themealdb" drinkOrMeals="meals" /> }
      <RecipeCard nameApi="themealdb" drinkOrMeals="meals" imgAndTitle="Meal" />
      <Footer />
    </div>
  );
}
