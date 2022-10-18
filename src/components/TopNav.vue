<template>
  <div class="topnav">
    <div class="nav">
      <div class="left">
        <span
          ><i class="iconfont">&#xe65e;</i
          ><a href="#" class="rgula">北京</a></span
        >
        <span
          ><a
            href="#"
            class="rgula"
            style="
              border: 1px solid rgb(229, 229, 229);
              border-radius: 3px;
              background-color: rgb(244, 244, 244);
            "
            >切换城市</a
          ></span
        >
        <div>
          <ul>
            <li><a href="#" class="rgula">门头沟区</a></li>
            <li><a href="#" class="rgula">廊坊</a></li>
            <li><a href="#" class="rgula">大厂回族自治县</a></li>
          </ul>
        </div>
        <span><a href="#" class="rgula" style="color:rgb(254,140,0)">立即登录</a></span>
        <span><a href="#" class="rgula">注册</a></span>
      </div>
      <div class="right">
        <ul>
          <li>
            <a href="#" class="rgula" @mouseenter="inMyMt">我的美团</a>
          </li>
          <li><a href="#" class="rgula">手机App</a></li>
          <li><a href="#" class="rgula" @mouseenter="inBsnCtr">商家中心</a></li>
          <li><a href="#" class="rgula" @mouseenter="inRules">美团规则</a></li>
          <li><a href="#" class="rgula" @mouseenter="inWebNav">网站导航</a></li>
          <li><a href="#" class="rgula">药品信息</a></li>
        </ul>
      </div>
      <ul v-if="$store.state.showMyMt" class="ulmymt" @mouseleave="outmyejcd">
        <li><a href="#">我的美团</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">我的收藏</a></li>
        <li><a href="#">抵用券</a></li>
        <li><a href="#">账户设置</a></li>
      </ul>
      <div
        class="bsncenter"
        v-if="$store.state.showbsnCenter"
        @mouseleave="outBsnCtr"
      >
        <div class="bsntitle">商家中心</div>
        <ul class="ulbsncenter" @mouseleave="outbsnCenter">
          <li><a href="#">美团餐饮商户中心</a></li>
          <li><a href="#">登录商家中心</a></li>
          <li><a href="#">美团智能收银</a></li>
          <li><a href="#">我想合作</a></li>
          <li><a href="#">手机免费开店</a></li>
          <li><a href="#">到店综合业务招募</a></li>
          <li><a href="#">餐饮合作商招募</a></li>
          <li><a href="#">商家申请开票</a></li>
          <li><a href="#">免费合作美团排队</a></li>
        </ul>
      </div>
      <div class="mtrules" v-if="$store.state.showRules">
        <ul class="ulrules" @mouseleave="outRules">
          <li><a href="#">美团规则</a></li>
          <li><a href="#">规则中心</a></li>
          <li><a href="#">规则目录</a></li>
          <li><a href="#">规则评议员</a></li>
        </ul>
      </div>
      
      <div class="webnav" v-if="$store.state.showWebNav" @mouseleave="outWebNav">
        <div class="title">网站导航</div>
        <div class="details">
          <div class="hoteltravel">
            <span>酒店旅游</span>
            <div class="travelcontainer">
              <div><a href="#">国际机票</a></div>
              <div><a href="#">火车票</a></div>
              <div><a href="#">民宿</a></div>
              <div><a href="#">经济型酒店</a></div>
              <div><a href="#">主题酒店</a></div>
              <div><a href="#">商务酒店</a></div>
              <div><a href="#">公寓</a></div>
              <div><a href="#">豪华酒店</a></div>
              <div><a href="#">客栈</a></div>
              <div><a href="#">青年旅社</a></div>
              <div><a href="#">度假酒店</a></div>
              <div><a href="#">别墅</a></div>
              <div><a href="#">农家院</a></div>
            </div>
          </div>
          <div class="food">
            <span>吃美食</span>
            <div class="foodcontainer">
              <div><a href="#">烤鱼</a></div>
              <div><a href="#">特色小吃</a></div>
              <div><a href="#">烧烤</a></div>
              <div><a href="#">自助餐</a></div>
              <div><a href="#">火锅</a></div>
              <div><a href="#">代金券</a></div>
            </div>
          </div>
          <div class="movie">
            <span>看电影</span>
            <div class="moviecontainer">
              <div><a href="#">热映电影</a></div>
              <div><a href="#">热门影院</a></div>
              <div><a href="#">热映电影口碑榜</a></div>
              <div><a href="#">最受期待电影</a></div>
              <div><a href="#">国内票房榜</a></div>
              <div><a href="#">北美票房榜</a></div>
              <div><a href="#">电影排行榜</a></div>
            </div>
          </div>
          <div class="phoneapp">
            <span>手机应用</span>
            <div class="appcontainer">
              <span
                ><a href="#"
                  ><img
                    class="appimg"
                    src="../assets/imgs/appimg1.jpg"
                    alt="" /></a
              ></span>
              <span
                ><a href="#"
                  ><img
                    class="appimg"
                    src="../assets/imgs/appimg2.jpg"
                    alt="" /></a
              ></span>
              <span
                ><a href="#"
                  ><img
                    class="appimg"
                    src="../assets/imgs/appimg3.jpg"
                    alt="" /></a
              ></span>
              <span
                ><a href="#"
                  ><img
                    class="appimg"
                    src="../assets/imgs/appimg4.jpg"
                    alt="" /></a
              ></span>
              <span
                ><a href="#"
                  ><img
                    class="appimg"
                    src="../assets/imgs/appimg5.jpg"
                    alt="" /></a
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toptwo">
      <img class="iconimg" src="../assets/imgs/logo.png" alt="美团图标" />
      <input class="topinput" type="text" placeholder="搜索商家或地点" />
      <span class="insearch"
        ><img class="searchimg" src="../assets/imgs/search.png" alt="搜索"
      /></span>
      <ul class="topthree">
        <li><a href="#" class="threea">美团外卖</a></li>
        <li><a href="#" class="threea">猫眼电影</a></li>
        <li><a href="#" class="threea">美团酒店</a></li>
        <li><a href="#" class="threea">民宿 / 公寓</a></li>
        <li><a href="#" class="threea">商家入驻</a></li>
        <li><a href="#" class="threea">美团公益</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "TopNav",
  setup() {
    const store = useStore();

    function inMyMt() {
      store.commit("INMYMT");
    }

    function outmyejcd() {
      store.commit("OUTMTEJCD");
    }

    function inBsnCtr() {
      store.commit("INBSNCTR");
    }

    function outBsnCtr() {
      store.commit("OUTBSNCTR");
    }

    function inRules() {
      store.commit("INRULES");
    }

    function outRules() {
      store.commit("OUTRULES");
    }

    function inWebNav(){
      store.commit("INWEBNAV");
    }

    function outWebNav(){
      store.commit("OUTWEBNAV");
    }
    return { inMyMt, outmyejcd, inBsnCtr, outBsnCtr, inRules, outRules,inWebNav,outWebNav };
  },
};
</script>

