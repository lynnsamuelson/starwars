import {fetchLuke, fetchSpecies, fetchStarshipOccupancy, fetchStarShips, fetchFilmDates, fetchPlanets, fetchHoth} from "./starWarsData.js"
// import {fetchStarShips} from "./starWarsData.js"
// import {fetchHoth} from "./starWarsData.js"
// import {fetchFilmDates} from "./starWarsData.js"
// import {fetchPlanets} from "./starWarsData.js"

const displayLuke = async () => {
  const data = await fetchLuke()
  renderLukeToDOM(data)
}

const renderLukeToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `
  document.getElementById('app').innerHTML = html
}

displayLuke()

// displaying Star Ships Count

const displayStarShips = async () => {
  const data = await fetchStarShips()
  renderStarShipsToDOM(data)
}

const renderStarShipsToDOM = (data) => {
  let html = `
  <article>
  <section class="card">
  <p>StarShip Count: ${data.count}</p>
  </section>
  </article>
  `
  document.getElementById('starships').innerHTML = html
}

displayStarShips()

// displaying Hoth information

const displayHothInfo = async () => {
  const data = await fetchHoth()
  renderHothToDOM(data)
}

const renderHothToDOM = (data) => {
  let html = `
  <article>
  <section class="card">
  <h4>Hoth</h4>
  <p>Name: ${data.name}</p>
  <p>Rotational Period: ${data.rotation_period}</p>
  <p>Orbital_period: ${data.orbital_period}</p>
  <p>Diameter: ${data.diameter}</p>
  <p>Climate: ${data.climate}</p>
  <p>Gravity: ${data.gravity}</p>
  <p>Terrain: ${data.terrain}</p>
  <p>Surface_water: ${data.surface_water}</p>
  <p>Population: ${data.population}</p>
  </section>
  </article>
  `
  document.getElementById('hoth').innerHTML = html
}

displayHothInfo()


// displaying films and release dates

const displayFilms = async () => {
  const data = await fetchFilmDates()
  renderFilmsToDOM(data)
}

const renderFilmsToDOM = (data) => {
  let html = `
  <article>
  <section class="card">
  <h4>Films & Dates Released</h4>
  <p>${data.results[0].title}, released ${data.results[0].release_date}</p>
  <p>${data.results[1].title}, released ${data.results[1].release_date}</p>
  <p>${data.results[2].title}, released ${data.results[2].release_date}</p>
  <p>${data.results[3].title}, released ${data.results[3].release_date}</p>
  <p>${data.results[4].title}, released ${data.results[4].release_date}</p>
  <p>${data.results[5].title}, released ${data.results[5].release_date}</p>
  </section>
  </article>
  `
document.getElementById('films').innerHTML = html

}

displayFilms()

// displaying planets in order of size smallest to largest
const displayPlanets = async () => {
  const data = await fetchPlanets()
  const unsortedPlanets = data.results
  const sortedPlanets = unsortedPlanets.sort((planet1, planet2)=> planet1.diameter - planet2.diameter)
  renderPlanetsToDOM(sortedPlanets)

}


const renderPlanetsToDOM = (planets) => {
  let planetsHtml = '';
  planets.forEach(planet => planetsHtml += `<p>Name: ${planet.name} </br>Diameter: ${planet.diameter}</p>`);
  let html = `
  <article>
  <section class="card">
  <h4>Planets by size (smallest to largest)</h4>
  ${planetsHtml}
  </section>
  </article>
  `
  document.getElementById('planets').innerHTML = html
}

displayPlanets()

// Display a list of species and their language

const displaySpecies = async () => {
  const data = await fetchSpecies()
  const species = data.results
  renderSpeciesToDOM(species)
}

const renderSpeciesToDOM = (species) => {
let speciesHtml = '';
species.forEach(species => speciesHtml += `<p>Name: ${species.name} </br>Language: ${species.language}</p>`)
let html = `
  <article>
  <section class="card">
  <h4>Star Wars list of Species and their language.</h4>
  ${speciesHtml}
  </section>
  </article>
  `
document.getElementById('species').innerHTML = html
}

displaySpecies()

// List the name and passenger capacity of each Starship

const displayStarShipOccupancy = async () => {
  const data = await fetchStarshipOccupancy()
  const occupancy = data.results
  renderOccupancyToDOM(occupancy)
}

const renderOccupancyToDOM = (starship) => {
  let occupancyHtml = '';
  starship.forEach(starship => occupancyHtml += `<p>Name of Ship: ${starship.name} </br>Passengers: ${starship.passengers}</p>`)
  let html = `
  <article>
  <section class="card">
  <h4>Occupancy of Starships</h4>
  ${occupancyHtml}
  </section>
  </article>
  `
  document.getElementById('occupancy').innerHTML = html
}

  displayStarShipOccupancy()