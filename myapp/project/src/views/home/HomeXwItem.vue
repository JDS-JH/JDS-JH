<template>
    <div class="box2">
    <img :src="xwItem.thumbnail_pic_s" style="height:200px;width:200px" @load="imageLoad">
    <div>
        <p>{{xwItem.title}}</P>
        <span class="author-name">{{xwItem.author_name}}</span>
        <span class="date">{{xwItem.date}}</span>
        <a :href="xwItem.url+'.html'">详情</a>
    </div>
    </div>
</template>

<script>
    export default {
        name: "HomeXwItem",
        props:{
            xwItem:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        methods:{
            imageLoad(){
                this.$bus.$emit("imageLoad")

            }
        }

        }

</script>

<style scoped>
.box2{
    width:50%;
}

</style>