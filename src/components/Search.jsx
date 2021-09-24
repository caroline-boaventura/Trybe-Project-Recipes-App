import React, { useContext } from 'react';
import MyConText from '../context/Context';

export default function Search() {
  const { FetchAPI } = useContext(MyConText);

  const HandleClick = () => {
    FetchAPI();
  };

  return (
    <div>
      <input id="search" data-testid="search-input" />

      <label htmlFor="ingredient-search-radio">
        ingredient
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          id="ingredient-search-radio"
          name="selected-search-radio"
          value="ingredient-search-radio"
        />
      </label>

      <label htmlFor="name-search-radio">
        name
        <input
          data-testid="name-search-radio"
          type="radio"
          id="name-search-radio"
          name="selected-search-radio"
          value="name-search-radio"
        />
      </label>

      <label htmlFor="first-letter-search-radio">
        first-letter
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          id="first-letter-search-radio"
          name="selected-search-radio"
          value="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => HandleClick() }
      >
        procurar?
      </button>
    </div>
  );
}
