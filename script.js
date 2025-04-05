import { asianRecipes, spanishRecipes, italianRecipes, frenchRecipes, englishRecipes } from './recipes.js';

function populateRecipeContainer(recipes, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    recipes.forEach(recipe => {
        const childContainer = document.createElement('div');
        childContainer.className = 'child-container';
        
        childContainer.innerHTML = `
            <a href="details.html?recipe=${encodeURIComponent(recipe.name)}">
                <img src="${recipe.image}" alt="${recipe.name}"/>
            </a>
            <a href="details.html?recipe=${encodeURIComponent(recipe.name)}">${recipe.name}</a>
            <h3>${recipe.country}</h3>
        `;
        
        container.appendChild(childContainer);
    });
}

// LISTENERS 
document.addEventListener('DOMContentLoaded', () => {
    populateRecipeContainer(asianRecipes, 'asian-container');
    populateRecipeContainer(spanishRecipes, 'spanish-container');
    populateRecipeContainer(italianRecipes, 'italian-container');
    populateRecipeContainer(frenchRecipes, 'french-container');
    populateRecipeContainer(englishRecipes, 'english-container');
});