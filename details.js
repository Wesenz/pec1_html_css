import { asianRecipes, spanishRecipes, italianRecipes, frenchRecipes, englishRecipes } from './recipes.js';

// Combina todas las recetas en un solo array
const allRecipes = [
    ...asianRecipes,
    ...spanishRecipes,
    ...italianRecipes,
    ...frenchRecipes,
    ...englishRecipes
];

function populateDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeName = urlParams.get('recipe');
    
    if (!recipeName) {
        console.error('No recipe specified');
        return;
    }

    const recipe = allRecipes.find(r => r.name === decodeURIComponent(recipeName));
    
    if (!recipe) {
        console.error('Recipe not found');
        return;
    }

    // Update image
    const imgElement = document.querySelector('.details-img-container img');
    // Usar la misma estructura que en script.js
    const basePath = 'images-optim';
    const category = recipe.category.toLowerCase();
    
    // Usar getResponsiveImageHTML para mantener consistencia
    const imageHTML = getResponsiveImageHTML(recipe, category);
    const imgContainer = document.querySelector('.details-img-container');
    imgContainer.innerHTML = imageHTML;

    // Update title
    const titleElement = document.querySelector('.details-title-container h2');
    titleElement.textContent = recipe.name;

    // Update info
    const infoElement = document.querySelector('.info-container ul');
    infoElement.innerHTML = `
            <li><b>Tiempo de preparación:</b> ${recipe.info.prepTime}</li>
            <li><b>Tiempo de cocinado:</b> ${recipe.info.cookTime}</li>
            <li><b>Tiempo total:</b> ${recipe.info.totalTime}</li>
            <li><b>Raciones:</b> ${recipe.info.servings}</li>
            <li><b>Categoría:</b> ${recipe.info.category}</li>
            <li><b>Tipo de cocina:</b> ${recipe.info.cuisine}</li>
            <li><b>Calorías:</b> ${recipe.info.calories}</li>
    `;

    // Update ingredients
    const ingredientsList = document.querySelector('.ingredients-list ul');
    ingredientsList.innerHTML = recipe.ingredients 
        .map(ingredient => `
            <li>${ingredient}</li>`)
        .join('');

    // Update instructions
    const textElement = document.querySelector('.text-container ol');
    textElement.innerHTML = recipe.instructions
        .map(step => `${step}<br>`)
        .join('');

    // Update video
    if (recipe.video) {
        const videoContainer = document.querySelector('.tutorial');
        if (videoContainer) {
            console.log("Recipe video URL: ", recipe.video);
            videoContainer.innerHTML = `
                <iframe 
                    width="560" 
                    height="315" 
                    src="${recipe.video}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }
    }
}

// Reutilizar la función de script.js
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

document.addEventListener('DOMContentLoaded', populateDetailsPage);