const apiURL = "https://api.unsplash.com";

export async function getSearchImage(key, term) {
  const url = `${apiURL}/search?query=${term}&client_id=${key}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((val) => {
      return [null, val];
    })
    .catch((error) => {
      return [error, null];
    });
}

export async function getSingleImage(key, id) {
  const url = `${apiURL}/photos/${id}?client_id=${key}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((val) => {
      return [null, val];
    })
    .catch((error) => {
      return [error, null];
    });
}

export async function getMoreImage(key, term, page) {
  const url = `${apiURL}/search?query=${term}&client_id=${key}&page=${page}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((val) => {
      return [null, val];
    })
    .catch((error) => {
      return [error, null];
    });
}
