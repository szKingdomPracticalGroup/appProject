<template>
  <div class="home_page">
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="div_box">
      <p>快速投资</p>
      <div class=div_products>
        <div>
          <span>代客理财产品A</span>
          <span>以上3.9%</span>
        </div>
        <div>
          <span>代客理财产品B</span>
          <span>以上3.9%</span>
        </div>
      </div>

    </div>
    <div class="div_box">
       <p>最新资讯</p>
      <div class="news_item" v-for="(newsItem,index) in newsList">
        <div >
          <p>{{newsItem.title}}</p>
          <span>{{newsItem.introduce}}</span>
        </div>
        <img :src="newsItem.imgUrl"/>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'home_page',
    data(){
      return{
        active:1,
        newsList:[{
          title:'哈哈',
          introduce:'本文纯属搞笑//////////////////////////',
          imgUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
        },{
          title:'哈哈',
          introduce:'本文纯属搞笑',
          imgUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
        },{
          title:'哈哈',
          introduce:'本文纯属搞笑',
          imgUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
        },{
          title:'哈哈',
          introduce:'本文纯属搞笑',
          imgUrl:'https://wx3.sinaimg.cn/mw690/006u4EYvgy1g57vflayufj30u00vmn4v.jpg'
        }]
      }
    },
    methods:{
      handleClick(){
        console.log('财富管理被点了一下！');
        this.$router.push({name:'me',params:{id:'参数'}});
        this.$store.commit('setActiveTabbar',2)
      },
      jumpToProduct(e){
        console.log(e);
        this.$router.push({name:'financial_transactions',params:{id:'参数'}});
      },
      jumpToDetail(e){
        this.$router.push({name:'products_details',params:{}});
      }
    }
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .home_page{
    background: #EEEFEF;
    height: 100vh;
  }
  .swipe{
    height: 20vh;
    width: 100vw;
  }
  .div_box{
    background: #fff;
    box-sizing: border-box;
    width: 100vw;
    padding: .4vh 3vw;
    margin-bottom: 3vh;
  }
  .div_box>p{
    font-size: 1.8vh;
    font-weight: 500;
  }
  .div_products{
    width: 94vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .div_products>div{
    width: 40vw;
    height: 8vh;
    border: .4vw solid #F6F8FA;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
   .div_products>div>span:last-child{
    color: #F49477;
  }
  .news_item{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 94vw;
    height: 10vh;
    display: flex;
    margin-bottom: 1vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0 1vh 3vw;
    overflow:hidden;text-overflow:ellipsis;
  }
  .news_item>div>span{
     color:#B0BBBF;
  }
  .news_item>div{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .news_item>img{
    height: 10vh;
  }
</style>
