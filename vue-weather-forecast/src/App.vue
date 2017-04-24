<template>
  <div id="app">
    <v-weather></v-weather>
  </div>
</template>

<script>
  import weather from './components/weather.vue'
  export default {
    components: {
      'v-weather': weather
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
