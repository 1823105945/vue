<template>
    <div style="margin: 50px">
      <div>
        <span>用户名:</span>
        <input style="height: 30px;width: 60%;margin-bottom: 20px" type="text"/>
      </div>
      <div>
        <span>密码:</span>
        <input style="margin-left: 13px;height: 30px;width: 60%;margin-bottom: 20px" type="password"/>
      </div>
      <div>
        <div @click="register()" style="cursor: pointer;height: 40px;margin-left: 50px;margin-right: 50px;width: 60%;background-color: aqua;display:flex;justify-content:center;align-items:center;">
          <a>注册</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
      data(){
          return{

          }
      },
      methods:{
        register(){
          this.$emit('register-log')
        }
      },
    }
</script>

<style scoped>

</style>
