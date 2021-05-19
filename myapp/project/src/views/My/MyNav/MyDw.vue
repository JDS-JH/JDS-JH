<template>
    <div class="box">
        <div class="out"></div>
        <div class="in">最强王者> 不听不听王八念经</div>
    </div>
</template>

<script>
    export default {
        name: "MyDw"
    }
</script>

<style scoped>
.in{
    position: absolute;
    z-index: 1;
    font-size: 18px;
    color: white;
    font-weight: 300;
}
    .out{
        position: absolute;
        background-color: gainsboro;
        width: 86px;
        height: 30px;
        border-radius: 10px;
        opacity: 30%;
    }
    .in,.out{
        top: 45%;
        left: 10%;
        z-index: 2;
    }
</style>