import { asianRecipes, spanishRecipes, italianRecipes, frenchRecipes, englishRecipes } from './recipes.js';

function getResponsiveImageHTML(recipe, category) {
    const fileNameNoExt = recipe.imageName;
    const basePath = 'images-optim';

    switch (category) {
        case 'asian':
            return `
                <img 
                    src="${basePath}/asian/${fileNameNoExt}-800.webp"
                    srcset="${basePath}/asian/${fileNameNoExt}-400.webp 400w,
                            ${basePath}/asian/${fileNameNoExt}-800.webp 800w"
                    sizes="(max-width: 600px) 100vw, 50vw"
                    alt="${recipe.name}" />
            `;
        case 'spanish':
            return `
                <picture>
                    <source srcset="${basePath}/spanish/${fileNameNoExt}.webp" type="image/webp">
                    <img src="${basePath}/spanish/${fileNameNoExt}.jpg" alt="${recipe.name}" />
                </picture>
            `;
        case 'italian':
            return `
                <img src="${basePath}/italian/${fileNameNoExt}.jpg" alt="${recipe.name}"" />
            `;
        case 'french':
            return `
                <picture>
                    <source media="(min-width: 800px)" srcset="${basePath}/french/${fileNameNoExt}-large.jpg">
                    <img src="${basePath}/french/${fileNameNoExt}-small.jpg" alt="${recipe.name}" />
                </picture>
            `;
        case 'english':
            return `
                <picture>
                    <source srcset="${basePath}/english/${fileNameNoExt}.avif" type="image/avif">
                    <img src="${basePath}/english/${fileNameNoExt}.jpg" alt="${recipe.name}" />
                </picture>
            `;
        default:
            return `<img src="${basePath}/${fileNameNoExt}.jpg" alt="${recipe.name}" />`;
    }
}

function populateRecipeContainer(recipes, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const category = containerId.split('-')[0]; // 'asian' de 'asian-container'

    recipes.forEach(recipe => {
        const childContainer = document.createElement('div');
        childContainer.className = 'child-container';

        const responsiveImg = getResponsiveImageHTML(recipe, category);

        childContainer.innerHTML = `
            <a href="details.html?recipe=${encodeURIComponent(recipe.name)}">
                ${responsiveImg}
            </a>
            <a href="details.html?recipe=${encodeURIComponent(recipe.name)}">${recipe.name}</a>
            <h3>${recipe.country}</h3>
        `;

        container.appendChild(childContainer);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateRecipeContainer(asianRecipes, 'asian-container');
    populateRecipeContainer(spanishRecipes, 'spanish-container');
    populateRecipeContainer(italianRecipes, 'italian-container');
    populateRecipeContainer(frenchRecipes, 'french-container');
    populateRecipeContainer(englishRecipes, 'english-container');
});