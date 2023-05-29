const recipesContainer = document.getElementById("recipes-container");
const newRecipeFormContainer = document.getElementById("new-recipe-form");

// API URL
const BASE_API_URL = "https://fsa-async-await.herokuapp.com/api";

const fetchAllRecipes = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/demo/recipes`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const renderAllRecipes = (recipeList) => {
  if (!recipeList || recipeList.length === 0) {
    recipesContainer.innerHTML = "<h3>no recipes are found</h3>";
    return;
  }
  console.log("in render", recipeList);
  recipesContainer.innerHTML = "";

  recipeList.forEach((singleRecipe) => {
    console.log(singleRecipe);
    const recipeElem = document.createElement("div");
    recipeElem.classList.add("recipe-card");

    recipeElem.innerHTML = `<h4>${singleRecipe.title}</h4>
    <img src="${singleRecipe.image_url}" alt="${singleRecipe.title}"/>
    <p>${singleRecipe.instructions}</p>
    <button class="delete-button" data-id="${singleRecipe.id}">Remove</button>
    <button class="detail-button" data-id="${singleRecipe.id}">See Details</button>
    `;

    recipesContainer.appendChild(recipeElem);
  });
};

const init = async () => {
  const recipes = await fetchAllRecipes();
  renderAllRecipes(recipes);
  console.log(recipes);
};

init();