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
                this.scroll.refresh();
            }
        },
        mounted(){
            this.$nextTick(()=>{//为了确保DOM已经渲染
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        pullUpLoad:this.pullUpLoad,
                        probeType:3,
                        scrollY:true
                    });
                    this.scroll.on('pullingUp',()=>{
                        // console.log("上拉加载更多");
                        this.$emit('pullingUp');
                    })
                }
                else {
                    this.scroll.refresh()
                }
            })

            //监听上拉事件

        },

    }
</script>

<style scoped>

</style>