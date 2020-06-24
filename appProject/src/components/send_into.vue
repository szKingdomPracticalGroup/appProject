<template>
  <div class="send_into">
    <van-nav-bar
        title="转入"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-cell-group>
        <van-cell :title="bankType" :center="true">
            <van-icon :name="img" size="3em" slot="icon"/>
        </van-cell>
    </van-cell-group>
    <van-cell-group>
        <van-field
            :value="moneyValue"
            placeholder="请输入转入金额"
            :border="true"
            bind:change="onChange"
        >
            <p slot="label" class="input_money_label">￥</p>
        </van-field>
    </van-cell-group>
    <div class="button_bottom">
        <van-button type="primary" size="large" color="#4169E1">确认转入</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    name: 'financial_transactions',
    data(){
      return{
        active:2,
        bankType:"中国建设银行",
        moneyValue:"",
        img:require('../assets/CBC.png')
      }
    },
    methods:{
        onClickLeft() {
          Toast('返回');
        },
    }
  }
</script>

<style>
    .button_bottom{
        margin-top:5vw;
    }

    .input_money_label{
        font-size:5vw;
        display: inline;
        text-align: center;
    }
</style>