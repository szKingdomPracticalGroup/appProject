<template>
  <div class="transaction_details">
    <div class="navBar">
      <van-icon name="arrow-left" />
      <span>交易明细</span>
    </div>
    <p>123232131</p>
    <div class="transaction_details_content">
      <div class="trend_date">
        <div v-for="(trend,index) in trends" :key='index'>
          <span>{{trend.title}}</span>
        </div>
      </div>
      <div class="product_value">
        <span>2020/06/20-2020/06/21</span>
        <div>
          <div>
            <p>总股票市值</p>
            <span>--</span>
          </div>
          <div>
            <p>总基金价值</p>
            <span>--</span>
          </div>
        </div>
      </div>
      <div class="details_records">
        <div v-if="detailsList.length===0">
          <img  src="../assets/timer.png" />
          没有查询到符合条件的明细记录
        </div>
        <div v-if="detailsList.length!==0" >
          <div v-for="(detailItem,index) in detailsList">
            <div class="detail_item">
             <div class="detail_item_left">
               <div >
                 <span>{{detailItem.week}}</span>
                 <div class="small_circle" :style="{background:detailItem.type==='stoke'?'red':'green'}"></div>
               </div>
               <span>{{detailItem.date}}</span>
             </div>
              <div class="detail_item_content">
                <span>{{detailItem.type==='stoke'?`股票代码`:'基金代码'}}</span>
                <span>{{detailItem.code}}</span>
                <span>操作类型</span>
                <span>{{detailItem.optionType}}</span>
                <span>金额</span>
                <span>{{detailItem.price}}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'transaction_details',
    data(){
      return{
        trends: [{
          title: '近1个月',
          value: '30',
        }, {
          title: '近3月',
          value: '90'
        }, {
          title: '近6月',
          value: '180'
        }, {
          title: '近1年'
        }],
        detailsList:[{
          week:'周一',
          date:'2020/06/20',
          type:'stoke',
          code:'SZ000001',
          optionType:'买入/卖出',
          price:50000
        },{
          week:'周一',
          date:'2020/06/20',
          type:'fund',
          code:'SZ000002',
          optionType:'买入/卖出',
          price:50000
        }],
      }
    },
  }
</script>

<style>
  .transaction_details{
    background:#EEEFEF ;
    height: 100vh;
  }
  .navBar{
    box-sizing: border-box;
    padding: 0 1vw;
    background:#F8F8F7;
    font-size: 3vh;
    height: 7vh;
    width: 100vw;
    display:grid;
    grid-template-columns: 1fr 1.6fr;
    align-items: center;
  }
  .trend_date {
    background: #fff;
    width: 100vw;
    height: 5vh;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
  }
  .trend_date > div {
    border: .1vw solid #DEDEDE;
    border-bottom: .1vw solid #FFF;
    width: 100%;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
  }

  .trend_date > div:first-of-type {
    border-left: .1vw solid #FFF;
  }
  .transaction_details_content{
    background: #fff;
    height: 80vh;
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
    align-items: center;
  }
  .product_value{
    border:.2vw solid black;
    height: 15vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 1vh 2vw;

  }
  .product_value>div{
    height: 10vh;

    width: 96vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .product_value>div>div{
    width: 48vw;
    height: 8vh;
    box-sizing: border-box;
    padding: 0vh 0 2vh 4vw;

  }
  .product_value>div>div:first-child{
    border-right: .2vw solid #E5E5E5;
  }
  .details_records>div:first-child{

    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .details_records>div>img{
    width: 45vw;
    margin-bottom: 3vh;
  }
  .detail_item{

    width: 100vw;
    display: flex;
    font-size: 3vw;
    border: .2vw solid black;

    box-sizing: border-box;
  }

  .detail_item_left{

    width: 40vw;
    height: 13vh;
    box-sizing: border-box;
    padding: 1.5vh 4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  .small_circle{
    width: 2vw;
    height: 2vw;
    border-radius: 1vw;
  }
  .detail_item_left>div{
    width: 30vw;
    /*background: red;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .detail_item_content{
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-template-rows: repeat(3,33.3%);
    justify-items: flex-start;
    align-items: center;
  }
</style>
