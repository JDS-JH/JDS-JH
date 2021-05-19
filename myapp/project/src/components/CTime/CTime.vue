<template>

</template>

<script>
    export default {
        name: "CTime",
        mounted(){
            if(this.timer){
                clearInterval(this.timer)
            }else {
                this.timer=setInterval(()=>{
                    this.dateFormat()
                },1000)
            }
        },
        methods:{
            dateFormat () {
                var date = new Date()
                var year = date.getFullYear();
                var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                return "在"+year+"年"+month+"月"+day+"日"+" "+hours+":"+minutes;
            }


    },
    }
</script>

<style scoped>

</style>