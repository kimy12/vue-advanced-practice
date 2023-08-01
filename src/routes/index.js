import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes:[
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url주소
      path: '/news',
      name: 'news',
      //component: url 주소로 갔을 때 표시될 컴포넌트
      component:NewsView,
    },
    {
      path: '/ask',
      name: 'ask',
      component : AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component : JobsView,
    },
    {
      path: '/user/:id',
      component : UserView,
    },
    {
      path: '/item/:id',
      component : ItemView,
    }
  ]
});

// 네비게이션 가드 
// 귀찮아서 그냥 해당 에러 eslint 꺼버림
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  store.commit('startSpinner');
  setTimeout(() => {
      next();
  }, 1000);
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  store.commit('endSpinner');
});




