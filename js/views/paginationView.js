import View from "./view";

class PaginationView extends View {
  _parentElement = document.querySelector(".pages");

  hidePagination() {
    this._parentElement.innerHTML = "";
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__page");
      if (!btn) return;
      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }
  _generateMarkup = function () {
    const curPage = this._data.page;
    console.log(curPage);
    const pageNum = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Check if no results
    if (pageNum === 0) return "";
    //Case 1 : First 2 pages
    if (curPage <= 2) {
      return `
        ${Array.from({ length: 3 }, (_, i) => i + 1)
          .map(
            (page) =>
              `<button class="btn__page ${
                page === curPage ? "btn__page--active" : ""
              }" data-goto="${page}">${page}</button>`
          )
          .join("")}
          ${`<button class="btn__page"  data-goto="${
            curPage + 2
          }">...</button>`}
          ${Array.from({ length: 2 }, (_, i) => pageNum + i - 1)
            .map(
              (page) =>
                `<button class="btn__page ${
                  page === curPage ? "btn__page--active" : ""
                }" data-goto="${page}">${page}</button>`
            )
            .join("")}
        `;
    } else if (curPage > 2 && curPage < pageNum - 2) {
      return `
        ${`<button class="btn__page"  data-goto="1">1</button>`}
        ${`<button class="btn__page"  data-goto="${
          curPage >= 2 ? curPage - 2 : curPage > 1 ? curPage - 1 : curPage
        }">...</button>`}
        ${Array.from({ length: 2 }, (_, i) => curPage + i)
          .map(
            (page) =>
              `<button class="btn__page ${
                page === curPage ? "btn__page--active" : ""
              }" data-goto="${page}">${page}</button>`
          )
          .join("")}
          ${`<button class="btn__page"  data-goto="${
            curPage <= pageNum - 2
              ? curPage + 2
              : curPage < pageNum - 1
              ? curPage + 1
              : curPage
          }">...</button>`}
        ${`<button class="btn__page"  data-goto="${pageNum}">${pageNum}</button>`}
        `;
    } else {
      return `${Array.from({ length: 2 }, (_, i) => i + 1)
        .map(
          (page) =>
            `<button class="btn__page ${
              page === curPage ? "btn__page--active" : ""
            }" data-goto="${page}">${page}</button>`
        )
        .join("")} ${`<button class="btn__page"  data-goto="${
        curPage >= 2 ? curPage - 2 : curPage > 1 ? curPage - 1 : curPage
      }">...</button>`}
      ${Array.from({ length: 3 }, (_, i) => pageNum - 2 + i)
        .map(
          (page) =>
            `<button class="btn__page ${
              page === curPage ? "btn__page--active" : ""
            }" data-goto="${page}">${page}</button>`
        )
        .join("")}`;
    }
    //Check if there is only one page

    // if (curPage === pageNum && curPage === 1) return "happy";
    // // if (pageNum  4) {
    // console.log(pageNum);
    // return `
    // <button data-goto="${
    //   curPage === 1 ? 1 : curPage - 1
    // }" class="btn__page btn__page--back${
    //   curPage === 1 ? "btn--disabled" : ""
    // }"><ion-icon name="chevron-back-outline"></ion-icon></button>
    //   ${Array.from({ length: pageNum >= 4 ? 4 : pageNum }, (_, i) =>
    //     i + curPage > pageNum ? pageNum : i + curPage
    //   )
    //     .map((cur) => {
    //       if (curPage > Number(pageNum - 3) || curPage < 1) {
    //         return "";
    //       } else {
    // return `<button class="btn__page ${
    //   cur === curPage ? "btn__page--active" : ""
    // }" data-goto="${cur}">${cur}</button>`;
    //       }
    //     })
    //     .join(" ")}
    //     <button data-goto="${
    //       curPage === pageNum ? pageNum : curPage + 1
    //     }" class="btn__page btn__page--next ${
    //   curPage === pageNum ? "btn--disabled" : ""
    // }"><ion-icon name="chevron-forward-outline"></ion-icon></button>
    //     `;
    // // }
  };
}

export default new PaginationView();
/* <button class="btn__page btn__page--back${
        curPage === 1 ? "btn--disabled" : ""
      }"><ion-icon name="chevron-back-outline"></ion-icon></button> */

/* <button class="btn__page btn__page--next ${
        curPage === pageNum ? "btn--disabled" : ""
      }"><ion-icon name="chevron-forward-outline"></ion-icon></button> */
