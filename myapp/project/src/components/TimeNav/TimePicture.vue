<template>
    <div class="img">
        <img src="../../assets/img/书籍唯美图1.jpg">
        <div class="img2">
            <div class="box">
                <iframe frameborder="no"  border="0" marginwidth="0" marginheight="0" width=280 height=86 src="//music.163.com/outchain/player?type=2&id=25642119&auto=1&height=66"></iframe>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TimePicture",
    }
</script>

<style scoped>
.img img:nth-child(1){
    width: 100%;
    height: 200px;
    position: relative;
}
    .img{
       text-align: center;
    }
    .box iframe{
        width: 69%;
        height: 100px;
        border: white 2px solid;
        background-color: white;
        position: absolute;
        left: 16%;
        margin-top: -60px;
        border-radius: 20px;
        box-shadow: 0 7px 3px gray;

    }
</style>