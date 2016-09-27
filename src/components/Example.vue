

<template>

<div>
    <div>例子---</div>
    <Sxbd></Sxbd>
    <For></For>
    <Jssx></Jssx>
    <div>布局组件---</div>
    <div class="">

    <row>
        <l-col :width="4">
            123d
        </l-col>
    </row>
  </div>
</div>

</template>

<script>

import Sxbd from './Sxbd.vue'
import For from './For.vue'
import Jssx from './Jssx.vue'
import row from './row.vue'
import col from './col.vue'
export default {
    components: {
        Sxbd: Sxbd,
        For: For,
        Jssx: Jssx,
        row: row,
        'l-col': col,
    }
}

</script>
