<style lang="css">



</style>

<template>

<div class="l-col" :class="[
'l-col-'+width,
margin ? 'l-col-margin-' + margin : '',
left ? 'l-col-left-' + left : '',
right?'l-col-right-'+right:'',
]">
    <slot></slot>
</div>

</template>

<script>

export default {
    props: {
        width: Number,
        margin: Number,
        left: Number,
        right: Number,
    },
    data() {
        return {}
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
}

</script>
