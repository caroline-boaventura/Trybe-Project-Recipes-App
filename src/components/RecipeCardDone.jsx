import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function RecipeCardDone() {
    const [] = useState([]);

    const doneRecipes = JSON.parse(localStorage.getItem('RecipesDone'));
    console.log(doneRecipes);

    const { image, name, category, data, tags } = doneRecipes;

    console.log(tags);

    const recipesTag = tags.split(',');

    // function tags() {
    //     if (getLocalStorage[0].srtTags === null) {
    //         return [];
    //     } else {
    //         getLocalStorage[0].srtTags.split(',');
    //     }
    // }


    return(
        <div>
            {doneRecipes.map((doneRecipe, index) => (
            <div>
                <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
                <img src={shareIcon} data-testid={`${index}-horizontal-share-btn`} />
                <h4 data-testid={`${index}-horizontal-top-text`}>{category}</h4>
                <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
                <span data-testid={`${index}-horizontal-done-date`}>{data}</span>
                    {doneRecipe.map(tag => (
                        <span data-testid={`${index}-${index}-horizontal-tag`}>{tag}</span>
                    ))}
            </div>
            ))}
        </div>
    )
}