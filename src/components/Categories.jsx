import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FIVE = 5;

export default function Categories(props) {
  const [categoriesList, setCategoriesList] = useState([]);
  const { nameApi, drinkOrMeals } = props;

  const fetchCategories = async () => {
    const results = await fetch(`https://www.${nameApi}.com/api/json/v1/1/list.php?c=list`)
      .then((response) => response.json())
      .then((res) => res[drinkOrMeals]);

    setCategoriesList([...results]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const forEachFunc = (category, index) => {
    if (index < FIVE) {
      return (
        <button
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
        >
          { category.strCategory }
        </button>
      );
    }
  };

  return (
    <div>
      {categoriesList.map(forEachFunc)}
    </div>
  );
}

Categories.propTypes = ({
  nameApi: PropTypes.string.isRequired,
  drinkOrMeals: PropTypes.string.isRequired,
});
