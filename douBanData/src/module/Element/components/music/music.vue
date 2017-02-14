<template>
  <div id="music">
    <p class="music-list-tiele">{{message}}</p>
    <ul class="item-template-list">
      <li v-for="item in musicList" class="music-list-item">
        <p class="music-list-song-name">
          <span class="music-list-singer-name">
            <a :href="item.url">{{item.songname | songNameLimit}}</a>
          </span>
          <span>{{item.singername}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        message: '音乐专区',
        musicList: []
      }
    },
    filters: {
      songNameLimit: val => {
        if (val.length >= 6) {
          val = val.substring(0, 6) + '...'
        }
        return val;
      }
    },
    mounted: function () {
      let url = 'https://route.showapi.com/213-4';
      this.$http.get(`${url}?showapi_appid=32103&showapi_sign=704df8cac3f043c58d2c2de8d6e11b0e&topid=26`).then(res => {
        this.musicList = res.body.showapi_res_body.pagebean.songlist.splice(0, 10);
        console.log(this.musicList);
      });
    },
    methods: {}
  }
</script>

<style>

  .music-list-tiele {
    color: #8391a5;
    font: 16px/24px "微软雅黑";
    margin: 5px 0;
  }

  .music-list-singer-name {
    display: inline-block;
    min-width: 140px;
  }

</style>