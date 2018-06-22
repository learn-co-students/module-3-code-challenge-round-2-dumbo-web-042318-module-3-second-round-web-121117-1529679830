const Beer = function() {
  const listGroup = document.querySelector("#list-group");
  const beerDetailDiv = document.querySelector("#beer-detail");

  return class Beer {
    static renderBeerList(beers) {
      beers.forEach(Beer.buildBeer);
    }

    static buildBeer(beer) {
      const li = document.createElement("li");
      li.innerHTML = beer.name;
      li.classList.add("list-group-item")
      li.setAttribute('data-beer-id', beer.id);
      li.addEventListener('click', () => {
        Adapter.getOneBeer(beer.id)
          .then(Beer.renderBeerDetail);
      })

      listGroup.appendChild(li);
    }

    static renderBeerDetail(beer) {
      beerDetailDiv.innerHTML = `
      <h1>${beer.name}</h1>
      <img src="${beer.image_url}">
      <h3>${beer.tagline}</h3>
      <textarea id="beer-description">${beer.description}</textarea>
      <button id="edit-beer" class="btn btn-info">
        Save
      </button>
      `;

      const updateButton = document.querySelector("#edit-beer");
      const beerDescription = document.querySelector("#beer-description");

      updateButton.addEventListener('click', () => {
        Adapter.updateOneBeer(beer.id, beerDescription.value);
      })
    }
  }
}();
