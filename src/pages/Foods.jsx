import React, { useState } from 'react';
import { Header, Search } from '../components/index';

export default function Foods() {
  const [searchBar, setSearchBar] = useState(false);

  const headleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  return (
    <div>
      <Header title="Comidas" visibility headleSearchBar={ headleSearchBar } />
      { searchBar ? <Search /> : null }
    </div>
  );
}