<template>
<div class="box">
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
    <MyNav/>
    <MyZp/>
    <MyGn/>
    <MyJg/>
</div>

</template>

<script>

   import MyNav from './MyNav/MyNav'
   import MyZp from './MyZp/MyZp'
   import MyGn from './MyGn/MyGn'
   import MyJg from './MyJg/MyJg'
   import BottomNav from "../../components/BottomNav"
   import BottomNavItem from "../../components/BottomNavItem"

   export default {
        name: "My",
        components: {MyJg, MyGn, MyZp, MyNav,BottomNavItem,BottomNav},
    }
</script>

<style scoped>

</style>