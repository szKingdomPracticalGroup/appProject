<template>
  <div class="products_details">
    <div class="navBar">
      <van-icon name="arrow-left" />
      <span>产品详情</span>
      <span>惊喜奖励</span>
    </div>

    <div class="details_introduce">
      <span>{{products.name}}</span>
      <span>期望年化收益率</span>
      <span>{{products.shouyilv}}</span>
    </div>
    <div class="details_pay">
      <div>
        <span>投资期限</span>
        <p>{{products.qixian}}</p>
      </div>
      <div></div>
      <div>
        <span>起投金额</span>
        <p>{{products.qitoujine}}</p>
      </div>
    </div>
    <div class="labels">
      <div v-for="(label,index) in products.labels">
        <div class="label">{{label}}</div>
      </div>
    </div>
    <div class="details_content">
      <div class="details_inline">
        <span>项目编号</span>
        <span>{{products.xiangmubianhao}}</span>
      </div>
      <div class="details_inline">
        <span>产品管理资金</span>
        <span></span>
      </div>
      <div class="details_inline">
        <span>收益方式</span>
        <span></span>
      </div>
      <div class="details_inline">
        <span>转出</span>
        <span></span>
      </div>
      <div class="details_structure">
        <p>产品结构</p>
        <div id="myChart" :style="{width: '90vw', height: '40vw'}"></div>
      </div>
    </div>
    <div class="details_safe_grade">
      <p>
        <span>安全等级参考</span>
        <span>(内部评级,仅供参考)</span>
      </p>
      <van-rate v-model="products.safe_grade" />
    </div>
    <div class="details_conditions">
      <p>投资人条件</p>
      <span>{{products.conditions}}</span>
    </div>
    <div class="details_agreements">
      <p>相关协议</p>
      <p>定向委托投资标的说明</p>
      <p>风险提示函</p>
      <p>交易说明书</p>
      <p>免责说明</p>
      <p>平台免责声明</p>
      <p>温馨提示，以上文件可能较大，建议您在wifi环境下浏览</p>
    </div>
    <div class="details_deal">
      <van-field
        v-model="price"
        center
        clearable
        label="投资金额"
        placeholder="单位:元"
      >
        <template #button>
          <van-button size="small" type="primary">立即投资</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: "products_details",
    data() {                   //所有页面上需要的数据都在此声明
      return {
        price:'',
        products: {
          id:2,
          name: '攻守兼备组合B',
          // strategyid: 2,
          // consultantid: 1,
          // riskType: "中",
          // stockamount: null,
          // fundamount: null,
          // status: null,
          // createdtime: null,
          // updatedtime: null,
          // updatedconsultant: null,
          project_number: '100202',
          shouyilv:'30.00%',
          qixian:'698天(30天可转)',
          qitoujine:'50000元',
          labels:['可转出','可变现'],
          xiangmubianhao:170213145,
          chanpinguanli:'13000000元',
          shouyifangshi:'一次性分配',
          chanchu:'申请转出后7日内到账',
          conditions:'风险承受能力平衡型及以上',
          safe_grade:4
        }

      }
    },
    mounted() {
      this.drawProportion()
    },
    methods: {
      toFinancial() {
        console.log('...')
      },
      showMoreMenu() {
        console.log('...')
      },
      drawProportion() {
        console.log(this.$echarts)
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          legend: {
            right: -0,
            orient: 'vertical',
            data: ['中小盘', '债券', '大盘', '货币']
          },
          tooltip:{
            trigger:'item',
            formatter: "{d}%"
          },
          series: [{
            type: 'pie',
            // clockwise: 'true',
            // startAngle: '0',
            // radius: '60%',
            // center: ['50%', '50%'],
            data: [
              {
                value: 20,
                name: '中小盘',

              }, {
                value: 45,
                name: '债券'
              }, {
                value: 25,
                name: '大盘'
              }, {
                value: 10,
                name: '货币'
              }
            ]
          }]
        })
      },
      jumpToPurchase(){
        //如果已经登录，跳转到购买页面
        console.log("我想跳到购买页面")
        this.$router.push({name:'purchase',params:{id:'参数'}});
        //如果没有登录，跳转到登录页面
      }
    }
  }
</script>

<style scoped>
  .products_details{
     background: #EEEFEF;

  }
  .navBar{
    box-sizing: border-box;
    padding: 0 1vw;
    background: #fff;
    font-size: 3vh;
    height: 7vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navBar>span:last-of-type{
    font-size: 3vw;
    color:#8585F5
  }
  .details_introduce{
    height: 20vh;
    background: #8585F5;
    color:#B5B6FB;
    display: grid;
    grid-template-rows: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    font-size: 1.7vh;
  }

  .details_introduce>span:last-of-type{
    color:#fff;
    font-size: 3.5vh;
  }
  .details_pay{
    height: 10vh;
    background: #fff;
    display: grid;
    grid-template-columns: 10fr 1fr 10fr;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
  .details_pay>div:nth-child(2){
    background: #B5B6FB;
    height: 9vh;
    width: .1vw;
  }
  .labels{
    height: 10vh;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2vh 0;
  }
  .label{
    margin:0 2vw;
    background: #728FFF;
    text-align: center;
    height:4vh;
    line-height: 3.2vh;
    font-size: 2vh;
    display: inline-block;
    color:#fff;
    box-sizing: border-box;
    padding: 0.4vh 2vw;
    border-radius: 5px;
  }
  .details_inline{
    background: #fff;
    width: 100vw;
    height: 8vh;
    font-size: 3.5vw;
    box-sizing: border-box;
    padding: 1vh 3vw;
    border-bottom: 1px solid #F6F8F9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#B0BBBF
  }
  .details_inline>span:last-of-type{
    color: #8BA0A9;
  }
  .details_structure{
    width: 100vw;
    background: #fff;
    padding: 1vh 3vw;
    color:#B0BBBF;
    height: 60vw;
  }
  .details_safe_grade{
    margin: 2vh 0;
    background: #fff;
    box-sizing: border-box;
    width: 100vw;
    padding: 0.4vh 2vw;
  }
  .details_safe_grade>p{
    color:#B0BBBF;
    font-size: 4vw;
  }
  .details_conditions{
    margin: 2vh 0;
    background: #fff;
    box-sizing: border-box;
    width: 100vw;
    padding: 0.4vh 2vw;
  }
  .details_conditions>p{
    color:#B0BBBF;
    font-size: 4vw;
  }
  .details_conditions>span{
    color:#8097A3;
    font-size: 3vw;
  }
  .details_agreements{
    height: 30vh;
    background: #fff;
    box-sizing: border-box;
    width: 100vw;
    padding: 0.4vh 2vw;
    margin-bottom: 1vh;
  }
  .details_agreements>p:first-child{
    color:#B0BBBF;
    font-size: 4vw;
  }
  .details_agreements>p{
    cursor: pointer;
    color:#99DCFA;
    font-size: 2vw;
  }
  .details_agreements>p:last-child{
    font-size: 1.5vw;
    color:#B0BBBF
  }
  .details_deal{
    height: 20vh;
  }
</style>
