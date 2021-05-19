<template>
    <div class="bottomNav">
        <slot></slot>
    </div>
</template>
<style>
    .bottomNav{
        left: 0px;
        right: 0px;
        height: 80px;
        background-color: gainsboro;
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        z-index: 4;

    }
</style>
<script>
    export default {
        name: "BottomNav",
    }

</script>