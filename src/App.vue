<template>
  <div id="app">
    <header class="header">
      <router-link to="/">SWStarter</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  background-color: #ededed;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #383838;
  margin: 0;
}

label {
  font-weight: bold;
  color: #000;
}

p {
  text-align: left;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin: 0;
}

.header {
  min-height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header a {
  color: #0ab463;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}

.container {
  max-width: 1020px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
}

ul, ul li {
  list-style: none;
  padding: 0;
  marign: 0;
}
</style>
