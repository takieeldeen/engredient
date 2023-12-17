import { mark } from "regenerator-runtime";
// import { Fraction } from "../../node_modules/fractional/index.js";
import fracty from "fracty";
// const Fraction = require("fractional").Fraction;
import View from "./view.js";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage = `:( hmmm it seems like this recipe doesn't exist`;
  _message;

  addHandlerLikes(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--like");
      if (!btn) return;

      btn.classList.toggle("liked");
      handler();
    });
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--update-servings");
      if (!btn) return;
      const { updateto } = btn.dataset;
      console.log(btn.dataset);
      if (+updateto > 0) handler(+updateto);
    });
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    console.log(this._data);
    return `<figure class="recipe__fig">
    <img
      src="${this._data.image}"
      alt="${this._data.title}"
      class="recipe__img"
    />
  </figure>
  <h1 class="recipe__title">
    <span>${this._data.title}</span>
  </h1>
  <div class="recipe__details">
    <div class="recipe__info">
      <ion-icon
        name="time-outline"
        class="recipe__info-icon"
      ></ion-icon>
      <span class="recipe__info-data recipe__info-data--minutes"
        >${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <ion-icon name="people-outline"></ion-icon>
      <span class="recipe__info-data recipe__info-data--minutes"
        >${this._data.servings}</span
      >
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings btn--update-servings"data-updateTo="${
          this._data.servings - 1
        }">
          <ion-icon name="remove-circle"></ion-icon>
        </button>
        <button class="btn--tiny btn--increase-servings btn--update-servings"data-updateTo="${
          this._data.servings + 1
        }">
          <ion-icon name="add-circle"></ion-icon>
        </button>
      </div>
    </div>
    <button class="btn--round btn--like ${this._data.liked ? "liked" : ""}">
      <ion-icon name="heart"></ion-icon>
    </button>
  </div>
  <div class="recipe__ingredients">
    <h2 class="heading-2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join(" ")}
      
      
      
    </ul>
  </div>
  <div class="recipe__directions">
    <h2 class="heading-2">Hot to cook it</h2>
    <div class="recipe__direction-box">
      <h3 class="heading-3">
        Are you looking for this recipe directions?
      </h3>
      <p class="recipe__directions-text">
        Engredients brought this recipe from it's original owner
        <span class="recipe__publisher">${this._data.publisher}</span>. You
        can check out the original recipe directions at their website.
      </p>
      <button class="btn-full">Directions</button>
    </div>
  </div>`;
  }

  _generateMarkupIngredient(ing) {
    return `<li class="recipe__ingredient">
      <ion-icon
        name="checkmark-circle"
        class="recipe__icon"
      ></ion-icon>
      <div class="recipe__quantity">${
        ing.quantity === null || ing.quantity === 0 ? " " : fracty(ing.quantity)
      }  </div>
      <div class="recipe__description">
        <span class="recipe__unit"> ${
          ing.unit === null ? " " : ing.unit
        } </span> ${ing.description}
      </div>
    </li>`;
  }
}

export default new RecipeView();
