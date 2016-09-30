<style lang="css">
.class1{
  background: #888;
}
.class2{
  background: #aaa;
}
.class3{
  background: #ddd;
}


</style>

<template lang="html">

<div class="" v-bind:class="class">
    <input type="text" name="name" v-model='a'>+
    <input type="text" name="name" v-model='b'>=
    <input type="text" name="name" v-model='c'>
</div>

</template>

<script>

export default {
    name: 'Jssx',
    data() {
        return {
            a: 1,
            b: 2,
            c: 3,
            class: {
                class1: false,
                    class2: false,
                    class3: false
            }
        }
    },
    watch: {
        a: function(newVal, oldVal) {
            this.c = Number(newVal) + Number(this.b)
            if(newVal==1) this.class.class1=true;
            if(newVal==2) this.class.class2=true;
            if(newVal==3) this.class.class3=true;
        },
        // b: function(newVal, oldVal) {
        //     // console.info(this)
        //     this.newVal=newVal?newVal:1
        // }
    },
    computed: {
        // a: function() {
          // if(this.a==1) this.class.class1=true;
          // console.info(this.class);
          // return Number(this.a);
            // return Number(this.b);
        // },
        // c: function() {
        //     return Number(this.a) + Number(this.b);
        // }
    },
    ready() {
      // console.info(this)
    },
    attached() {},
    methods: {},
    components: {}
}

</script>
