<template>
    <div class="nav">
        <div id="name">J H</div>
        <MyDw></MyDw>
        <MyTx></MyTx>
        <div id="tp">
            <div id="bgzd" style="background-color: black;height: 185px;width: 100%;opacity: 30%;position: absolute;z-index: 1"></div>
            <div id="ys"> <img src="../MyImg/原神.png" alt="" style="height: 185px;width: 100%;"></div>
        </div>
        <h1 @click="backTo" style="padding-left: 34px;"><</h1>
        <div id="xg"><img src="../MyImg/修改.svg"></div>
        <div id="sz"><img src="../MyImg/设置.svg" alt=""></div>
    </div>
</template>

<script>
    import MyDw from "./MyDw";
    import MyTx from './MyTx';
    export default {
        name: "MyNav",
        components: {MyTx, MyDw},
        methods:{
            backTo(){
                this.$router.go(-1);  // 返回上一个路由
            }
        }
    }
</script>

<style scoped>
#tp{
    clip-path:polygon(0 0,0 100%,100% 50%,100% 0%);
    background-color:white;
}
    #tp{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 186px;
    }

    #sz,#xg{
        position: absolute;
        height: 40px;
        width: 40px;
        z-index: 2;
    }
    .nav{
        position: absolute;
    }
    #sz{
        right: 6px;
        top: 10px;
    }
    #xg{
        right: 10px;
        top: 63px;
        background: gray;
        border-radius: 50%;
        text-align: center;
        height: 40px;
        width: 40px;
    }
    .nav h1{
        position: absolute;
        top: 0px;
        left: 0px;
        color: white;
        z-index: 2;
    }
    #name{
        position: absolute;
        color: white;
        font-size: 20px;
        left: 10%;
        top:30%;
        font-weight: bolder;
        z-index: 2;
    }
</style>