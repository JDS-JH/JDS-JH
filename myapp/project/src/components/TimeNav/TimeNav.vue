
<template>
    <div class="nav">
        <h1 @click="backTo" style="padding-left: 34px;"><</h1>
        <ul>
            <li v-for="(item,index) in titles"  :class="{active: index === currentIndex}" @click="button(index)">
                <router-link :to="{name: item.iid2,params:{iid:item.iid2}}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "TimeNav",
        data(){
            return{
                currentIndex:0,
                titles:[
                    {name:"照片",iid2:"zp"},
                    {name:"语录",iid2:"yl"},
                    {name:"故事",iid2:"gs"}
                ]
            }
        },

        methods:{
            button(index){
                this.currentIndex=index;
                /*this.$emit('TimeNavClick',index)*/
            },
            backTo(){
                this.$router.push('/Home')
            }
        }
    }
</script>

<style scoped>
    .nav{
        margin-top: 5px;
    }
    .nav ul li{
        text-decoration: none;
        font-size: 20px;
        list-style: none;
        cursor: pointer;
        color: black;
    }
    .nav ul{
        display: flex;
        justify-content: space-around;
    }
    .active{
        border-bottom: 3px solid black;
    }
</style>