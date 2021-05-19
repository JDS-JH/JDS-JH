import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path:'',
        redirect:'/Home',
        component: () => import('../views/home/Home.vue')
    },
  {
    path: '/Home',
    name: 'Home',
      component: () => import('../views/home/Home.vue')
  },
  {
    path: '/Time',
    name: 'Time',
    component: () => import('../views/Time/Time.vue'),
      meta:{
        keepAlive:true
      },
      children:[
          {
              path:'',
              redirect:'Time/zp',
              component: () => import('../views/Time/Timezp/Timezp.vue')
          },
          {
              path:'Time/:iid',
              name:'zp',
              component: () => import('../views/Time/Timezp/Timezp.vue')
          },
          {
              path: 'Time/:iid',
              name: 'yl',
              component: () => import('../views/Time/Timeyl/Timeyl.vue')
          },
          {
              path: 'Time/:iid',
              name: 'gs',
              component: () => import('../views/Time/Timegs/Timegs.vue')
          }
  ]
  },
    {
        path: '/My',
        name: 'My',
        component: () => import('../views/My/My.vue'),
        children:[
            {
                path:'My/:iid',
                name:'qd',
                component: () => import('../views/My/MyQd.vue')
            },
            {
                path:'My/:iid',
                name:'ls',
                component: () => import('../views/My/MyLs.vue')
            }
        ],

    },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
