import router from '../router'
import store from './Storage'

const whiteList = ['/detail/publish']

router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path)!==-1){
    next()
  } else {
    if (store.state.isLogin===true){
      console.log('111');
        next()
    }else {
      console.log('2222');
      // next('/detail/publish')
      next()
    }
  }
})
