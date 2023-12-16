import View from "./view";

class CategoriesView extends View {
  _parentElement = document.querySelector(".categories");
  _categoryList = document.querySelector(".category__list");

  addHandlerCategory(handler) {
    this._categoryList.addEventListener("click", function (e) {
      handler(e);
    });
  }

  toggleCategory() {
    this._parentElement.classList.toggle("categories-hidden");
  }

  hideCategory() {
    this._parentElement.classList.add("categories-hidden");
  }

  getSearchQuerry(event) {
    return event.target
      .closest(".category__item")
      .querySelector(".category__title").textContent;
  }

  markActive(event) {
    const active = event.target.closest(".category__item");
    const unActive = Array.from(
      event.target
        .closest(".category__list")
        .querySelectorAll(".category__item")
    );
    unActive.forEach((item) => item.classList.remove("active"));
    active.classList.add("active");
  }
}

export default new CategoriesView();
