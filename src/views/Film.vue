<template>
  <div class="container">
    <Card class="CardFilm" :title="movieInfo.title">
      <template v-slot:left>
        <h2>Opening Crawl</h2>
        <p>{{ movieInfo.opening_crawl }}</p>
      </template>

      <template v-slot:right>
        <h2>Characters</h2>
        <p>
          <people-name
            :source="character"
            v-for="(character, index) in movieInfo.characters"
            :key="index"
            :is-last="movieInfo.characters.length === index + 1"
          />
        </p>
      </template>

      <template v-slot:footer>
        <Button path="/">BACK TO SEARCH</Button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card'
import Button from '../components/Button'
import PeopleName from '../components/PeopleName'
import { SWAPI } from '../services'

export default {
  name: 'FilmView',
  components: {
    Card,
    Button,
    PeopleName,
  },
  data() {
    return {
      movieInfo: {
        characters: [],
        opening_crawl: '',
        title: ''
      }
    }
  },
  async created() {
    this.movieInfo = await SWAPI.fetchFilm(this.$route.params.filmId)
  }
};
</script>
