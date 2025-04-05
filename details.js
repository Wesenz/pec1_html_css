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
    imgElement.src = recipe.image;
    imgElement.alt = recipe.name;

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

document.addEventListener('DOMContentLoaded', populateDetailsPage);