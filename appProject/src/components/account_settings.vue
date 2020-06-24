<template>
  <div class="account_settings">
    <div class="navBar">
      <van-icon name="arrow-left" />
      <span>账户设置</span>
    </div>
    <div class="to_bank_card">
      <el-avatar  :src="circleUrl"></el-avatar>
      <div>
        <span>架兔</span>
        <span>tuzi123</span>
      </div>
      <span>未绑卡</span>
    </div>
    <div class="membership">
      <span>会员身份</span>
      <span>普通会员</span>
    </div>
    <div class="a_settings_content">
      <div class="a_settings_inline">
        <span>密码管理</span>
        <span>包含手势密码、指纹密码等</span>
        <van-icon name="arrow" class="arrowVan" />
      </div>
      <div class="a_settings_inline">
        <span>安全保护问题</span>
        <span>包含手势密码、指纹密码等</span>
        <van-icon name="arrow"class="arrowVan"  />
      </div>
      <div class="a_settings_inline">
        <span>手机令牌</span>
        <span>包含手势密码、指纹密码等</span>
        <van-icon name="arrow"class="arrowVan"  />
      </div>
      <div class="a_settings_inline">
        <span>风险承受能力评估</span>
        <span>保守型(默认)主动评估更准确</span>
        <van-icon name="arrow"class="arrowVan"  />
      </div>

    </div>
    <van-button type="primary" size="large">大号按钮</van-button>
  </div>
</template>

<script>
  export default {
    name: 'account_settings',
    data(){
      return{
        active:2,
        circleUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
      }
    },
  }
</script>

<style scoped>
  .account_settings{
    background: #EEEFEF;
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
  .a_settings_inline{
    background: #fff;
    width: 100vw;
    height: 8vh;
    font-size: 3.5vw;
    box-sizing: border-box;
    padding: 1vh 3vw;
    border-bottom: 1px solid #F6F8F9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color:#B0BBBF;
    position:relative;
  }
  .a_settings_inline:nth-of-type(4){
    margin: 2vh 0;
  }
  .arrowVan{
    position: absolute;
    right: 0;
    top:4vh;
    transform: translate(0,-50%);
  }
  .a_settings_inline>span:last-of-type{
    color: #8BA0A9;
  }
  .to_bank_card{
    background: #fff;
    width: 100vw;
    border-bottom: 1px solid #F6F8F9;
    box-sizing: border-box;
    padding: 1vh 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .to_bank_card>div{
    margin: 0 3vw;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .membership{
    box-sizing: border-box;
    padding: 0 3vw;
    background:#fff;
    font-size: 2vw;
    line-height: 8vw;
    height:8vw;
    margin-bottom: 3vh;
  }
  .membership>span:last-child{
    color: #39a9ed;
    display: inline-block;
    padding: 0 2vw;
  }
</style>
