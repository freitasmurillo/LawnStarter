<template>
  <div class="container">
    <Card title="Some stats">

      <template v-slot:left>
        <h2>Last Search</h2>
        <p>
          Results found: {{ stats.last.count }}
          <br>
          Type: {{ stats.last.type }}
          <br>
          Search key: {{ stats.last.search }}
        </p>
      </template>

      <template v-slot:right>
        <h2>Total</h2>
        <p>
          Results found: {{ stats.total.count }}
          <br>
          Searchs made: {{ stats.requests }}
        </p>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      stateStats: 'stateStats',
    }),
    stats: {
      get() {
        return this.stateStats
      },
    }
  }
};
</script>
