# vue-study
----------------------------创建组件构造器----------------------------
var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
})
----------------------------注册或获取全局组件----------------------------
// 注册组件，传入一个扩展的构造器
Vue.component('my-component', MyComponent)
Vue.component('my-component', Vue.extend({ /* ... */}))

注册组件，传入一个选项对象（自动调用 Vue.extend）
Vue.component('my-component', { /* ... */ })

获取注册的组件（始终返回构造器）
var MyComponent = Vue.component('my-component')
----------------------------props----------------------------
值为字符串时候可以不加“:”
