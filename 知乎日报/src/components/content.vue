<template>
  <div class="content">
    <ul id="container">
      <li v-for="j in data_list">
        <p>{{j.date | dade_formate}}</p>
        <ul>
          <li v-for="k in j.stories" class="story">
            <img :src="k.images[0]" alt="img">
            <router-link :to='get_path(k.id)'>
              <p>{{k.title}}</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <img src="../assets/images/loading.svg" alt="loading" class="loading">
  </div>
</template>

<script>

  export default {
    name: 'app_content',
    data(){
      return {
        data_list: [],
        date: '',
        flag: true
      }
    },
    updated(){
      this.scroll()//数据变化后的逻辑
    },
    mounted(){
      this.date = this.get_time(new Date())
      this.get_data()
    },
    filters: {
      dade_formate(date){
        let year = date.substring(0, 4)
        let month = date.substring(4, 6)
        let day = date.substring(6, 8)
        return `${year}-${month}-${day}`
      }
    },
    methods: {
      get_data(){
        this.$http.get('api/news/before/' + this.date).then(res => {
          this.data_list.push(res.data)
        }, res => {
          console.log(res)
        })
      },
      get_time(time){
        let l = time.toLocaleDateString().split('/')
        if (l[1] < 10) {
          l[1] = '0' + l[1]
        }
        return l.join('')
      },
      get_more(){
        this.date -= 1
        this.get_data()
      },
      scroll(){
        const that = this //绑定this
        const heiget = document.querySelector('#container').clientHeight//拿到ul的高度
        window.onscroll = function () {//监听滑轮滚动事件
          if (heiget - document.body.scrollTop < 600 && that.flag == true) {//滑轮距顶部的距离接近ul的高度时，并且标记为ture时发起新的ajax请求。
            setTimeout(() => {
              that.get_more()
            }, 700)
            that.flag = false//标记改为false，避免在这一瞬间重复请求。
          }
          if (heiget - document.body.scrollTop > 1600 && that.flag == false) {
            that.flag = true//当滑轮距顶部的距离偏离ul的高度一段距离时，标记改为true，为下一次请求做准备
          }
        }
      },
      get_path(id){
        return `/stories/${id}`
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    padding: 1rem;
  }

  #container {
    /*padding-bottom: 100px;*/
  }

  .story {
    display: flex;
    align-items: center;
    padding: 1rem;
    img {
      height: 3rem;
    }
    p {
      font-size: .9rem;
      padding-left: 1rem;
    }
  }

  @keyframes rotate {
    0%,
    100% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: rotate 1.2s linear infinite;
    display: block;
    margin: 0 auto;
    width: 2rem;
  }
</style>
