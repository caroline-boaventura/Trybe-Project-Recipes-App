import React, { useState } from 'react';
import copytoclipboard from 'clipboard-copy';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

export default function RecipeCardDone({ localStorageValue }) {
  const [copied, setCopied] = useState(false);

  if (localStorageValue === []) {
    return (<div>Você não possui receitas finalizadas!</div>);
  }

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

  // const linkCopy = (id, type) => {
  //   const FOUR = 4000;
  //   if (type === 'bebida') {
  //     copytoclipboard(`http://localhost:3000/bebidas/${id}`);
  //     setCopied(true);
  //     return setTimeout(() => setCopied(false), FOUR);
  //   }

  //   copytoclipboard(`http://localhost:3000/comidas/${id}`);
  //   setCopied(true);
  //   return setTimeout(() => setCopied(false), FOUR);
  // };

  return (
    <div>
      {console.log(localStorageValue)}
      {localStorageValue && localStorageValue.map((index, teste) => (
        <div key={ index.name }>
          <Link
            to={ (index.type === 'comida')
              ? `/comidas/${index.id}` : `/bebidas/${index.id}` }
          >
            <img
              alt={ `foto de ${index.name}` }
              data-testid={ `${teste}-horizontal-image` }
              src={ index.image }
              style={ { width: '200px', height: '200px' } }
            />
          </Link>
          <button
            type="button"
            onClick={ () => copyLink(index.id, index.type) }
          >
            <img
              alt="compartilhar"
              src={ shareIcon }
              data-testid={ `${teste}-horizontal-share-btn` }
            />
          </button>
          {copied && <span>Link copiado!</span>}
          <p data-testid={ `${teste}-horizontal-top-text` }>
            {index.type === 'comida'
              ? `${index.area} - ${index.category}`
              : index.alcoholicOrNot}
          </p>
          <Link
            to={ (index.type === 'comida')
              ? `/comidas/${index.id}`
              : `/bebidas/${index.id}` }
          >
            <p data-testid={ `${teste}-horizontal-name` }>{index.name}</p>
          </Link>

          <p data-testid={ `${teste}-horizontal-done-date` }>{index.doneDate}</p>

          {index.tags && index.tags.map((tagName) => (
            <span
              data-testid={ `${teste}-${tagName}-horizontal-tag` }
              key={ `${tagName}-span` }
            >
              {tagName}
            </span>
          ))}

        </div>
      ))}
    </div>
  );
}

RecipeCardDone.propTypes = {
  localStorageValue: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};
