<template>
    <div class="box">
        <div class="sbox">
            <BottomNav>
                <bottom-nav-item>
                    <img  @click="a" slot="p" src="./img/加号.svg" style="height: 50px;cursor: pointer">
                </bottom-nav-item>
            </BottomNav>
            <TimeMessage ref="TimeMessage"></TimeMessage>
            <TimeMessage2></TimeMessage2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timeyl",
        components: {BottomNav,BottomNavItem,TimeMessage,TimeMessage2},

        methods:{
            a(){
                this.$refs.TimeMessage.popBox();
            }
        }
    }
    import BottomNav from '../../../components/BottomNav'
    import BottomNavItem from "../../../components/BottomNavItem"

    import TimeMessage from './TimeMessage'
    import TimeMessage2 from './TimeMessage2'
</script>

<style scoped>

</style>