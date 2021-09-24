import React, { useState } from 'react';
import { Header, Search, Footer } from '../components/index';
import RenderFoods from '../components/RenderFoods';

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
      <RenderFoods />
      { searchBar ? <Search /> : null }
      <Footer />
    </div>
  );
}
