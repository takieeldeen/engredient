import View from "./view";
import PreviewView from "./previewView";
class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `:( hmmm it seems like this recipe doesn't exist please try again`;
  _message;

  _generateMarkup() {
    const markup = this._data
      .map((rec) => PreviewView.render(rec, false))
      .join(" ");
    return markup;
  }
}

export default new ResultsView();
