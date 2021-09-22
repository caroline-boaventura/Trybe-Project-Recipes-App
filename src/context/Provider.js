import React from 'react';
import PropTypes from 'prop-types';
import MyConText from './Context';

function Provider({ children }) {
  const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  async function MealFunction() {
    if (document.getElementById('ingredient-search-radio').checked) {
      const ingrediente = document.getElementById('search').value;
      console.log('checked');
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
      const responsejson = response.json();
      console.log(responsejson);
      if (responsejson.meals !== true) {
        global.alert(alert);
      }
    } else if (document.getElementById('name-search-radio').checked) {
      const name = document.getElementById('search').value;
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const responsejson = await response.json();
      if (responsejson.meals !== true) {
        global.alert(alert);
      } else if (responsejson.meals.length === 1) {
        window.location.href = `/comidas/${responsejson.meals[0].idMeal}`;
      }
    } else if (document.getElementById('first-letter-search-radio').checked) {
      if (document.getElementById('search').value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const fl = document.getElementById('search').value;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fl}`);
        const responsejson = response.json();
        console.log(responsejson);
        if (responsejson.meals !== true) {
          global.alert(
            alert,
          );
        }
      }
    }
  }

  async function DrinkFunction() {
    if (document.getElementById('ingredient-search-radio').checked) {
      const ingrediente = document.getElementById('search').value;
      console.log('checked');
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
      const responsejson = response.json();
      console.log(responsejson);
      if (responsejson.drinks !== true) {
        global.alert(alert);
      }
    } else if (document.getElementById('name-search-radio').checked) {
      const name = document.getElementById('search').value;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const responsejson = await response.json();
      console.log(responsejson.drinks);
      if (responsejson.drinks !== true) {
        global.alert(alert);
      } else if (responsejson.drinks.length === 1) {
        window.location.href = `/bebidas/${responsejson.drinks[0].idDrink}`;
      }
    } else if (document.getElementById('first-letter-search-radio').checked) {
      if (document.getElementById('search').value.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        const fl = document.getElementById('search').value;
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${fl}`);
        const responsejson = response.json();
        console.log(responsejson);
        if (responsejson.drinks !== true) {
          global.alert(
            alert,
          );
        }
      }
    }
  }

  async function FetchAPI() {
    if (document.getElementById('Comidas')) {
      MealFunction();
    } else if (document.getElementById('Bebidas')) {
      DrinkFunction();
    }
  }

  const Context = { FetchAPI };
  return (
    <MyConText.Provider value={ Context }>
      { children }
    </MyConText.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
