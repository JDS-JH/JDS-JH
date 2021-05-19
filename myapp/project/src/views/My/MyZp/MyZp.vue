<template>
    <div class="box">
        <p>我的照片</p>
    <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li v-for="(imgs,index) in imgUrl">
                    <img :src=imgs.url alt="这是图片">
                </li>
            </ul>
    </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "MyZp",
        mounted(){
            this.$nextTick(()=>{//为了确保DOM已经渲染
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        scrollX:true
                    });
                }
                else {
                    this.scroll.refresh()
                }
            })
        },
        data(){
            return{
                imgUrl:[
                    {url:require("./img/美国队长 (1).jpg")},
                    {url:require("./img/美国队长 (2).jpg")},
                    {url:require("./img/美国队长 (3).jpg")},
                    {url:require("./img/美国队长 (4).jpg")},
                    {url:require("./img/美国队长 (5).jpg")},
                    {url:require("./img/美国队长 (6).jpg")},
                    {url:require("./img/美国队长 (7).jpg")},
                    {url:require("./img/美国队长 (8).jpg")}
                ]
            }
        }
    }
</script>

<style scoped>
    .box p{
        position: absolute;
        top: 245px;
        font-size: 17px;
        font-weight: bolder;

    }
    .wrapper{
        width: 100%;
        height: 100px;
        position: relative;
        top: 270px;
        overflow: hidden;
    }
    .content{
        position: absolute;
        width: 1100px;
    }
    .wrapper ul{
        display: flex;
        justify-content: space-between;
    }
.content img{
    width: 130px;
    height: 90px;
    border-radius: 10px;
}
    .content li{
        float: left;
        list-style: none;
    }
</style>