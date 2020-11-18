<template>
  <router-link
    :to="{ path: `/people/${charInfo.id}`}"
    v-slot="{ href }"
  >
    <a :href="href">{{ charInfo.name }}</a>
    <span v-if="!isLast">, </span>
  </router-link>
</template>

<script>
import { SWAPI } from '../services'

export default {
  name: 'PeopleName',
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
      charInfo: ''
    }
  },
  async created() {
    await this.fetchCharacterName()
  },
  methods: {
    async fetchCharacterName() {
      const id = this.source.match(/(\d+)\/?$/)[1]
      this.charInfo = {
        ...await SWAPI.fetchPeople(id),
        id
      }
    }
  }
}
</script>
