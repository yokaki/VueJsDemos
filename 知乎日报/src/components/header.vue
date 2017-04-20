<template>
  <header>
    <div>
      <img src="../assets/images/logo.svg" alt="logo">
      <p>知乎日报</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app_header'
  }
</script>

<style lang="less">
  .flex_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header {
    .flex_center;
    div {
      .flex_center;
    }
    img {
      height: 2rem;
      width: auto;
      padding: 0 1rem;
    }
  }
</style>
