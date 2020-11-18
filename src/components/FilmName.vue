<template>
  <router-link
    :to="{ path: `/films/${movieInfo.id}`}"
    v-slot="{ href }"
  >
    <a :href="href">{{ movieInfo.title }}</a>
    <span v-if="!isLast">, </span>
  </router-link>
</template>

<script>
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
      movieInfo: {
        id: 0,
        title: ''
      }
    }
  },
  async created() {
    await this.fetchMovieName()
  },
  methods: {
    async fetchMovieName() {
      const result = await fetch(this.source)
      this.movieInfo = {
        ...await result.json(),
        id: this.source.match(/(\d+)\/?$/)[1]
      }
    }
  }
}
</script>
