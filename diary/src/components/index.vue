<template>
  <div class="index">
    <app_header></app_header>
    <img src="../common/images/bg2.jpg" alt="backgroundImage" :style="background_image" class="background_image">
  </div>
</template>

<script>
  import header from './header.vue'
  export default {
    name: 'index',
    data(){
      return {
        background_image: {
          height: `${window.innerHeight}px`,
          width: `${window.outerWidth}px`
        }
      }
    },
    mounted(){
      let username = window.localStorage.getItem('username')
      this.$store.commit('get_username',username)
    },
    components: {
      'app_header': header
    }
  }
</script>
