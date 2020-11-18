<template>
  <div class="container">
    <Card class="ViewPeople" :title="charInfo.name">
      <template v-slot:left>
        <h2>Details</h2>
        <p>
          Birth Year: {{ charInfo.birth_year }}
          <br>
          Gender: {{ charInfo.gender }}
          <br>
          Eye Color: {{ charInfo.eye_color }}
          <br>
          Hair Color: {{ charInfo.hair_color }}
          <br>
          Height: {{ charInfo.height }}
          <br>
          Mass: {{ charInfo.mass }}
        </p>
      </template>

      <template v-slot:right>
        <h2>Movies</h2>
        <p>
          <film-name
            :source="item"
            v-for="(item, index) in charInfo.films"
            :key="index"
            :is-last="charInfo.films.length === index + 1"
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
import FilmName from '../components/FilmName'

export default {
  name: 'PeopleView',
  components: {
    Card,
    FilmName,
    Button
  },
  data() {
    return {
      source: 'https://swapi.dev/api',
      charInfo: { }
    }
  },
  async created() {
    const fetchRequest = await fetch(`${this.source}/people/${this.$route.params.peopleId}`)
    this.charInfo = await fetchRequest.json()
  }
}
</script>
