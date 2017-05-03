<template>
  <div class="edit_diary">
    <app_nav></app_nav>
    <div class="line"></div>
  </div>
</template>

<script>
  import nav from './nav.vue'
  export default {
    name: 'edit_diary',
    components: {
      'app_nav': nav
    }
  }
</script>

<style lang="less" scoped>
  .edit_diary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .line {
      width: 100%;
      border-top: 1px solid #000000;
    }
  }
</style>
