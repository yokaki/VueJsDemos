<template>
  <div id="app">
    <p>Welcome to about page!!!</p>
    <v-hello></v-hello>
    <a href="../module/index.html">Let's come back index page!!!</a>
  </div>
</template>

<script>
  import Hello from 'components/Hello/Hello.vue'

  export default {
    components: {
      'v-hello': Hello
    }
  }
</script>

<style>

</style>
