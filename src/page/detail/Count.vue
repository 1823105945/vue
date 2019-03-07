<template>
  <div class="count-board">
    <div class="count-board-info">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="count-from">
      <div class="count-from-info">
        <div class="count-board-line-left">产品类型：</div>
        <div class="count-board-line-right">value</div>
      </div>
      <div class="count-from-info">
        <div class="count-board-line-left">地区：</div>
        <div class="count-board-line-right">value</div>
      </div>
      <div class="count-from-info">
        <div class="count-board-line-left">有效时间：</div>
        <div class="count-board-line-right">value</div>
      </div>
      <div class="count-from-info">
        <div class="count-board-line-left">总价：</div>
        <div class="count-board-line-right">value</div>
      </div>
      <div style="height: 60px">
        <div style="cursor: pointer;margin:20px 20px 20px 20px;width: 60%;height: 44px;background-color: aqua;display:flex;justify-content:center;align-items:center;">
          <a>立即购买</a>
        </div>
      </div>
    </div>
    <div class="count-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table class="count-table">
          <tr>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
            <td class="count-line">
              <label>安全安保</label>
            </td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Count"
    }
</script>

<style scoped>
  .count-board {
    background: #fff;
  }
  .count-board-info{
    padding: 0px;
  }
  .count-board-info h2{
    padding: 20px 10px 20px 20px;
    font-size: 20px;
  }
  .count-board-info p{
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .count-from{
    padding: 20px;
  }
  .count-from-info{
    clear: both;
    padding-bottom: 20px;
  }
  .count-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .count-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .count-table{
    width: 100%;
    margin-top: 20px;
  }
  .count-line{
    border:1px solid red;
    text-align: center
  }
  .count-board-des{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .count-board-des h2{
     font-size: 20px;
     padding-bottom: 10px;
   }
  .count-board-des p{
    line-height: 20px;
    color: black;
    background: aquamarine;
    padding: 20px;
  }
</style>
