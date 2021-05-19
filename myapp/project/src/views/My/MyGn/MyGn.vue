<template>
    <div class="box">
            <ul class="box2" style="cursor: pointer" >
                    <li v-for="(Url,index) in imgUrl" @click="link(index)">
                        <router-link :to="{name: Url.iid2,params:{iid: Url.iid2}}">
                    <img ref="img" :src=Url.url>
                    <p style="margin-left: 35px;margin-top: -10px">{{Url.name}}</p>
                        </router-link>
                </li>

            </ul>
    </div>
</template>

<script>
    export default {
        name: "MyGn",
        data(){
            return{
                imgUrl:[
                    {url:require("./img/任务.svg"),name:"任务",iid2:"rw"},
                    {url:require("./img/打卡.svg"),name:"打卡",iid2:'dk'},
                    {url:require("./img/历史.svg"),name:"历史",iid2:'ls'},
                    {url:require("./img/签到.svg"),name:"签到",iid2:'qd'},
                    {url:require("./img/客服.svg"),name:"客服",iid2:'kf'},
                    {url:require("./img/钱包.svg"),name:"钱包",iid2:'qb'},
                ]
            }
        },
        methods:{
            link(index){
            switch (index) {
                case 0:
                    console.log('a');

                    break;
                case 1:
                    console.log('aa');
                    break;
                case 2:
                    console.log('aaa');
                    break;
                case 3:
                    console.log('aaaa');
                    break;
                     }
            },
        }
    }
</script>

<style scoped>
.box{
    position: relative;
    top: 280px;

}
.box img{
    height: 45px;
    width: 45px;
    margin: 29px;
}
    .box2{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        height: 250px;
        width: 100%;
        box-shadow: -3px  -1px 15px -3px  gray ;
    }
    .box li{
        list-style: none;
    }
</style>