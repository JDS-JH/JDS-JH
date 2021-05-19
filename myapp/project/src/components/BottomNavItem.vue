<template>
    <div class="bottom-nav-item">
        <div v-if="isActive"><slot name="p2"></slot></div>
        <div v-else><slot name="p"></slot></div>
        <div :style="activeStyle"><slot  name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "BottomNavItem",
        props:{
            path:String,
            styleColor:{
                type:String,
                default:'red'
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1;
            },
            activeStyle(){
                return this.isActive?{ color:this.styleColor}:{}
            }
        },

    }
</script>

<style scoped>
    .bottom-nav-item{
    padding-top: 10px;
    }
    .bottom-nav-item div{
        cursor: pointer;
    }
</style>