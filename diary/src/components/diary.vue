<template>
  <div class="diary">
    <app_nav></app_nav>
    <div class="line"></div>
    <router-link to="/edit_diary" id="edit_diary">
      <img src="../common/images/diary1.svg" alt="diary">
      <p>写日记</p>
    </router-link>
    <ul>
      <li v-for="j in diaries">
        <h3>{{j.title}}</h3>
        <ul>
          <li v-for="k in j.content">
            {{k}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import nav from './nav.vue'
  export default {
    name: 'diary',
    data(){
      return {
        diaries: []
      }
    },
    components: {
      'app_nav': nav
    }
  }
</script>

<style lang="less" scoped>
  .diary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .line {
      width: 100%;
      border-top: 1px solid #000000;
    }
    #edit_diary {
      position: absolute;
      top: 100px;
      right: 20%;
      color: #666;
      p {
        text-align: center;
      }
    }
  }

</style>
