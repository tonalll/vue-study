<style lang="css">



</style>

<template lang="html">

<span class="" v-for='item in arr' @click='click'>
        {{item}},
</span>
</div>

</template>

<script>

export default {
    data() {
        return {
            arr: ['a', 'b', 'c']
        }
    },
    created:()=>{
      // console.info(this)
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
      click:(a)=>{
        console.info(a);
      }
    },
    components: {}
}

</script>
