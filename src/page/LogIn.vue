<template>
  <div style="margin: 40px;margin-left: 70px">
    <div style="margin-bottom: 20px">
      <span>用户名:</span>
      <input class="inputSty" type="text" v-model="username" placeholder="请输入用户名"/>
    </div>
    <div style="padding-bottom: 20px">
      <span>密码:</span>
      <input class="inputPsw" type="password" v-model="psw" placeholder="请输入密码"/>
    </div>
    <div>
      <div @click="onLogin()" style="margin-right: 50px;margin-left: 50px;width: 60%;height: 44px;background-color: aqua;display:flex;justify-content:center;align-items:center;">
        <a>登录</a>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LogIn",
      data(){
          return{
            username:'',
            psw:'',
          }
      },
      methods:{
        onLogin(){
          this.$emit('has-log')
        }
      }
    }
</script>

<style scoped>
.inputSty{
  height: 30px;
  width: 60%;
}
  .inputPsw{
    margin-left: 13px;
    height: 30px;
    width: 60%;
  }
</style>
