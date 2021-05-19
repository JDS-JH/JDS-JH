<template>
        <div class="box">
            <input type="radio" name="control" id="control-1" checked>
            <input type="radio" name="control" id="control-2" style="left: 20px">
            <input type="radio" name="control" id="control-3" style="left: 40px">
            <div class="control-visible">
                <label for="control-1"></label>
                <label for="control-2"></label>
                <label for="control-3"></label>
            </div>

            <div class="box2">
                <img src="../../assets/img/吴彦祖1.jpg" alt="">
                <img src="../../assets/img/吴彦祖2.jpg" alt="">
                <img src="../../assets/img/吴彦祖3.jpg" alt="">
            </div>
        </div>

</template>

<script>
    export default {
        name: "Swipe"
    }
</script>

<style scoped>
.box{
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
}
    .box2{
        height: inherit;
        width: inherit;
    }
    .box2 img{
        position: absolute;
        height: 200px;
        width: 100%;

    }
    .box2 img:nth-child(1){

    }
.box2 img:nth-child(2){
    left: 100%;
}
.box2 img:nth-child(3){
    left: 200%;
}
input[type=radio]{
    position: absolute;
    z-index: 100;
    display: none;
}
.control-visible{
    z-index: 10;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 10px;

}
.control-visible label{
    z-index: 20;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    margin: 0 7px 15px;
    border: 2px solid white;

}

    .box input[type='radio']:nth-of-type(1):checked~
    .control-visible label:nth-of-type(1){
        background-color: black;
    }
.box input[type='radio']:nth-of-type(2):checked~
.control-visible label:nth-of-type(2){
    background-color: black;
}
.box input[type='radio']:nth-of-type(3):checked~
.control-visible label:nth-of-type(3){
    background-color: black;
}
.box input[type='radio']:nth-of-type(1):checked~
.box2{
    transform: translateX(0%);
    transition: .5s;
}
.box input[type='radio']:nth-of-type(2):checked~
.box2{
    transform: translateX(-100%);
    transition: .5s;
}
.box input[type='radio']:nth-of-type(3):checked~
.box2{
    transform: translateX(-200%);
    transition: .5s ease-in-out;
}
</style>