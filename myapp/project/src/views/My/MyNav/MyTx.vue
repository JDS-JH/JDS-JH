<template>
    <div class="box">
        <div class="box2">
            <div class="outTx">
                <img src="../MyImg/钢铁侠1(6).jpg" alt="">
            </div>
            <div class="info">
                <ul>
                    <li>粉丝
                        <ul>0</ul>
                    </li>
                    <li>收藏
                        <ul>0</ul>
                    </li>
                    <li>动态
                        <ul>0</ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyTx"
    }
</script>

<style scoped>
.outTx img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;

}
    .box2{
        position: absolute;
        z-index: 3;
        top:70%;
        width: 100%;
    }
    .info ul{
        display: flex;
        justify-content: space-around;
    }
    .info li{
        list-style: none;
        font-size: 18px;
    }
    .info{
        margin-top: 26px;
    }
</style>