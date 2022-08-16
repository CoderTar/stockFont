import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/product',
        name: 'productView',
        component: () => import('../views/admin/productView.vue')
      }
      ,
      {
        path: '/settlement',
        name: 'settlementView',
        component: () => import('../views/user/settlementView.vue')
      }
      ,
      {
        path: '/give',
        name: 'giveView',
        component: () => import('../views/user/giveView.vue')
      }
      ,
      {
        path: '/operate',
        name: 'operateView',
        component: () => import('../views/user/operateView.vue')
      }
      ,
      {
        path: '/capital',
        name: 'capitalView',
        component: () => import('../views/user/memberManag/capitalView.vue')
      }
      ,
      {
        path: '/listView',
        name: 'listView',
        component: () => import('../views/user/memberManag/listView.vue')
      },
      {
        path: '/givelog',
        name: 'givelogView',
        component: () => import('../views/user/memberManag/givelogView.vue')
      },
      {
        path: '/entrust',
        name: 'entrustView',
        component: () => import('../views/user/orderManag/entrustView.vue')
      }
      ,
      {
        path: '/position',
        name: 'positionView',
        component: () => import('../views/user/orderManag/positionView.vue')
      }
      ,
      {
        path: '/flatorder',
        name: 'flatorderView',
        component: () => import('../views/user/orderManag/flatorderView.vue')
      }
      ,
      {
        path: '/forceorder',
        name: 'forceorderView',
        component: () => import('../views/user/orderManag/forceorderView.vue')
      }
      ,
      {
        path: '/passMoney',
        name: 'passMoney',
        component: () => import('../views/user/financeManag/passMoney.vue')
      }
      ,
      {
        path: '/userRecharge',
        name: 'userRecharge',
        component: () => import('../views/user/financeManag/userRecharge.vue')
      }
      ,
      {
        path: '/userWithdrawal',
        name: 'userWithdrawal',
        component: () => import('../views/user/financeManag/userWithdrawal.vue')
      },
      {
        path: '/addStock',
        name: 'addStockView',
        component: () => import('../views/user/newstock/addStockView.vue')
      },
      {
        path: '/addBank',
        name: 'addBankView',
        component: () => import('../views/user/bankManag/addBankView.vue')
      },
      {
        path: '/mobile',
        name: 'mobileView',
        component: () => import('../views/admin/systemManage/mobileView.vue')
      },
      {
        path: '/adimage',
        name: 'adimageView',
        component: () => import('../views/admin/systemManage/adimageView.vue')
      }

    ]

  },

  {
    path: '/adminLogin',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


//解决重复路由问题  路由多次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/adminLogin') {
    localStorage.removeItem("Btoken")
    localStorage.removeItem("adminID")

    next();
  } else {
    let token = localStorage.getItem('Btoken');
    if (token === null || token === '') {
      next('/adminLogin');
      // setTimeout('console.clear()', 300)
    } else {
      next();
    }
  }
})


export default router
