<template>
  <router-link
    :to="{ path: `/films/${filmInfo.id}`}"
    v-slot="{ href }"
  >
    <a :href="href">{{ filmInfo.title }}</a>
    <span v-if="!isLast">, </span>
  </router-link>
</template>

<script>
import { SWAPI } from '../services'

export default {
  name: 'FilmName',
  props: {
    source: {
      type: String,
      default: ''
    },
    isLast: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      filmInfo: {
        id: 0,
        title: ''
      }
    }
  },
  async created() {
    await this.fetchFilmName()
  },
  methods: {
    async fetchFilmName() {
      const filmId = this.source.match(/(\d+)\/?$/)[1]
      this.filmInfo = {
        ...await SWAPI.fetchFilm(filmId),
        id: filmId
      }
    }
  }
}
</script>
