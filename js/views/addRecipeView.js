import View from "./view";
class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _window = document.querySelector(".add-recipe-window");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _overlay = document.querySelector(".overlay");
  _ingredient = document.querySelector(".ing__format");

  _ingredientInputs = Array.from(
    document.querySelectorAll(".ingredient__input")
  );

  constructor() {
    super();
    this._addHandlerClose();
    this._addHandlerOpen();
    this._checkEmpty();
  }

  _checkEmpty() {
    Array.from(document.querySelectorAll(".upload__column")).forEach((col) =>
      col.addEventListener("input", function (e) {
        const inputGroup = e.target.closest(".input__group");
        const input = inputGroup.querySelector("input");
        const inputCheckLabel = inputGroup.querySelector(".input__check");
        const inputCheckIcon = inputGroup.querySelector(".icon__check");
        const inputLabel = inputGroup.querySelector("label");
        if (input.value === "") {
          inputCheckLabel.style.opacity = "1";
          inputCheckIcon.style.opacity = "1";
          inputCheckIcon.name = "close-circle-outline";
          inputCheckIcon.style.color = "#e74c3c";
          input.style.border = "1px solid #e74c3c";
          inputLabel.style.color = "#e74c3c";
        } else {
          inputCheckLabel.style.opacity = "0";
          inputCheckIcon.style.opacity = "1";
          inputCheckIcon.name = "checkmark-circle-outline";
          inputCheckIcon.style.color = "#27ae60";
          input.style.border = "1px solid #27ae60";
          inputLabel.style.color = "#27ae60";
        }
      })
    );
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log(this);
      const data = Object.fromEntries([...new FormData(this)]);
      handler(data);
      console.log(data);
    });
  }

  _toggleWindow() {
    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  _addHandlerClose() {
    this._btnClose.addEventListener("click", this._toggleWindow.bind(this));
  }

  _addHandlerOpen() {
    this._btnOpen.addEventListener("click", this._toggleWindow.bind(this));
  }
}

export default new AddRecipeView();
