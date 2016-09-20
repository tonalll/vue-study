

<template>

<div>
    button页面id:{{id}}</div>

</template>

<script>

export default {
    name: 'Button',
    data() {
        return {
            id: 111
        }
    },
    route: {
        data({
            to
        }) {
            console.info(to.params.id);
            // console.info(this);
            this.id = to.params.id;
        }
    }
}

</script>
