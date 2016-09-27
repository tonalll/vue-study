<style media="screen" lang='stylus'>

@import '../base.styl'

</style>

<template>

<div>
    <div>app</div>
    <Hello></Hello>
    <Display></Display>
    <Increment></Increment>
    <div>
        <!-- <a v-link="{ path: 'button' }">按钮</a> -->
        <a v-link="{ path: '/button/2'}">按钮</a>
        <a v-link="{ path: '/default/2' }">default</a>
        <a v-link="{ path: '/example' }">实例</a>
    </div>
    <router-view keep-alive transition transition-mode="out-in">
    </router-view>
</div>

</template>

<script>

import Display from './Display.vue'
import Increment from './Increment.vue'
import store from '../vuex/store'
import Hello from './Hello.vue'
export default {
    components: {
        Display: Display,
        Increment: Increment,
        Hello:Hello
    },
    store: store
}

</script>
