<template>
    <div class="box">
        <div id="popLayer" ></div>
        <div id="popBox" style="border-radius: 10px">
            <div class="close" >
                <a @click="closeBox">X</a>
            </div>
            <div class="con1">
                    <div class="form-group">
                        <label for="exampleInputEmail1" style="margin-top: 30px;margin-left: 30px">姓名</label>
                        <input  type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入姓名">
                    </div>
                    <label for="a" style="margin-left: 30px">想说的话</label>
                    <input class="form-control" placeholder="想说的话" id='a' style="height: 100px;width: 250px" >
                    <button @click="closeBox();tj()" style="margin-left: 100px" type="submit" class="btn btn-default">提交</button>
            </div>
        </div>
        <CTime ref="CTime"/>
    </div>
</template>

<script>
    import CTime from '../../../components/CTime/CTime'
    export default {
        name: "TimeMessage",
        components: {CTime},
        methods: {
            closeBox() {
                var popBox = document.getElementById("popBox");
                var popLayer = document.getElementById("popLayer");
                popBox.style.display = "none";
                popLayer.style.display = "none";
            },
            popBox() {
                var popBox = document.getElementById("popBox");
                var popLayer = document.getElementById("popLayer");
                popBox.style.display = "block";
                popLayer.style.display = "block";
                console.log('aaaa')
            },
        tj(){
            var mz=document.getElementById('exampleInputEmail1').value;
            var p=document.createElement('p');
            p.innerText=mz+':';
            if(p.innerText==":"){
                p.innerText='一位不愿意透露姓名的大哥'
            }
            var yl=document.getElementById('a').value;
            var li=document.createElement('li');
            var a=10;
            li.style.paddingTop=a+'px';
            li.innerHTML="<p style='margin: 0px'>"+p.innerText+"</p>"+yl+"<p style='color: gray;font-size: 10px'>"+ this.$refs.CTime.dateFormat()+"</span>";
            li.style.listStyle='none';
            li.style.color='black';
            li.style.fontSize=20+'px';
            document.getElementById('myul').appendChild(li);


        },
    }
}
</script>

<style scoped>

    #popLayer {
        display: none;
        background-color: #B3B3B3;
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        -moz-opacity: 0.8;
        opacity:.80;
        filter: alpha(opacity=80);/* 只支持IE6、7、8、9 */
    }

    /*弹出层*/
    #popBox {
        display: none;
        background-color: #FFFFFF;
        z-index: 11;
        width: 250px;
        height: 280px;
        position:fixed;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin:auto;
    }

    #popBox .close{
        text-align: right;
        margin-right: 5px;
        background-color: #F8F8F8;
    }

    /*关闭按钮*/
    #popBox .close a {
        text-decoration: none;
        color: #2D2C3B;
    }
</style>