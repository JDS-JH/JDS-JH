<template>
    <div>

        <TimeNav></TimeNav>
        <TimePicture></TimePicture>
        <keep-alive>
        <router-view/>
        </keep-alive>
<!--        <Timezp ref="zp" v-if="type==='zp'"></Timezp>
        <Timeyl ref="yl" v-else-if="type==='yl'"></Timeyl>
        <Timegs ref="gs" v-else="type==='gs'"></Timegs>-->

    </div>
</template>

<script>
    export default {
        name: "Time",
        data(){
          return{
                type:'zp',
          }
        },
        components: {Timegs, Timeyl, Timezp, TimePicture, TimeNav},
        methods:{
/*            TimeNavClick(index){
                switch (index) {
                    case 0:
                        this.type='zp';
                        break;
                    case 1:
                        this.type='yl';
                        break;
                    case 2:
                        this.type='gs';
                        break;
                }
            }*/
        },
/*        activated: function () {
            console.log(3)
        },
        deactivated: function () {
            console.log(4)
        }*/
    }
    import TimeNav from '../../components/TimeNav/TimeNav'
    import TimePicture from '../../components/TimeNav/TimePicture'

    import Timezp from './Timezp/Timezp'
    import Timeyl from './Timeyl/Timeyl'
    import Timegs from './Timegs/Timegs'
</script>

<style scoped>

</style>