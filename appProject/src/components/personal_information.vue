<template>
  <div class="personal_information">
    <div class="navBar">
      <van-icon name="arrow-left" />
      <span>个人信息</span>
    </div>
    <div class="inline_avator">
      <span>安全头像</span>
      <el-avatar  :src="circleUrl"></el-avatar>
      <van-icon name="arrow" class="arrow_right" />
    </div>
    <div class="p_information_content">
      <div class="p_information_inline">
        <span>用户名</span>
        <span>fuzi123</span>

      </div>
      <div class="p_information_inline">
        <span>手机号码</span>
        <span>182****12323</span>
      </div>
      <div class="p_information_inline">
        <span>实名认证</span>
        <span>包含手势密码、指纹密码等</span>
      </div>
      <div class="p_information_inline">
        <span>我的银行卡</span>
        <span>保守型(默认)主动评估更准确</span>
        <van-icon name="arrow" class="arrow_right" />

      </div>
      <div class="p_information_inline">
        <span>我的地址</span>
        <span>保守型(默认)主动评估更准确</span>
        <van-icon name="arrow" class="arrow_right" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personal_information',
    data(){
      return{
        circleUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
      }
    },
  }
</script>

<style>
  .personal_information{
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
  .p_information_inline{
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
  .p_information_inline>span:last-child{
    text-align: end;
  }
  .p_information_inline>span:first-child{
    font-size: 4vw;
  }
  .inline_avator{
    background: #fff;
    width: 100vw;
    height: 8vh;
    box-sizing: border-box;
    padding: 1vh 3vw;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    color:#B0BBBF;
    margin-bottom: 10vw;
    position:relative;
  }
  .arrow_right{
    position: absolute;
    right: 0;
    top: 4vh;
    transform: translate(-50%,-50%);
    color:#000;
  }
</style>
