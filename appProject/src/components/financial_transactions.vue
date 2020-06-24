<template>
  <div class="financial_transactions">
    <div class="ft_head">
      <div class="ft_head_title">理财产品</div>
      <div>
        <van-search
          v-bind:value="value"
          shape="round"
          background="#9400D3"
          placeholder="请输入搜索关键词"
          @change="searchChange"
        />
      </div>
    </div>
    <div class="ft_body">
      <div v-for="(product,index) in products" :key="index">
        <van-cell :title="product.name"  size="large" :label="product.description" is-link @click="toDetail(product.name,product.productId)"/>
      </div>
    </div>
    <div class="ft_foot">
      <div class="ft_foot_title">
        快速投资
      </div>
      <div class="ft_foot_body">
        <van-row gutter="20">
          <van-col span="10">
            <div class="product_box" @click="toDetail">
              <p>{{products[0].name}}</p>
              <p style="color:red">收益率20%以上</p>
            </div>
          </van-col>
          <van-col span="10">
            <div class ="product_box">
              <p>代客理财产品B</p>
              <p style="color:red">收益率40%以上</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import products_details from "./products_details";
  import axios from "axios";
  export default {
    name: 'financial_transactions',
    // components:{
    //   products_details,
    // },
    data(){
      return{
        value: '',
        active:1,
        products:[
          {
            productId:1,
            name:'代客理财产品A',
            description: '期望收益20%起',
            profit: '20%',
          },
          {
            productId:2,
            name:'代客理财产品B',
            description: '期望收益40%起',
            profit: '40%',
          }
        ]
      }
    },
    created(){
      axios.get('http://123.57.46.173:9003/product/selectProductAll').then(res=>{
        console.log(res.data.data.data[0])
        res.data.data.data.forEach(element => {
          console.log(element.name)
          this.products.push(element)
        });
      }).catch(function(error){

      })
    },
    methods:{
      searchChange(e){
        console.log(e.value)
      },
      toDetail(name,id){
        console.log(name);
        this.$router.push({name:'products_details',params:{productName:name,productId:id}});
      }
    }
  }
</script>

<style>

  .ft_head{
    width: 100%;
    height:  15vh;
    background:#9400D3;
  }

  .ft_head_title{
    font-size: 3vh;
    color: white;
    padding-left: 1vw;
    margin-bottom: 5vw;
  }

  .ft_body{
    margin-bottom: 5vw;
  }

  .ft_foot{
    width: 100%;
    height: 20vh;
    background: white;
    padding-left: 4vw;
  }

  .ft_foot_title{
    margin-bottom: 5vw;
  }

  .product_box{
    font-size: 2vh;
    text-align: center;
    border: 1px solid gray;
  }
</style>
