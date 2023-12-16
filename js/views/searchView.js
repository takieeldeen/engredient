import View from "./view";

class SearchView extends View {
  _parentElement = document.querySelector(".search");

  _clearView() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  getQuery() {
    //01.Get the query from the search field
    const query = this._parentElement.querySelector(".search__field").value;
    //02.Clear the search field
    this._clearView();
    //03.Return the query Value
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
