<template>
  <div class="story_item" v-html="html">
  </div>
</template>

<script>
  export default {
    name: 'story',
    data(){
      return {
        id: this.$route.params.id,
        story_object: {},
        html:''
      }
    },
    mounted(){
      this.get_story_item()
    },
    methods: {
      get_story_item(){
        this.$http.get('/api/news/' + this.id).then(res => {
          this.story_object = res.data
          this.html = res.data.body
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
