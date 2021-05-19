<template>
    <div class="tip">
        <div class="front">
        <img src="../../assets/img/越前龙马.jpg">
        <p>网球王子：越前龙马</p>
        <h1>Echizen Ryoma</h1>
        </div>
        <div class="back">
        <img src="../../assets/img/手冢国光.jpg">
        <p>网球王子：手冢国光</p>
        <h1>Kunimitsu Tezuka</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeTip"
    }
</script>

<style scoped>
    .tip{
        width: 75%;
        height: 100px;
        border-radius: 3%;
        margin-top: -20px;
        border: 1px white solid;
        position: relative;
        margin-left: 13%;
        box-shadow: 4px 4px 7px gainsboro;
        transform-style:preserve-3d;
        animation: fz2 2s cubic-bezier(0,0,1,1) forwards;

    }
.tip img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;

}
.front{
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
}
.back{
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;

}
    .front p{
        position: absolute;
        left: 80px;
        top: 20px;
    }
    .front h1{
        font-size: 17px;
        position: absolute;
        left: 125px;
        top: 50px;
    }
    .back p{
        position: absolute;
        left: 80px;
        top: 20px;
    }
    .back h1{
        font-size: 17px;
        position: absolute;
        left: 125px;
        top: 50px;
    }
    .tip:hover{
        animation: fz 2s cubic-bezier(0,0,1,1) forwards ;
    }
.back{
    transform:rotateY(180deg);
}

    @keyframes fz{
        0%{
            transform: rotateY(0deg);
        }
        100%{
            transform: rotateY(180deg);
        }
    }
    @keyframes fz2{
        0%{
            transform: rotateY(180deg);
        }
        100%{
            transform: rotateY(0);
        }
    }
</style>