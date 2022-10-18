<template>
  <div class="copyright">
    <span>©2022 美团版权所有</span>
    <span><a href="#">京ICP证070791号</a></span>
    <span><a href="#">京ICP备10211739号-1</a></span>
    <div><a href="#">广播电视节目制作经营许可证（京）字第03889号</a></div>
    <div><a href="#">互联网药品信息服务资格证 (京)-经营性-2017-0014</a></div>
    <div><a href="#">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a></div>
    <div><a href="#">平台EDI许可证</a></div>
    <div><a href="#">药品医疗器械网络信息服务备案编号：</a></div>
    <div class="special"><a href="#"><img src="../assets/imgs/jinghui.jpg" alt="警徽"> 京公网安备 11000002002052号</a></div>
    <div><a href="#"><img class="aboutimg1" src="../assets/imgs/beianxinxi.jpg" alt="备案信息"></a></div>
    <div><a href="#"><img class="aboutimg2" src="../assets/imgs/lusetongdao.jpg" alt="绿色通道"></a></div>
    <span class="conpany"><img class="zhizhaoimg" src="../assets/imgs/zhizhao.jpg" alt="电子营业执照"><a href="#">北京三快科技有限公司</a></span>
    
  </div>
</template>

<script>
export default {
    name:'CopyrightInfo',
    setup(){
        return {

        }
    }
}
</script>

<style scoped>
.copyright{
    width: 1200px;
    height: 130px;
    margin: 0 auto;
    padding:20px;
    position: relative;
}

span,a{
    color:rgb(153,153,153);
}

a:hover{
    color:rgb(253,140,80);
}

span{
    margin-right: 20px;
}

span,div{
    margin-top: 5px;
    margin-bottom: 5px;
}

.special{
    position: absolute;
    top: 20px;
    right: 20px;
}

.aboutimg1,.aboutimg2{
    width: 110px;
    height: 30px;
    position: absolute;
    top: 50px;
    right: 20px;
}

.aboutimg1{
    right: 135px;
}

.conpany{
    position: absolute;
    top: 35px;
    right: 250px;
}

.zhizhaoimg{
    width: 30px;
    height: 30px;
    position: relative;
    top: 10px;
}
</style>