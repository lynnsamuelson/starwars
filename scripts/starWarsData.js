const API = "https://swapi.dev/api"


// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`)
  const jsonData = await dataFetch.json()
  return jsonData
};

// Display the number of starships returned from page 4
export const fetchStarShips = async () => {
  const dataFetch = await fetch(`${API}/starships/?page=4`)
  const jsonData = await dataFetch.json()
  return jsonData
};


// Display data about Hoth Note: Hoth's id=4
export const fetchHoth = async () => {
  const dataFetch = await fetch (`${API}/planets/4/`)
  const jsonData = await dataFetch.json()
  return jsonData
}


// Display all the films and their release date
export const fetchFilmDates = async () => {
  const dataFetch = await fetch (`${API}/films/`)
  const jsonData = await dataFetch.json()
  return jsonData
}


// List the planets in order of size (diameter) from smallest to largest
export const fetchPlanets = async () => {
  const dataFetch = await fetch (`${API}/planets/`)
  const jsonData = await dataFetch.json()
  return jsonData
}

