<style media="screen">

.x-example .l-row {
    border: 1px solid #fff;
    margin: 1rem 0;
}

.x-example .l-row .l-col {
    border: 1px solid #fff;
}

.x-example .l-row .l-col .x-con {
    background: #eee;
    padding: 1rem 0;
}

</style>

<template>

<div>
    <div>例子---</div>
    <Sxbd></Sxbd>
    <For></For>
    <Jssx></Jssx>
    <div>布局组件---</div>
    <div class="x-example">

      <div>单选---</div>
<m-radio name='name1' zdy='zdy---' value=1>单选</m-radio>
<m-radio name='name1' zdy='zdy---' value=2>单选</m-radio>

<br>
<div>

        基本布局
        <row>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>
            </l-col>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>

            </l-col>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>

            </l-col>
        </row>
        等padding间距布局
        <row :space=10>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>

            </l-col>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>

            </l-col>
            <l-col width=4>
                <div class="x-con">
                    123 | abc | 北京
                </div>

            </l-col>
        </row>
        等margin间距布局
        <row :space=10>
            <l-col width=3 :margin=3>
                <div class="x-con">
                    123 | abc | 北京
                </div>
            </l-col>
            <l-col width=3 :margin=3>
                <div class="x-con">
                    123 | abc | 北京
                </div>
        </row>
        相对定位left间距布局
        <row :space=10>
            <l-col width=3 :left=3>
                <div class="x-con">
                    123 | abc | 北京
                </div>
            </l-col>
            <l-col width=3 :left=6>
                <div class="x-con">
                    123 | abc | 北京
                </div>
        </row>

        相对定位right间距布局
        <row :space=10>
            <l-col width=3 :right=1>
                <div class="x-con">
                    123 | abc | 北京
                </div>
            </l-col>
            <l-col width=3 :right=0>
                <div class="x-con">
                    123 | abc | 北京
                </div>
        </row>
        <div>按钮---</div>
        <row :space=10>
          <l-col width=2>
            <m-button>按钮</m-button>
          </l-col>
        </row>
    </div>
</div>
</div>

</template>

<script>

import Sxbd from './Sxbd.vue'
import For from './For.vue'
import Jssx from './Jssx.vue'
import row from './row.vue'
import lCol from './col.vue'
import mButton from './button.vue'
import radio from './radio.vue'
export default {
  props:{
  },
  data(){
    return{
      parent:'333---',

    }
  },
    components: {
        Sxbd: Sxbd,
        For: For,
        Jssx: Jssx,
        row,
        lCol,
        mButton,
        'm-radio':radio
    },
    ready(){
      // this.labela=10;
      // console.info(this.labela);
    }
}

</script>
