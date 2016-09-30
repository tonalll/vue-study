<style lang="css">



</style>

<template lang="html">

<label class="m-radio">
    <span class="m-radio-input" zdy='zdy'>
      <span class="m-radio-input-radio"
         :class="{

         }"
      ></span>

      {{_value}}
<input type="radio" :zdy='zdy' :name="name" class="m-radio-input-input"  v-model='_value' :value='value'>
</span>
<span class="m-radio-label">
  <slot></slot>
</span>
</label>

</template>

<script>

export default {
    name: 'm-radio',
    props: {
      zdy:String,
      name:String,
        value: [Number, String],
        labela: {
            type: [Number, String],
        },
        _value:String
    },
    data() {
        return {
          a:'is a',
          focus:false,
        }
    },
    computed: {
        // _value: {
        //     get() {
        //       // this.labela=33;
        //       console.info(this.value+'-------');
        //       // return 3;
        //             return this.value !== undefined ? this.value : this.$parent.value;
        //         },
        //         set(newValue) {
        //           console.info(newValue);
        //             if (this.value !== undefined) {
        //                 this.$emit('input', newValue);
        //             } else {
        //                 this.$parent.$emit('input', newValue);
        //             }
        //         }
        // }
    },
    ready() {
      // console.info(this.$parent)
    },
    attached() {},
    methods: {
      myinput:function(a,b){
        console.info(this.value);
      }
    },
    components: {}
}

</script>
