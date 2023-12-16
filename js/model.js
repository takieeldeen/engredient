import { async } from "regenerator-runtime";
import { API_KEY, API_URL, RES_PER_PAGE } from "./config";
import { getJSON, AJAX } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  liked: [],
};

const createRecipeObject = function (data) {
  let { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    liked: Boolean(state.liked.findIndex((el) => el.id === id) + 1),
  };
};

export const loadRecipe = async function (id) {
  try {
    //1.Load the recipe from the API
    const data = await getJSON(`${API_URL}/${id}?key=${API_KEY}`);

    //2.Restructure the data object
    state.recipe = createRecipeObject(data);
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  //Assign the state page to the page
  state.search.page = page;
  //Determine the recipe to start with
  const start = (page - 1) * state.search.resultsPerPage;
  // console.log(start);
  //Determine the recipe to end with
  const end = start + state.search.resultsPerPage;
  // console.log(end);
  //return a copy of the array with the number of recipes

  return state.search.results.slice(start, end);
};

export const loadSearchResults = async function (query) {
  try {
    //01.Store the query in the state Obj
    state.search.query = query;
    // const data = getJSON(`${API_URL}?search=${query}&key=${API_KEY}`);
    //02.Assign the data recived from the API
    const data = await getJSON(`${API_URL}?search=${query}&key=${API_KEY}`);
    //03.Store the data in the state object
    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const updateServings = function (newServings) {
  //Update the ingredients according to the new Servings
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = ing.quantity * (newServings / state.recipe.servings);
  });
  //Update the servings to the new servings
  state.recipe.servings = newServings;
};

export const addLike = function (recipe) {
  //Add the recipe to the bookmarks array
  state.liked.push(recipe);
  //mark the current recipe as liked
  if (recipe.id === state.recipe.id) state.recipe.liked = true;
};

export const removeLike = function (id) {
  //Find the index of the deleted item
  const index = state.liked.findIndex((cur) => cur.id === id);
  // console.log(state.liked);
  //Delete this item from the liked array
  state.liked.splice(index, 1);
  //Mark the current recipe as not liked
  if (id === state.recipe.id) state.recipe.liked = false;
  // console.log(state.liked);
};

export const uploadRecipe = async function (newRecipe) {
  try {
    //Refactor the recipe parameter into the recipe object
    const ingredients = Object.entries(newRecipe)
      .filter((ing) => {
        ing[0].startsWith("ingredient") && ing[1] !== "";
      })
      .map((ingredient) => {
        const ingArr = ingredient[1].replaceAll(" ", "").split("-");
        if (ingArr.length !== 3) throw new Error("Wrong ingredients Input");
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? quantity : null,
          unit,
          description,
        };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addLike(state.recipe);
  } catch (err) {
    throw err;
  }
};

loadSearchResults();
