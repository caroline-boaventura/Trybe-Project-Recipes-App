import React, { useEffect, useState } from 'react';
import copytoclipboard from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipeCard({ localStorageValue, removeRecipes }) {

    const [copied, setCopied] = useState(false);

    const copyLink = (id, type) => {
        const FOUR = 4000;
        if (type === 'bebida') {
          copytoclipboard(`http://localhost:3000/bebidas/${id}`);
          console.log('bebida copiada');
          setCopied(true);
          return setTimeout(() => setCopied(false), FOUR);
        }
    
        copytoclipboard(`http://localhost:3000/comidas/${id}`);
        setCopied(true);
        return setTimeout(() => setCopied(false), FOUR);
      };

    return (
        
        <div>
            {localStorageValue && localStorageValue.map((recipes, index) => (
              <div key={ recipes.name }>
              <Link
                to={ (recipes.type === 'comida')
                  ? `/comidas/${recipes.id}` : `/bebidas/${recipes.id}` }
              >
                <img
                  alt={ `foto de ${recipes.name}` }
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipes.image }
                  style={ { width: '200px', height: '200px' } }
                />
              </Link>
              <button
                type="button"
                onClick={ () => removeRecipes(recipes.name) }
            >
            <img
              src={ blackHeartIcon }
              alt="botão de desfavoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
              <button
                type="button"
                onClick={ () => copyLink(recipes.id, recipes.type) }
              >
                <img
                  alt="compartilhar"
                  src={ shareIcon }
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
              {copied && <span>Link copiado!</span>}
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipes.type === 'comida'
                  ? `${recipes.area} - ${recipes.category}`
                  : recipes.alcoholicOrNot}
              </p>
              <Link
                to={ (recipes.type === 'comida')
                  ? `/comidas/${recipes.id}`
                  : `/bebidas/${recipes.id}` }
              >
                <p data-testid={ `${index}-horizontal-name` }>{recipes.name}</p>
              </Link>
    
              <p data-testid={ `${index}-horizontal-done-date` }>{recipes.doneDate}</p>
    
              {recipes.tags && recipes.tags.map((tagName) => (
                <span
                  data-testid={ `${index}-${tagName}-horizontal-tag` }
                  key={ `${tagName}-span` }
                >
                  {tagName}
                </span>
              ))}
    
            </div>  
            ))}
        </div>
    )
}