document.addEventListener("DOMContentLoaded", init)

function init() {
  Adapter.getAllBeers().then(Beer.renderBeerList);
}
