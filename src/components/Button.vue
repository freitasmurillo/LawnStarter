<template>
  <component :is="tag" class="button" @click="handleClick">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    path: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'button',
    },
    isLoading: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleClick(e) {
      if (this.path) {
        e.preventDefault();
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.button {
  padding: 8px 20px;
  border-radius: 17px;
  background-color: #0ab463;
  border: 1px solid #0ab463;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
}

.button,
.button:focus {
  outline: none;
}

.button:hover {
  background-color: #089954;
  border-color: white;
  transition: 0.35s;
  cursor: pointer;
  text-decoration: none;
}

.buttonBlock {
  display: block;
  width: 100%;
}

.button.disabled,
.button:disabled {
  background-color: #c4c4c4;
  border-color: #c4c4c4;
  pointer-events: none;
  opacity: 0.65;
}
</style>
