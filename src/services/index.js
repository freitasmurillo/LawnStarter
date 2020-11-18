
class SWAPI {
  BASE_URL = 'https://swapi.dev/api'

   async fetchSWAPI(url) {
    const result = await fetch(`${this.BASE_URL}/${url}`)
    return result.json()
  }

  async search(type, searchKey) {
    return this.fetchSWAPI(`${type}/?search=${searchKey}`)
  }

  async fetchPeople(peopleId) {
    return this.fetchSWAPI(`people/${peopleId}`)
  }

  async fetchFilm(filmId) {
    return this.fetchSWAPI(`films/${filmId}`)
  }
}

export default new SWAPI()
