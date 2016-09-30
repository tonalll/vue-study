<style lang="css">



</style>

<template>

<div class="l-col" :class="[
'l-col-'+width,
margin ? 'l-col-margin-' + margin : '',
left ? 'l-col-left-' + left : '',
right?'l-col-right-'+right:'',
]" :style="style">
    <slot></slot>
</div>

</template>

<script>

export default {
    props: {
        width: String,
        margin: Number,
        left: Number,
        right: Number,
    },
    data() {
        return {}
    },
    computed: {
        space() {
                return this.$parent.space
            },
            style() {
                var tmpObj={};
                // console.info(this);
                // console.info('----------------'+this.$parent.space);
                if (this.space) {
                    tmpObj.paddingLeft = this.space / 2 + 'px';
                    tmpObj.paddingRight = tmpObj.paddingLeft;
                }
                // console.info(this);
                return tmpObj;
            }
    },
    ready() {},
    attached() {},
    methods: {},
    components: {}
}

</script>
