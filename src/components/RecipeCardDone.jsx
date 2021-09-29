import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function RecipeCardDone() {
    const [] = useState([]);

    const getLocalStorage = JSON.parse(localStorage.getItem('RecipesDone'));
    console.log(getLocalStorage);

    function tags() {
        if (getLocalStorage[0].srtTags === null) {
            return [];
        } else {
            getLocalStorage[0].srtTags.split(',');
        }
    }

    return(
        <div>
            {getLocalStorage.map(index => (
            <div>
                <img data-testid={`-horizontal-image`} src={index.image} />
                <img src={shareIcon} data-testid="${index}-horizontal-share-btn" />
                <h4 data-testid="${index}-horizontal-top-text">{index.category}</h4>
                <h3 data-testid="${index}-horizontal-name">{index.name}</h3>
                <span data-testid="${index}-horizontal-done-date">{index.data}</span>
                <span>
                    {tags.map(tag => (
                        <p>{tag}</p>
                    ))}
                </span>
            </div>
            ))}
        </div>
    )
}