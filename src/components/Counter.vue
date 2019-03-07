<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNumber"/>
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
    export default {
        name: "Counter",
      props: {
        max: {
          type: Number,
          default: 5
        },
        min: {
          type: Number,
          default: 1
        }
      },
      data(){
          return{
            number:this.min
          }
      },
      watch:{
        number(){
          this.$emit('on-change',this.number)
        }
      },
      methods:{
        minus(){
          this.number--
          this.$emit()
        },
        add(){
          this.number++
        },
        fixNumber(){
          let fix
          if (typeof this.number==='string'){
            fix = Number(this.number.replace(/\D/g, ''))
          } else {
            fix = this.number
          }
          this.number = fix
        }
      }
    }
</script>

<style scoped>
.counter-component{
  display: flex;
  flex: 1;
  flex-direction: row;
}
  .counter-btn{
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #e3e3e3;
    /*border-radius: 3px;*/
    cursor: pointer;
    /*margin-right: -3px;*/
  }
  .counter-show input{
    width: 70px;
    height: 25px;
    border:0px;
    text-align: center;
  }
.counter-show{
  border: 1px solid #e3e3e3;
}
</style>
