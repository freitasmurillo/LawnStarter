<template>
  <Card class="CardForm">
    <form @submit.prevent="search">
      <div>
        <p>What are you searching for?</p>
        <div class="radios">
          <label>
            <input type="radio" v-model="type" value="people" id="people" checked />
            <span>People</span>
          </label>
          <label>
            <input type="radio" v-model="type" value="films" id="films" />
            <span>Movies</span>
          </label>
        </div>
      </div>
      <div>
        <input type="text" class="queryInput" name="search-content" v-model="query" :placeholder="`e.g ${placeholder}`">
      </div>
      <Button v-bind:class="{ 'buttonBlock': true }" type="submit" :disabled="query.length <= 0">
        <span v-if="!loading">SEARCH</span>
        <span v-else>SEARCHING...</span>
      </Button>
    </form>
  </Card>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Card from './Card'
import Button from './Button'

export default {
  name: 'SearchForm',
  components: {
    Card,
    Button,
  },
  computed: {
    ...mapGetters({
      stateType: 'stateType',
      stateKey: 'stateKey',
    }),
    ...mapState({
      items: ({ items }) => items,
      loading: ({ isLoading }) => isLoading,
    }),
    type: {
      get() {
        return this.stateType
      },
      set(val) {
        this.$store.commit('CHANGE_ITEMS', []);
        this.$store.commit('CHANGE_SEARCH_TYPE', val);
        return val;
      },
    },
    query: {
      get() {
        return this.stateKey
      },
      set(val) {
        this.$store.commit('CHANGE_SEARCH_KEY', val);
        return val;
      },
    },
    placeholder() {
      const arrMovies = [
        'A New Hope',
        'The Empire Strikes Back',
        'The Phantom Menace',
        'Attack of the Clones'
      ]
      const newArr = arrMovies.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])
      return this.stateType === 'people' ? 'Chewacca, Yoda, Boba Fett' : newArr[0]
    },
  },
  methods: {
    ...mapActions(['search'])
  }
}
</script>

<style scoped>
.queryInput {
  display: block;
  width: 100%;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  margin: 15px 0 15px;
  padding: 0 12px;
  line-height: 38px;
  border-radius: 4px;
  background-color: #fff;
}

.queryInput:focus {
  border-radius: 4px;
  border: solid 1px #c4c4c4;
}

.radios,
.radios span {
  display: flex;
  align-items: center;
}

.radios input,
.radios span {
  display: inline-block;
  margin-right: 5px;
}

.CardForm {
  width: 100%;
  flex: 0 0 410px;
  height: 230px;
}
</style>
