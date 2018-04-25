import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// const article = () => import(/* webpackChunkName: "article" */ '../components/ArticleManege')
const article = () => import('../components/ArticleManege')
const news = () => import('../components/NewsManege')

/**
 * component: require('@/components/LandingPage').default
 * 自动生成的默认加载组件方式
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/index').default
    },
    {
      path: '/news',
      name: 'news-page',
      component: () => import('../components/NewsManege')
    },
    {
      path: '/article',
      name: 'article-page',
      component: () => import('../components/ArticleManege')
    },
    {
      path: '/lp',
      name: 'lp-page',
      component:  require('@/components/LandingPage.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
