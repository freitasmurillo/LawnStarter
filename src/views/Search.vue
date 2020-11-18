<template>
  <div class="container">
    <SearchForm />
    <Results />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm'
import Results from '../components/Results'

export default {
  name: 'ViewSearch',
  components: {
    SearchForm,
    Results,
  }
};
</script>
