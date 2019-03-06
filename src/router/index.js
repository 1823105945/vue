import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import Detail from '@/page/Detail'
import Analysis from '@/page/detail/Analysis'
import Forecast from '@/page/detail/Forecast'
import Count from '@/page/detail/Count'
import Publish from '@/page/detail/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children:[
        {
          path: 'analysis',
          name: 'Analysis',
          component: Analysis,
        },
        {
          path: 'publish',
          name: 'Publish',
          component: Publish,
        },
        {
          path: 'forecast',
          name: 'Forecast',
          component: Forecast,
        },
        {
          path: 'count',
          name: 'Count',
          component: Count,
        }
      ]
    }
  ]
})
