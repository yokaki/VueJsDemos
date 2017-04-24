<template>
  <div id="app">
    <div v-if="seen&&login" class="app_main">
      <header>
        <ul class="user_info">
          <!--等级、头像、名字-->
          <li class="rank">
            <img src="./images/elite.png" alt="rank_logo" class="rank_logo" v-if="user_grade==5">
            <img src="./images/top.png" alt="rank_logo" class="rank_logo" v-if="user_grade==4">
            <img src="./images/high.png" alt="rank_logo" class="rank_logo" v-if="user_grade==3">
            <img src="./images/medium.png" alt="rank_logo" class="rank_logo" v-if="user_grade==2">
            <img src="./images/primary.png" alt="rank_logo" class="rank_logo" v-if="user_grade==1">

          </li>
          <li>
            <ul class="user_name_and_avatar">
              <li><img :src="user.avatar" alt="avatar" class="avatar"></li>
              <li class="user_name">{{user.name}}</li>
            </ul>
          </li>
        </ul>
        <div class="run_data">
          <ul class="info">
            <!--距离、配速-->
            <li>
              <p>{{data.distance}}km</p>
              <span>距离</span>
            </li>
            <li>
              <p>{{data.pace}}/km</p>
              <span>配速</span>
            </li>
          </ul>
          <ul class="info">
            <!--时间、卡路里-->
            <li>
              <p>{{data.totalSeconds | time}}</p>
              <span>时间</span>
            </li>
            <li>
              <p>{{data.totalCalories}}kal</p>
              <span>卡路里</span>
            </li>
          </ul>
        </div>
      </header>
      <div class="progress" v-if="data.completeDistance && data.targetDistance">
        <div class="left">
          已完成：<span class="num">{{down_percent | percent}}</span>
        </div>
        <div class="right">
          <p>
            <span>月目标：<span class="num">{{data.targetDistance}}km</span></span>
            <span>已完成：<span class="num">{{data.completeDistance}}km</span></span>

          </p>
          <section>
            <div class="box1"></div>
            <div class="box2" :style="percent_obj"></div>
          </section>
        </div>
      </div>
      <div class="location" v-if="!map_hide">
        <p v-if="data.location"><span>{{data.location}} </span><span>距离：{{data.distance}}km</span></p>
        <div class="map_mask">
          <img :src="data.img" alt="map">
        </div>
        <div class="wobuxiangzaijiale">
          <img src="./images/smile.svg" alt="smile">
          <span>约跑，让跑步不再孤单</span>
        </div>
      </div>
      <div class="map_hide" v-if="map_hide">
        <img src="./images/oops.svg" alt="map_hide">
        <p>哎呀~地图被隐藏了！</p>
      </div>
      <footer>
        <p class="challenge">
          来向我挑战,试试你有多快~
        </p>
        <p class="runmate">
        <span class="logo_intro">
          <img src="./images/foot_logo.png" alt="logo" class="logo">
        </span>
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.runners.runmate">立即下载</a>
        </p>
      </footer>
    </div>
    <div v-if="!login" class="not_login">
      <img src="./images/login.svg" alt="login" class="login_logo">
      <span>{{login_text}}</span>
    </div>
    <div class="err" v-if="err && login">
      <img src="./images/err.svg" alt="err">
      <span>抱歉，请求失败了...</span>
    </div>
  </div>

</template>

<script>
  import map from './components/map.vue'
  const shareUrl = {
    url: window.location.href,
    uid: '',
    rid: '',
    myUrl: 'http://static.runtogether.cn/static/ShareRecord/?uid=9068f5f0976f11e5ace600163e0221a7&rid=5d6c26a0289011e79e4200163e0221a7&from=groupmessage'

  }
  const getUrl = 'http://runmate.runtogether.cn/api/v5/'
  export default {
    name: 'app',
    data(){
      return {
        data: {},
        user: {},
        seen: false,
        login: false,
        percent_obj: {
          clip: ''
        },
        down_percent: '',
        user_grade: '',
        map_hide: false,
        login_text: '数据加载中...',
        err: false
      }
    },
    beforeMount(){
      setTimeout(() => {
        this.login = true
      }, 1700)
    },
    mounted(){
      const param = this.getUrlParam();

      shareUrl.uid = param.uid;
      shareUrl.rid = param.rid;
      if (shareUrl.uid && shareUrl.rid) {
        this.$nextTick(() => {
          this.getData(shareUrl.uid, shareUrl.rid);
//          setTimeout(() => {
//            this.seen = true;
//          }, 1000)
        });
      } else {
        this.login = false;
        this.err = true;
      }
      this.get_user_grade(shareUrl.rid);
    },
    methods: {
      getUrlParam(){
        const url = shareUrl.url;
        const i = url.indexOf("?");
        const param = url.substring(i + 1);
        const paramArray = param.split("&");
        const urlObject = {}
        for (let i = 0; i < paramArray.length; i++) {
          let urlItem = paramArray[i];
          let item = urlItem.split("=");
          urlObject[item[0]] = item[1];
        }
        return urlObject
      },
      getData(uid, rid){
        let url = `${getUrl}users/${uid}/runs/${rid}`
        this.$http.get(url).then(data => {
          this.data = data.body;
          this.user = data.body.user;
          this.map_hide = data.body.isHideMap;
          this.getPercentage();
          this.login = true;
          this.seen = true;
          this.err = false;
        }, res => {
          this.login = false;
          this.seen = false;
          this.err = true;
        });
      },
      getPercentage(){
        if (this.data.completeDistance && this.data.targetDistance) {
          this.down_percent = this.data.completeDistance / this.data.targetDistance;
          let percent = this.down_percent * 16;
          if (percent >= 16) {
            percent = 16
          }
          this.percent_obj.clip = `rect(0,${percent}rem,20px,0)`
          this.err = false;
        } else {
          this.login = false;
          this.err = true;

        }
      },
      get_user_grade(uid){
        const url = 'http://runmate.runtogether.cn/api/v5/runner/grade/';
        this.$http.get(url + uid).then(res => {
          this.user_grade = res.data.grade;
        });
      }
    },
    filters: {
      time(val){
        let s = val;
        let min = Math.floor(s / 60);
        s = Math.floor(s % 60);
        return `${min}分${s}秒`
      },
      percent(val){
        val = val * 100;
        if (val >= 100) {
          val = 100;
          return `${val.toFixed(0)}%`
        }
        return `${val.toFixed(1)}%`
      }
    }

  }
</script>

<style lang="less">
  @import "./style/index.less";
  @import "./style/media.css";

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    color: #383838;
    background-color: #f5f5f5;
  }
</style>
