<template>
    <div class="box">
    <img :src=url style="width: 30px;height: 30px">
        <span>应国家监督要求，使用钱包应上传身份证照...</span>
    </div>
</template>

<script>
    export default {
        name: "MyJg",
    data(){
        return{
            url:require("./感叹号.svg")
        }
    }
    }
</script>

<style scoped>
.box {
    height: 30px;
    width: 100%;
    position: relative;
    top: 280px;
    margin-bottom: 1000px;
    background-color: #f6f8dd;

}
.box span{
    margin-left: 15px;
    margin-top: 2px;
    color: yellow;
    font-size: 14px;
    padding-left: 2px;
}
</style>