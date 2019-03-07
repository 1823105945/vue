<template>
  <div>
    <ul class="chooser-list">
      <li class="chooser-component" v-for="(item,index) in selections" @click="chosenSelection(index)" :title="item.label" :class="{active:index===nowIndex}">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Chooser",
      props: {
        selections: {
          type: Array,
          default: [{
            label: 'test',
            value: 0
          }]
        }
      },
      data (){
          return{
            nowIndex:0
          }
      },
      methods:{
        chosenSelection (index) {
          this.nowIndex = index
          this.$emit('on-change', this.selections[index])
        }
      }
    }
</script>

<style scoped>
.chooser-list{
  display: flex;
  flex: 1;
  flex-direction: row;
}
  .chooser-component{
    width: 70px;
    height: 25px;
    margin: 10px;
    /*background: aqua;*/
    border: 1px solid #e3e3e3;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
  }
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
