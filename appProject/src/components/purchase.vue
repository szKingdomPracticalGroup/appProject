<template>
  <div class="financial_transactions">
    <van-nav-bar
        title="购买"
        left-text="转入产品B"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-cell title="转入金额(元)" value="" />
      <van-cell label="理财有风险，投资需谨慎" size="large" icon="refund-o">
        <template #title>
          <van-field
            readonly
            clickable
            :value="value"
            @touchstart.native.stop="show = true"
          />
        </template>
      </van-cell>
      <van-button type="primary" block color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="moneyInto">确认转入</van-button>
    </van-cell-group>
    
    <van-number-keyboard
      v-model="value"
      :show="show"
      :maxlength="6"
      @blur="show = false"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    name: 'financial_transactions',
    data(){
      return{
        active:2,
        show:false,
        value:''
      }
    },
    methods:{
        onClickLeft() {
          Toast('返回');
        },
        moneyInto(){
          Toast.success('转入成功！');
          
        },
    }
  }
</script>

<style>

</style>
