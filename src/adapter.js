const Adapter = function() {
  const beerUrl = "http://localhost:3000/beers";

  return class Adapter {
    static getAllBeers() {
      return fetch(beerUrl)
        .then(res => res.json());
    }

    static getOneBeer(beerId) {
      return fetch(`${beerUrl}/${beerId}`)
        .then(res => res.json());
    }

    static updateOneBeer(beerId, content) {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({description: content})
      }

      return fetch(`${beerUrl}/${beerId}`, options)
        .then(res => res.json());
    }
  }
}();
