import "core-js/stable";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import previewView from "./views/previewView.js";
import paginationView from "./views/paginationView.js";
import likesView from "./views/likesView.js";
import addRecipeView from "./views/addRecipeView.js";
import categoriesView from "./views/categoriesView.js";
if (module.hot) {
  module.hot.accept();
}
//Function that display spinner
const renderSpinner = function (parent) {};

//Function that display the recipe
const controlRecipes = async function () {
  try {
    //1.Store the current recipe id to a variable
    const id = window.location.hash.slice(1);
    //2.Check whether there is an id or not
    if (!id) {
      categoriesView.toggleCategory();
      return;
    }
    //3.Show spinner till the recipe loads
    categoriesView.hideCategory();
    recipeView.renderSpinner();
    //4.Load the recipe from API and assign it to a variable
    await model.loadRecipe(id);
    const { recipe } = model.state;
    //5.Add this markup to the DOM element
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

//Function that search for recipies
const controlSearch = async function () {
  try {
    //01.Get the query value from the UI
    const query = searchView.getQuery();
    //02.Load the spinner till the data get loaded
    resultsView.renderSpinner();
    //03.Load the data to the state object
    await model.loadSearchResults(query);
    //04.Display the results on the UI
    resultsView.render(model.getSearchResultsPage(1));
    //05.Render the pagination
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(err);
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1.Render results (Only RES_PER_PAGR recipes)
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 2.Show the pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //01.Update Servings in State
  model.updateServings(newServings);
  //02.Render updated recipe
  recipeView.render(model.state.recipe);
};

const controlAddLike = function () {
  //1.Update the liked recipes in state
  if (model.state.recipe.liked) {
    model.removeLike(model.state.recipe.id);
  } else if (!model.state.recipe.liked) model.addLike(model.state.recipe);
  //2.render theese likes to the UI
  likesView.render(model.state.liked);
};

const controlLikes = function () {
  likesView.render(model.state.liked);
};

const controlAddRecipe = async function (recipe) {
  try {
    //Render Spinner in the form
    addRecipeView.renderSpinner();
    //Upload the recipe to the model
    await model.uploadRecipe(recipe);
    //render the recipe
    recipeView.render(model.state.recipe);
    //Add the recipe to the bookmark
    likesView.render(model.state.recipe);
    //Change the id
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    addRecipeView._toggleWindow();
  } catch (err) {
    addRecipeView.renderError(err);
  }
};

const controlCategories = async function (event) {
  try {
    //Mark the current category as active
    categoriesView.markActive(event);
    //Get the Search querry from categories view
    const category = categoriesView.getSearchQuerry(event);
    //render the spinner in the search results
    resultsView.renderSpinner();
    //Load the search results
    await model.loadSearchResults(category);
    //04.Display the results on the UI
    resultsView.render(model.getSearchResultsPage(1));
    //05.Render the pagination
    paginationView.render(model.state.search);
  } catch (err) {}
};

//Adding event listeners for displaying recipes
const init = function () {
  addRecipeView._addHandlerUpload(controlAddRecipe);
  likesView.addHandlerRender(controlLikes);
  recipeView.addHandlerLikes(controlAddLike);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
  categoriesView.addHandlerCategory(controlCategories);
};

init();

// const col1 = document.querySelector(".upload__column");
// col1.addEventListener("input", function (e) {
//   const inputGroup = e.target.closest(".input__group");
//   const input = inputGroup.querySelector("input");
//   const inputCheckLabel = inputGroup.querySelector(".input__check");
//   const inputCheckIcon = inputGroup.querySelector(".icon__check");
//   const inputLabel = inputGroup.querySelector("label");
//   if (input.value === "") {
//     inputCheckLabel.style.opacity = "1";
//     inputCheckIcon.style.opacity = "1";
//     inputCheckIcon.name = "close-circle-outline";
//     inputCheckIcon.style.color = "#e74c3c";
//     input.style.border = "1px solid #e74c3c";
//     inputLabel.style.color = "#e74c3c";
//   } else {
//     inputCheckLabel.style.opacity = "0";
//     inputCheckIcon.style.opacity = "1";
//     inputCheckIcon.name = "checkmark-circle-outline";
//     inputCheckIcon.style.color = "#27ae60";
//     input.style.border = "1px solid #27ae60";
//     inputLabel.style.color = "#27ae60";
//   }
// });
