<template>
  <div id="app">
    <div class="app-header">
      <div class="app-head-inner">
        <router-link :to="{path:'/'}">
          <img src="./assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-if="username!==''" class="nav-pile">|</li>
            <li v-if="username!==''">退出</li>
            <li v-if="username!==''" class="nav-pile">|</li>
            <li v-if="username===''" @click="logClick()">登录</li>
            <li v-if="username===''" class="nav-pile">|</li>
            <li v-if="username===''" @click="regClick()">注册</li>
            <li v-if="username===''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-foot">footer</div>
    <my-dialog :is-show="isShowAboutDialog"  @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog"  @on-close="closeDialog('isShowLogDialog')">
      <LogIn @has-log="onSuccessLog"></LogIn>
    </my-dialog>
    <my-dialog @register-log="registerSuccessLog" :is-show="isShowRegDialog"  @on-close="closeDialog('isShowRegDialog')">
      <Register></Register>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from './components/Dialog'
  import LogIn from './page/LogIn'
  import Register from './page/Register'
  import storage from './storage/Storage'
export default {
  name: 'App',

  components:{
    MyDialog:Dialog,
    LogIn,
    Register,
  },
  data(){
    return{
      isShowLogDialog:false,
      isShowRegDialog:false,
      isShowAboutDialog:false,
      username:'',
    }
  },
  methods:{
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    aboutClick(){
      this.isShowAboutDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog(){
      console.log('登陆成功')
      this.isShowLogDialog = false
      storage.state.isLogin=true;
    },
    registerSuccessLog(){
      console.log('注册成功')
      this.isShowLogDialog = false
    }
  }
}
</script>

<style>

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  /*vertical-align: baseline;*/
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  /*width: 100%;*/
  margin: 10px;
}
.head-nav {
  float: right;
}
.nav-pile {
  padding: 0 10px;
}
.head-nav ul {
  overflow: hidden;
  list-style-type: none;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  display: flex;
  flex: 1;
  /*flex-direction: column;*/
  /*margin: 0 auto;*/
}
</style>
