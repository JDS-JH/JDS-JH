<template>
    <div class="box">
        <div class="sbox">
            <div class="font-img">
                <p>{{name}}</p>
                <ul>
                    <li v-for="(imgs,index) in listObj">
                        <img :src=imgs.url alt="这是图片">
                    </li>
                </ul>
                <h5>--more--</h5>
            </div>
        </div>

                   <div class="sbox-two" style="margin-bottom: 80px">
                       <div class="font-img">
                           <p>{{name2}}</p>
                       <ul>
                           <li v-for="(imgs,index) in listObj2">
                               <img :src=imgs.url alt="这是图片">
                           </li>
                       </ul>
                           <h5>--more--</h5>
                       </div>
               </div>
    </div>
</template>

<script>
    export default {
        name: "Timezp",
        props:{
            name:{
                type:String,
                default:'JDS'
            },
            name2:{
                type:String,
                default:'JDS2'
            },
        },
        data(){
            return {
                listObj:[
                    {url: require("../TimePicture/钢铁侠1(1).jpg")},
                    {url: require("../TimePicture/钢铁侠1(2).jpg")},
                    {url: require("../TimePicture/钢铁侠1(3).jpg")},
                    {url: require("../TimePicture/钢铁侠1(4).jpg")},

                ],
                listObj2:[
                    {url: require("../TimePicture/钢铁侠1(5).jpg")},
                    {url: require("../TimePicture/钢铁侠1(6).jpg")},
                    {url: require("../TimePicture/钢铁侠1(7).jpg")},
                    {url: require("../TimePicture/钢铁侠1(8).jpg")},
                ]
            }
        },
    }
</script>

<style scoped>
    .box{
        background-color: white;
    }
    .sbox,.sbox-two{
        width: 310px;
        height: 230px;
        /* border: 1px solid red;*/
        box-shadow: 2px 2px 10px 2px gainsboro;
        margin: 10px  auto;
    }
    .sbox{
        margin-top: 80px;
    }
    .box ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .box img{
        width: 130px;
        height: 80px;
        border-radius: 15px;
        padding-top: 5px;
    }
    .box ul li{
        list-style: none;
    }
    .font-img{
        margin: 20px;
    }
    h5{
        color: deepskyblue;
        margin-left: 200px;
    }
</style>