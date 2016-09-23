console.info('--首页');
import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import App from './components/App.vue'
import Button from './components/Button.vue'
import Default from './components/Default.vue'
import Example from './components/Example.vue'
import Filter from './filter/filter'

Vue.component('hello', Hello);
new Vue({
    el: '#hello'
});

Vue.use(Router)
var router = new Router()

//路由规则
router.map({
    '/button/:id': {
        component: Button
    },
    '/default': {
        component: Default
    },
    '/example': {
        component: Example
    }
})

router.redirect({
  '*': '/default'
})
//启动一个启用了路由的应用。创建一个 App 的实例并且挂载到元素 el
router.start(App, '#app')
