import React, { useState, useContext } from 'react';
import { Header, Search, Footer, Categories, RecipeCard } from '../components/index';
import RenderDrinks from '../components/RenderDrinks';
import MyConText from '../context/Context';

export default function Drinks() {
  const [searchBar, setSearchBar] = useState(false);
  const { renderIndex } = useContext(MyConText);

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
      { (renderIndex === 1)
        ? <RecipeCard nameApi="thecocktaildb" drinkOrMeals="drinks" imgAndTitle="Drink" />
        : <RenderDrinks /> }
      <Footer />
    </div>
  );
}
