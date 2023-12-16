import { mark } from "regenerator-runtime";

export default class View {
  _data;
  render(data, render = true) {
    //0.Check if there is any data

    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    //1.Store the data in this object
    this._data = data;
    //2.Generate the markup of recipe
    const markup = this._generateMarkup();
    if (!render) return markup;
    //3.clear the markup that exists in the element
    this._clear();
    //4.inject the markup into the html file
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    //1.Clear the content of parent element
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    //1.Assign the markup to a variable
    const markup = `<div class="spinner"></div>`;
    //2.Clear the content of the parent elemnt
    this._clear();
    //3.Inject the markup into the HTML file
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>${message}</p>
          </div>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `
    <div class="error">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>${message}</p>
          </div>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
