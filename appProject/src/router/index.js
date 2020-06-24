import Vue from 'vue'
import Router from 'vue-router'
import home_page from '@/components/home_page'
import financial_transactions from '@/components/financial_transactions'
import me from '@/components/me'
import products_details from '@/components/products_details'
import login from '@/components/login'
import purchase from '@/components/purchase'
import account_settings from '@/components/account_settings'
import personal_information from "../components/personal_information"
import transaction_details from "../components/transaction_details";
import send_into from '@/components/send_into'
import take_money_out from '@/components/take_money_out'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'home_page',
    component: home_page,
    meta:{
      isLogin: false,//访问对应路径是否需要登录
      realLogin: false//是不是登录或注册页面
    }
    },
    {
      path: '/home_page',
      name: 'home_page',
      component: home_page,
      meta:{
        isLogin: false,
        realLogin: false
      }
    },
    {
      path: '/financial_transactions',
      name: 'financial_transactions',
      component: financial_transactions,
      meta:{
        isLogin: false,
        realLogin: false
      }
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      meta:{
        isLogin: false,
        realLogin: false
      }
    },
    {
      path: '/products_details',
      name: 'products_details',
      component: products_details,
      meta:{
        isLogin: false,
        realLogin: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        isLogin: false,
        realLogin: true
      }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: purchase,
      meta:{
        isLogin: true,
        realLogin: false
      }
    },
    {
      path: '/send_into',
      name: 'send_into',
      component: send_into,
      meta:{
        isLogin: true,
        realLogin: false
      }
    },
    {
      path: '/take_money_out',
      name: 'take_money_out',
      component: take_money_out,
      meta:{
        isLogin: true,
        realLogin: false
      }
    },{
      path: '/account_settings',
      name: 'account_settings',
      component: account_settings,
      meta:{
        isLogin: true,
        realLogin: false
      }
    },{
      path: '/personal_information',
      name: 'personal_information',
      component: personal_information,
      meta:{
        isLogin: true,
        realLogin: false
      }
    },{
      path: '/transaction_details',
      name: 'transaction_details',
      component: transaction_details,
      meta:{
        isLogin: true,
        realLogin: false
      }
    }
  ]
})
