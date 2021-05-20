<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
    </div>
    </div>
</template>

<script>
    import  BScroll from "better-scroll"
    export default {
        name: "Scroll",
        props:{
            pullUpLoad:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                Scroll:null
            }
        },
        methods:{
            refresh(){

                this.scroll && this.scroll.refresh();
            },
            finishPullUp2(){
                this.scroll && this.scroll.finishPullUp()
            }
        },
        mounted(){
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        pullUpLoad:this.pullUpLoad,
                        probeType:3,
                        scrollY:true
                    });
                    this.scroll.on('pullingUp',()=>{

                        this.$emit('pullingUp');
                        // console.log(this.scroll);
                    })

            //监听上拉事件

        },

    }
</script>

<style scoped>

</style>