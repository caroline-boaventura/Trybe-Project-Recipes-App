import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function RecipeCardDone() {
  const [localStorageValue, setStorageValue] = useState([]);
  const getLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  useEffect(() => {
    setStorageValue(getLocalStorage);
    console.log(localStorageValue);
  }, []);

  return (
    <div>
      {localStorageValue.map((index, teste) => (
        <div key={ index.name }>
          <img
            alt={ `foto de ${index.name}` }
            data-testid={ `${teste}-horizontal-image` }
            src={ index.image }
          />

          <img
            alt="compartilhar"
            src={ shareIcon }
            data-testid={ `${teste}-horizontal-share-btn` }
          />

          <h4 data-testid={ `${teste}-horizontal-top-text` }>{index.category}</h4>

          <h3 data-testid={ `${teste}-horizontal-name` }>{index.name}</h3>

          <span data-testid={ `${teste}-horizontal-done-date}` }>{index.data}</span>

          <span>
            {index.srtTags.map((tagName) => (
              <p
                data-testid={ `${teste}-${tagName}-horizontal-tag` }
                key={ tagName }
              >
                {tagName}
              </p>
            ))}
          </span>

        </div>
      ))}
    </div>
  );
}
