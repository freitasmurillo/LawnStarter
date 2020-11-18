export class SWAPI {
  static BASE_URL = process.env.VUE_APP_SWAPI_BASE_URL

  static async fetchSWAPI(url) {
    const result = await fetch(`${this.BASE_URL}/${url}`)
    return result.json()
  }

  static async search(type, searchKey) {
    return this.fetchSWAPI(`${type}/?search=${searchKey}`)
  }

  static fetchPeople(peopleId) {
    return this.fetchSWAPI(`people/${peopleId}`)
  }

  static fetchFilm(filmId) {
    return this.fetchSWAPI(`films/${filmId}`)
  }
}
