<template>
  <div class="me">
    <div class="me_head">
        <van-row>
          <van-col span="4" offset="2">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10" offset="2">
            <p style="color:white">总资产（元）</p>
            <p style="color:white">{{totalAssets}}</p>
          </van-col>
          <van-col span="10">
            <p style="color:white">昨日收益（元）</p>
            <p style="color:white">{{yesterdayProfit}}</p>
          </van-col>
        </van-row>
    </div>
    <div class="main_operation">
      <van-row>
          <van-col span="10" offset="3">
            <van-button plain hairline type="info" @click="jumpToSendInto">转入</van-button>
          </van-col>
          <van-col span="9" offset="2">
            <van-button plain hairline type="info" @click="jumpToTakeMoneyOut">转出</van-button>
          </van-col>
        </van-row>
    </div>
    <div>
      <van-cell title="账户设置" is-link @click="jumpAccountSetting"/>
    </div>
    <div>
      <van-cell title="交易明细" is-link @click="jumpTransactionDetail"/>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'financial_transactions',
    data(){
      return{
        active:2,
        totalAssets:0.0,
        yesterdayProfit:0.0
      }
    },
    methods: {
      jumpAccountSetting(){
        console.log("跳转到账户设置")
      },
      jumpTransactionDetail(){
        console.log("跳转到交易明细")
      },
      jumpToSendInto(){
        this.$router.push({name:'send_into',params:{}});
      },
      jumpToTakeMoneyOut(){
        this.$router.push({name:'take_money_out',params:{}});
      }
    },
  }
</script>

<style>
  .me_head{
    padding-top:2vw;
    background: #9400D3;
  }

  .main_operation{
    margin-top: 3vw;
    margin-bottom: 3vw;
  }
</style>
