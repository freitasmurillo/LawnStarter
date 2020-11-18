<template>
  <Card class="CardResults">
    <template v-slot:left>
      <h2>Results</h2>
      <div v-if="items.length === 0">
        <p v-if="isLoading">Searching...</p>
        <p v-else>
          There are zero  matches.
          Use the form to search for People or Movies.
        </p>
      </div>
      <ul v-else>
        <li v-for="(item, index) in items" :key="index">
          <span>
            {{ item.name || item.title }}
          </span>
          <Button :path="`/${searchType}/${item.url.match(/(\d+)\/?$/)[1]}`" tag="a">SEE DETAILS</Button>
        </li>
      </ul>
    </template>
  </Card>
</template>

<script>
import { mapState } from 'vuex'
import Card from './Card'
import Button from './Button'

export default {
  name: 'Results',
  components: {
    Card,
    Button
  },
  computed: mapState({
    items: ({ items }) => items,
    searchType: ({ searchType }) => searchType,
    isLoading: ({ isLoading }) => isLoading,
  })
};
</script>

<style lang="css">
.CardResults {
  width: 100%;
  margin: 0;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 var(--darkgray);
  border: solid 1px var(--gainsboro);
  background-color: #fff;
  flex: 0 0 580px;
}

.CardResults > div > p {
  text-align: center;
  color: #c4c4c4;
}
</style>

<style lang="css" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #c4c4c4;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
}
</style>
