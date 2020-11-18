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
      const result = await fetch(this.source)
      this.charInfo = {
        ...await result.json(),
        id: this.source.match(/(\d+)\/?$/)[1]
      }
    }
  }
}
</script>
