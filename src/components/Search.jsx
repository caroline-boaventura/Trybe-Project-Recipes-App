import React from 'react';

export default function Search() {
  return (
    <div>
      <input data-testid="search-input" />

      <label htmlFor="ingredient-search-radio">
        ingredient
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          id="ingredient-search-radio"
          name="ingredient-search-radio"
          value="ingredient-search-radio"
        />
      </label>

      <label htmlFor="name-search-radio">
        ingredient
        <input
          data-testid="name-search-radio"
          type="radio"
          id="name-search-radio"
          name="name-search-radio"
          value="name-search-radio"
        />
      </label>

      <label htmlFor="first-letter-search-radio">
        ingredient
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          id="first-letter-search-radio"
          name="first-letter-search-radio"
          value="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        procurar?
      </button>
    </div>
  );
}
