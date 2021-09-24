import React, { useState, useContext } from 'react';
import { Header, Search, Footer, Categories, RecipeCard } from '../components/index';
import RenderFoods from '../components/RenderFoods';
import MyConText from '../context/Context';

export default function Foods() {
  const [searchBar, setSearchBar] = useState(false);
  const { renderIndex } = useContext(MyConText);

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
      { (renderIndex === 1)
        ? <RecipeCard nameApi="themealdb" drinkOrMeals="meals" imgAndTitle="Meal" />
        : <RenderFoods /> }
      <Footer />
    </div>
  );
}
