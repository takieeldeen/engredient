import View from "./view.js";
import previewView from "./previewView.js";
import { mark } from "regenerator-runtime";

class LikesView extends View {
  _parentElement = document.querySelector(".bookmark__list");
  _errorMessage = "No bookmarks yet find a nice recipe and bookmark it";
  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const markup = this._data
      .map((rec) => previewView.render(rec, false))
      .join("");

    return markup;
  }
}

export default new LikesView();
