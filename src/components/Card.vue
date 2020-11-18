<template>
  <div class="Card">
    <header class="CardHeader" v-if="title">
      <h1 class="CardTitle">{{ title }}</h1>
    </header>
    <div class="CardContent" v-if="$slots.left || $slots.right">
      <div class="CardLeft" v-if="$slots.left">
        <slot name="left" />
      </div>
      <div class="CardRight" v-if="$slots.right">
        <slot name="right" />
      </div>
    </div>
    <slot />
    <footer class="CardFooter" v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.Card {
  padding: 30px;
  border-radius: 4px;
  border: solid 1px var(--gainsboro);
  background-color: #fff;
  flex: 0 0 100%;
}

.CardHeader {
  padding-bottom: 30px;
}

.CardTitle {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.CardContent {
  display: flex;
  justify-content: space-between;
}

.CardContent h2 {
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 10px;
}

.CardContent > div {
  width: 100%;
}

.CardContent > div:first-child {
  padding-right: 15px;
}

.CardContent > div:last-child {
  padding-left: 15px;
}

.CardLeft p {
  white-space: pre-line;
}
</style>
