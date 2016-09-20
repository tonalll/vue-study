

<template>

<div>
    <button @click='increment'>------加1</button>
    <button @click='jian'>------减1</button>
</div>

</template>

<script>
import {incrementCounter,jian} from '../vuex/actions'
export default {
  vuex:{
    actions:{
      increment:incrementCounter,
      jian:jian,
    }
  }
}

</script>
