import React, { useState } from 'react';
import { Header, Search, Footer } from '../components/index';
import RenderDrinks from '../components/RenderDrinks';

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
      <RenderDrinks />
      { searchBar ? <Search /> : null }
      <Footer />
    </div>
  );
}
