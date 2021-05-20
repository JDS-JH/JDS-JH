<template>
    <div class="box">
        <HomeXwItem v-for="item in xw" :xwItem="item" />
    </div>
</template>

<script>

    import HomeXwItem from "./HomeXwItem"
    export default {
        name: "HomeXw",
        components:{HomeXwItem},
        props:{
            ls:{
                default(){
                    return []
                }
            },
            xw:{
                default(){
                    return []
                }
            }
        },
    }
</script>

<style scoped>
.box{
    margin-bottom:120px;
    display:flex;
    flex-wrap: wrap;

}

</style>