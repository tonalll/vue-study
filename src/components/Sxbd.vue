<style lang="css">



</style>

<template>

<div class="">
    <h4>双向绑定</h4>
    <input type="text" name="name" v-model='message'> {{message}}
</div>

</template>

<script>

export default {
    data() {
            return {
                message: '默认值'
            }
        },
        computed: {},
        ready() {},
        attached() {},
        methods: {},
        components: {}
}

</script>
