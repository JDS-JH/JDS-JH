<template>
    <div class="home">
        <bottom-nav>
            <bottom-nav-item path="/Home">
                <img slot="p" src="../../assets/img/圆圈.svg">
                <img slot="p2" src="../../assets/img/实心圆.svg">
                <div slot="item-text" ><router-link to="/Home"  style="text-decoration: none;color: black">首页</router-link></div>
            </bottom-nav-item>
            <bottom-nav-item path="/Time">
                <img slot="p" src="../../assets/img/五角星.svg">
                <img slot="p2" src="../../assets/img/五角星2.svg">
                <div slot="item-text"><router-link to="/Time"  style="text-decoration: none;color: black">时光</router-link></div>
            </bottom-nav-item>
            <bottom-nav-item path="/My">
                <img slot="p" src="../../assets/img/心.svg">
                <img slot="p2" src="../../assets/img/心2.svg">
                <div slot="item-text">
                    <router-link to="/My" style="text-decoration: none;color: black">我的</router-link>
                </div>
            </bottom-nav-item>
        </bottom-nav>
        <TopNav/>
        <Swipe/>
        <HomeTip/>

        <Scroll @pullingUp="loadMore" class="content" :pull-up-load="true" ref="scroll">
        <HomeXw :ls="ls" :xw="xw"/>
        </Scroll>
        <ul>
            <li>1</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
            <li>21</li>
        </ul>
        
    </div>
</template>

<script>
                var date = new Date()
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                


    import Swipe from '../../components/swipe/Swipe'
    import TopNav from  '../../components/TopNav'

    import HomeTip from './HomeTip'
    import HomeXw from './HomeXw'

    import BottomNav from "../../components/BottomNav"
    import BottomNavItem from "../../components/BottomNavItem"

    import {tiyudata} from "../../network/home"//没有defalt导出就要用括号//
    import {lsdata}  from "../../network/home"

    import Scroll from "../../components/better-scroll/Scroll"
    


        export default {
        name: "Home",
        components: {Scroll,HomeXw, Swipe,HomeTip,TopNav,BottomNav,BottomNavItem},
        data(){
            return{
            ls:[],
            xw:[],
            }
        },
        methods:{
            loadMore(){
                console.log("加载更多");
                // const page=this.xw.page+1;
                // tiyudata(page).then(res=>{
                //     this.xw.data.push(...res.data.result.data)
                //     this.xw.page +=1
                // })
            }
                
        //     getWeather(){
        //     //将域名用/api代替
        //     this.axios.get('/api/toutiao/index?type=top&key=b2d5f763ab9d6032ea061354e0c00fa8',{
        //     }).then(res=>{
        //     console.log(res);
        //     }
        //  )
        //     },

        },
          created() {
            tiyudata(1).then(res=>{
                console.log(res)
                this.xw=res.data.result.data;
            })
            // var date=month+"/"+day;
            // console.log(date)
            // lsdata(date).then(res=>{
            //     console.log(res)
            //     this.ls=res.data.result;
            // })
              //监听homexwitem中的图片加载完成
              this.$bus.$on("itemImgLoad",()=>{
                  console.log("--------------");
                  this.$refs.scroll.refresh()
              })
  }


        // }
        }

</script>

<style scoped>
.content{
    height: 300px;
    overflow: hidden;
}
</style>