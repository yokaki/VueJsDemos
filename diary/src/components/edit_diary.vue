<template>
  <div class="edit_diary">
    <app_nav></app_nav>
    <!--<div class="line"></div>-->
    <input type="text" placeholder="标题" class="diary_title" v-model="diary.title">
    <markdown-editor v-model="diary.content" ref="markdownEditor" class="markdown-editor"></markdown-editor>
    <p>
      <button class="save" @click="save"><img src="../common/images/save.svg" alt="">保 存</button>
      <button class="publish" @click="publish"><img src="../common/images/publish.svg" alt="">发 布</button>
    </p>
  </div>
</template>

<script>
  import nav from './nav.vue'
  import {markdownEditor} from 'vue-simplemde'
  import marked from 'marked'
  export default {
    name: 'edit_diary',
    data(){
      return {
        diary: {
          content: '',
          title: ''
        }
      }
    },
    watch: {
      content(val){
        console.log(marked(val))
//        console.log(val)
      }
    },
    components: {
      'app_nav': nav,
      markdownEditor
    },
    methods: {
      save(){

      },
      publish(){

      }
    }
  }
</script>

<style lang="less" scoped>
  .edit_diary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .diary_title {
      width: 70%;
      margin-top: 20px;
      height: 30px;
      padding: 3px 0 3px 10px;
    }
    .save {
      background-color: #74b5cc;
      margin-right: 20px;
    }
    .publish {
      background-color: #f6c8a8;
    }
    p {
      display: flex;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 1.3rem;
          margin-right: 13px;
        }
      }
    }
  }
</style>