<style scoped>
.topnav {
  position: relative;
  height: 197px;
  font-size: 1.33rem;
  background-color: #fff;
  box-shadow: 0 5px 30px rgb(234, 234, 234);
}

.nav {
  height: 40px;
  background-color: rgb(248, 248, 248);
  font-size: 12px;
  position: relative;
}

.nav .left {
  display: flex;
  float: left;
  margin-left: 150px;
  width: 500px;
  /* font-size: 12px; */
}

.nav .left span,
.nav .left ul li {
  margin-left: 6px;
  margin-right: 6px;
  height: 40px;
  line-height: 40px;
}

.nav .left ul {
  display: flex;
  font-style: 12px;
}

.nav .left ul::before {
  content: "[";
  margin-top: 11px;
  color: rgb(153, 153, 153);
}
.nav .left ul::after {
  content: "]";
  margin-top: 11px;
  color: rgb(153, 153, 153);
}

.nav .right {
  float: right;
  margin-right: 160px;
}

.nav .right ul li {
  width: 78px;
  float: left;
}

.nav .left ul li {
  margin-right: 15px;
}
.nav ul li a {
  height: 40px;
  line-height: 40px;
}

.iconimg {
  width: 126px;
  height: 46px;
}

.rgula {
  color: rgb(153, 153, 153);
}

.rgula:hover {
  color: rgb(254, 140, 0);
}

.toptwo {
  width: 78%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}

.topinput {
  padding-left: 8px;
  height: 38px;
  width: 470px;
  position: absolute;
  left: 320px;
  top: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  border: 1px solid rgb(229, 229, 229);
}

.insearch {
  position: absolute;
  left: 799px;
  background-color: rgb(255, 195, 0);
  width: 80px;
  height: 40px;
  margin-top: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.insearch:hover {
  cursor: pointer;
}
.searchimg {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.topthree {
  display: flex;
  width: 645px;
  height: 21px;
  position: relative;
  left: 270px;
  top: 50px;
  font-weight: 900;
}
.topthree li {
  flex-grow: 1;
}

.topthree li a {
  color: black;
}

.topthree li:nth-child(1) a:hover,
.topthree li:nth-child(4) a:hover {
  color: rgb(252, 199, 0);
}
.topthree li:nth-child(2) a:hover {
  color: rgb(237, 30, 100);
}
.topthree li:nth-child(3) a:hover,
.topthree li:nth-child(6) a:hover {
  color: rgb(240, 77, 78);
}
.topthree li:nth-child(5) a:hover {
  color: rgb(254, 140, 0);
}

.ulmymt {
  position: absolute;
  left: 877px;
  z-index: 1;
  width: 48px;
  padding-left: 14px;
  padding-right: 14px;
  height: 170px;
  margin: 0 !important;
  background-color: #fff;
  outline: 1px solid rgb(229, 229, 229);
}

.ulmymt li {
  width: 48px;
  height: 34px;
  line-height: 34px;
}

.ulmymt li a,
.ulbsncenter li a,
.ulrules li a,
.travelcontainer div a,
.foodcontainer div a,
.moviecontainer div a {
  color: rgb(153, 153, 153);
  font-size: 12px;
}

.ulmymt li a:hover,
.ulbsncenter li a:hover,
.ulrules li a:hover,
.travelcontainer div a:hover,
.foodcontainer div a:hover,
.moviecontainer div a:hover {
  color: rgb(254, 140, 0);
}

.bsncenter {
  background-color: white;
  width: 200px;
  position: absolute;
  left: 1032px;
  z-index: 2;
}

.bsntitle {
  background-color: white;
  border: 1px solid rgb(229, 229, 229);
  border-bottom: none;
  font-size: 12px;
  width: 76px;
  text-align: center;
  position: absolute;
  top: -1px;
  z-index: 4;
  height: 41px;
  line-height: 41px;
}

.ulbsncenter {
  position: absolute;
  background-color: #fff;
  top: 41px;
  left: -28.5px;
  width: 106px;
  z-index: 3;
  outline: 1px solid rgb(229, 229, 229);
}

.ulbsncenter li {
  width: 106px;
  height: 35px;
  text-align: center;
  z-index: 2;
  margin-top: -7px;
}

.ulrules {
  width: 76px;
  background-color: white;
  outline: 1px solid rgb(229, 229, 229);
  position: absolute;
  left: 1111px;
  z-index: 2;
}

.ulrules li {
  width: 76px;
  height: 35px;
  line-height: 35px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
}

.webnav {
  /* width: 1200px;
  height: 293px; */
  /* padding: 30px 36px 36px 47px; */
  z-index: 2;
  position: absolute;
  top: 10px;
  left: 100px;
  
  outline: 1px solid rgb(229, 229, 229);
}

.webnav .title {
  width: 78px;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgb(229, 229, 229);
  border-bottom: none;
  color: #999;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  z-index: 4;
  position: absolute;
  left: 1087.5px;
  top: -11px;
}

.webnav .details{
  width: 1200px;
  height: 293px;
  background-color: white;
  outline: 1px solid rgb(229,229,229);
  z-index: 3;
  position: absolute;
  left: -34px;
  top: 30px;
}

.webnav .hoteltravel {
  width: 350px;
  height: 300px;
  font-size: 14px;
  left: 10px;
  position: absolute;
}

.webnav .hoteltravel span,
.food span,
.movie span,
.phoneapp > span {
  position: absolute;
  font-size: 14px;
  top: 30px;
  left: 50%;
  color: rgb(34, 34, 34);
  transform: translateX(-50%);
}

.travelcontainer,
.foodcontainer,
.moviecontainer,
.appcontainer {
  position: absolute;
  top: 50px;
  width: 350px;
  height: 150px;
  margin-left: -5px;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}

.travelcontainer div,
.foodcontainer div,
.moviecontainer div {
  flex-grow: 1;
  width: 100px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
}

.webnav .food {
  width: 350px;
  height: 300px;
  font-size: 14px;
  color: rgb(34, 34, 34);
  position: absolute;
  left: 320px;
}

.foodcontainer {
  width: 300px;
  height: 70px;
  left: 25px;
}

.webnav .movie {
  width: 200px;
  height: 300px;
  position: absolute;
  left: 650px;
}

.moviecontainer {
  width: 120px;
  left: 40px;
}

.appimg {
  width: 60px;
  height: 60px;
}

.webnav .phoneapp {
  width: 350px;
  height: 280px;
  font-size: 14px;
  color: rgb(34, 34, 34);
  position: absolute;
  left: 830px;
}

.appcontainer {
  top: 80px;
}

.appcontainer span {
  margin-right: 10px;
}
</style>