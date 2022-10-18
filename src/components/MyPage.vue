<template>
  <div class="page">
    <ul class="leftnav">
      <span class="ultitle">&nbsp;&nbsp;全部分类</span>
      <br /><br />
      <li class="ulli num0">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 130, 0)">&#xe8f8;</i>
        <a href="#" class="ula">美食</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num1">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 181, 0)">&#xe61b;</i>
        <a href="#" class="ula">外卖</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num2">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(155, 94, 62)">&#xe6bc;</i>
        <a href="#" class="oldColor" id="special">酒店</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num3">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 181, 0)">&#xe6bf;</i>
        <a href="#" class="ula">民宿</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num4">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 61, 0)">&#xe8c4;</i>
        <a href="#" class="ula">猫眼电影</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num5">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(3, 169, 244)">&#xe675;</i>
        <a href="#" class="ula">机票</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">火车票</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num6">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(0, 191, 150)">&#xe716;</i>
        <a href="#" class="ula">休闲娱乐</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">KTV</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num7">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(0, 191, 150)">&#xe654;</i>
        <a href="#" class="ula">生活服务</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num8">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 64, 129)">&#xfd65;</i>
        <a href="#" class="ula">丽人</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">美发</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">医学美容</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num9">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 64, 129)">&#xe696;</i>
        <a href="#" class="ula">结婚</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">婚纱摄影</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">婚宴</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num10">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(255, 64, 129)">&#xe611;</i>
        <a href="#" class="ula">亲子</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">儿童乐园</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">幼教</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num11">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(3, 169, 244)">&#xe65d;</i>
        <a href="#" class="ula">运动健身</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">健身中心</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num12">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(0, 191, 150)">&#xf61c;</i>
        <a href="#" class="ula">家装</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">建材</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">家居</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num13">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(0, 191, 150)">&#xe60b;</i>
        <a href="#" class="ula">学习培训</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">音乐培训</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num14">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(3, 169, 244)">&#xe602;</i>
        <a href="#" class="ula">医疗健康</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">宠物</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">爱车</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
      <li class="ulli num15">
        &nbsp;&nbsp;
        <i class="iconfont" style="color: rgb(0, 191, 150)">&#xe68d;</i>
        <a href="#" class="ula">酒吧</a>
        <span class="navspan">/</span>
        <a href="#" class="ula">密室逃脱</a>
        <i class="iconfont liarrow">&#xe655;</i>
      </li>
    </ul>
    <MenuDetail v-cloak v-if="openMenu" :num="num"></MenuDetail>

    <div class="pageright">
      <div
        class="rotationChart"
        @mouseenter="lrbtnShow"
        @mouseleave="lrbtnHide"
      >
        <div class="lunboOptions">
          <div
            class="lbopli opnum0"
            @mouseenter="toShow"
            @mouseleave="endShow"
          ></div>
          <div
            class="lbopli opnum1"
            @mouseenter="toShow"
            @mouseleave="endShow"
          ></div>
          <div
            class="lbopli opnum2"
            @mouseenter="toShow"
            @mouseleave="endShow"
          ></div>
          <div
            class="lbopli opnum3"
            @mouseenter="toShow"
            @mouseleave="endShow"
          ></div>
          <div
            class="lbopli opnum4"
            @mouseenter="toShow"
            @mouseleave="endShow"
          ></div>
        </div>
        <transition
          class="animate__animated"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div class="switchbtn" v-show="lrbtnTrue">
            <div class="lbtn">
              <i class="iconfont" @click="beforeimg">&#xe6af;</i>
            </div>
            <div class="rbtn">
              <i class="iconfont" @click="afterimg">&#xe6ac;</i>
            </div>
          </div>
        </transition>

        <div v-show="cd[0]">
          <a href="#" class="lunbo"
            ><img src="../assets/imgs/lunbo1.jpg" alt="美团官网"
          /></a>
        </div>
        <div v-show="cd[1]">
          <a href="#" class="lunbo"
            ><img src="../assets/imgs/lunbo2.jpg" alt="美团官网"
          /></a>
        </div>
        <div v-show="cd[2]">
          <a href="#" class="lunbo"
            ><img src="../assets/imgs/lunbo3.jpg" alt="美团官网"
          /></a>
        </div>
        <div v-show="cd[3]">
          <a href="#" class="lunbo"
            ><img src="../assets/imgs/lunbo4.jpg" alt="美团官网"
          /></a>
        </div>
        <div v-show="cd[4]">
          <a href="#" class="lunbo"
            ><img src="../assets/imgs/lunbo5.jpg" alt="美团官网"
          /></a>
        </div>
      </div>

      <div class="pageImgs">
        <div>
          <a href="#"
            ><img
              src="../assets/imgs/page1.jpg"
              alt="美团 休闲生活"
              class="xxsh"
          /></a>
        </div>
        <div class="pagelogin">
          <img
            class="logoimg"
            src="../assets/imgs/pagelogo.png"
            alt="美团logo"
          />
          <p
            style="
              font-size: 16px;
              position: absolute;
              top: 100px;
              left: 50%;
              transform: translateX(-50%);
            "
          >
            Hi! 你好
          </p>
          <div class="logIn"><a href="#">立即登录</a></div>
          <div class="signUp"><a href="#">注册</a></div>
        </div>
        <div>
          <a href="#"><img class="zjd" src="../assets/imgs/page2.png" alt="美团酒店" /></a>
        </div>
        <div>
          <a href="#"><img class="zzs" src="../assets/imgs/page3.jpg" alt="美团涨姿势" /></a>
        </div>
        <div>
          <a href="#"><img class="wssj" src="../assets/imgs/page4.jpg" alt="美团商家" /></a>
        </div>
        <div class="qrInfo">
          <img class="qrimg" src="../assets/imgs/QRcode.png" alt="美团二维码">
          <p>美团App手机版</p>
          <span class="qrspan1">1元起</span>
          <span class="qrspan2">吃喝玩乐</span>
        </div>
      </div>
    </div>

    <CatEyeMovie></CatEyeMovie>
    <MinSu></MinSu>
    <RecommendYou></RecommendYou>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, reactive, computed } from "vue";
import { useStore } from "vuex";
import MenuDetail from "./MenuDetail.vue";
import CatEyeMovie from "./CatEyeMovie.vue";
import MinSu from "./MinSu.vue"
import RecommendYou from "./RecommendYou.vue";

export default {
  name: "MyPage",
  components: { MenuDetail, CatEyeMovie, CatEyeMovie ,MinSu,RecommendYou},
  setup() {
    let timeID;
    let num = ref(0);
    let title = ref("");
    let lrbtnTrue = ref(false);
    let cd = reactive([true, false, false, false, false]);

    const store = useStore();

    function showMenu(e) {
      store.dispatch("stateTrue");
      let cn = e.target.className;
      num.value = cn.replace("ulli", "").replace("num", "").trim();
      e.target.style.fontWeight = 900;
      const arrows = document.querySelectorAll(".liarrow");
      if(num.value == 2){
        let special = document.querySelector("#special");
        special.className = 'newColor';
      }
      arrows[num.value].style.color = "rgb(34,34,34)";
    }

    function closeMenu(e) {
      store.dispatch("stateFalse");
      e.target.style.fontWeight = "normal";
      let special = document.querySelector("#special");
      special.className = 'oldColor';
      const arrows = document.querySelectorAll(".liarrow");
      arrows[num.value].style.color = "rgb(191,191,191)";
    }

    function toShow(e) {
      clearInterval(timeID);
      let num = e.target.className;
      num = num.replace("lbopli", "").replace("opnum", "").trim();
      num = Number(num);
      let lboplis = document.querySelectorAll(".lbopli");
      for (let i = 0; i < lboplis.length; i++) {
        lboplis[i].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
      }
      e.target.style.backgroundColor = "rgb(243,243,255)";
      for (let i = 0; i < cd.length; i++) {
        if (i === num) cd[i] = true;
        else cd[i] = false;
      }
    }

    function endShow(e) {
      e.target.style.backgroundColor = "rgb(243,243,255)";
      timeID = setInterval(() => {
        let lboplis = document.querySelectorAll(".lbopli");
        let num;
        for (let i = 0; i < cd.length; i++) {
          if (cd[i]) {
            num = i;
            break;
          }
        }
        for (let i = 0; i < cd.length; i++) {
          cd[i] = false;
          if (i - 1 === num && num != 4) {
            cd[i] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[i].style.backgroundColor = "rgb(243,243,255)";
          } else if (i === 4 && num === 4) {
            cd[i] = false;
            cd[0] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[0].style.backgroundColor = "rgb(243,243,255)";
            break;
          }
        }
      }, 2500);
    }

    function lrbtnShow() {
      lrbtnTrue.value = true;
    }

    function lrbtnHide() {
      lrbtnTrue.value = false;
    }

    function beforeimg() {
      clearInterval(timeID);
      for (let i = 0; i < cd.length; i++) {
        if (cd[i] && i != 0) {
          cd[i] = false;
          cd[i - 1] = true;
          break;
        } else if (cd[0]) {
          cd[0] = false;
          cd[4] = true;
          break;
        }
      }
      let lboplis = document.querySelectorAll(".lbopli");
      for (let i = 0; i < lboplis.length; i++) {
        lboplis[i].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
        if (cd[i]) lboplis[i].style.backgroundColor = "rgb(243,243,255)";
      }
      timeID = setInterval(() => {
        let lboplis = document.querySelectorAll(".lbopli");
        let num;
        for (let i = 0; i < cd.length; i++) {
          if (cd[i]) {
            num = i;
            break;
          }
        }
        for (let i = 0; i < cd.length; i++) {
          cd[i] = false;
          if (i - 1 === num && num != 4) {
            cd[i] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[i].style.backgroundColor = "rgb(243,243,255)";
          } else if (i === 4 && num === 4) {
            cd[i] = false;
            cd[0] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[0].style.backgroundColor = "rgb(243,243,255)";
            break;
          }
        }
      }, 2500);
    }

    function afterimg() {
      clearInterval(timeID);
      for (let i = 0; i < cd.length; i++) {
        if (cd[i] && i != 4) {
          cd[i] = false;
          cd[i + 1] = true;
          break;
        } else if (cd[4]) {
          cd[4] = false;
          cd[0] = true;
          break;
        }
      }
      let lboplis = document.querySelectorAll(".lbopli");
      for (let i = 0; i < lboplis.length; i++) {
        lboplis[i].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
        if (cd[i]) lboplis[i].style.backgroundColor = "rgb(243,243,255)";
      }
      timeID = setInterval(() => {
        let lboplis = document.querySelectorAll(".lbopli");
        let num;
        for (let i = 0; i < cd.length; i++) {
          if (cd[i]) {
            num = i;
            break;
          }
        }
        for (let i = 0; i < cd.length; i++) {
          cd[i] = false;
          if (i - 1 === num && num != 4) {
            cd[i] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[i].style.backgroundColor = "rgb(243,243,255)";
          } else if (i === 4 && num === 4) {
            cd[i] = false;
            cd[0] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[0].style.backgroundColor = "rgb(243,243,255)";
            break;
          }
        }
      }, 2500);
    }

    onMounted(() => {
      const lis = document.querySelectorAll(".ulli");
      for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseenter", showMenu);
        lis[i].addEventListener("mouseleave", closeMenu);
      }

      timeID = setInterval(() => {
        let lboplis = document.querySelectorAll(".lbopli");
        let num;
        for (let i = 0; i < cd.length; i++) {
          if (cd[i]) {
            num = i;
            break;
          }
        }
        for (let i = 0; i < cd.length; i++) {
          cd[i] = false;
          if (i - 1 === num && num != 4) {
            cd[i] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[i].style.backgroundColor = "rgb(243,243,255)";
          } else if (i === 4 && num === 4) {
            cd[i] = false;
            cd[0] = true;
            for (let n = 0; n < lboplis.length; n++) {
              lboplis[n].style.backgroundColor = "rgba(60, 59, 60, 0.2)";
            }
            lboplis[0].style.backgroundColor = "rgb(243,243,255)";
            break;
          }
        }
      }, 2500);
    });

    onBeforeUnmount(() => {
      const lis = document.querySelectorAll(".ulli");
      lis[0].removeEventListener("mouseenter");
      clearInterval(timeID);
    });

    return {
      cd,
      title,
      num,
      lrbtnTrue,
      openMenu: computed(() => store.state.showing),
      toShow,
      endShow,
      lrbtnShow,
      lrbtnHide,
      beforeimg,
      afterimg,
    };
  },
};
</script>

<style scoped>
.iconfont {
  display: inline-block;
  width: 26px;
  cursor: default;
}

.page {
  height: 2423.8px;
  position: relative;
  background-color: rgb(248, 248, 248);
}

.leftnav {
  box-sizing: border-box;
  width: 230px;
  height: 475px;
  margin: 25px 0 0 25px;
  border: 1px solid rgb(229, 229, 229);
  position: absolute;
  top: -70px;
  left: 135px;
  background-color: #fff;
  display: flex;
  z-index: 1;
  flex-direction: column;
}

.ultitle {
  position: relative;
  top: 15px;
  font-size: 16px;
  font-weight: 900;
}

.leftnav li {
  height: 26px;
  flex-grow: 1;
  line-height: 26px;
}

.oldColor::after {
  content: "HOT";
  display: inline-block;
  color:rgb(34,34,34);
  background-color: rgb(255, 243, 204);
  border-radius: 8px;
  padding: 2px;
  left: 8px;
  height: 15px;
  width: 30px;
  line-height: 15px;
  text-align: center;
  position: relative;
}


.newColor,.oldColor{
  font-style: 13px !important;
}
.newColor::after{
  content: "HOT";
  display: inline-block;
  color:rgb(34,34,34);
  background-color: rgb(255,196,0);
  border-radius: 8px;
  padding: 2px;
  left: 8px;
  height: 15px;
  width: 30px;
  line-height: 15px;
  text-align: center;
  position: relative;
}


.leftnav li a {
  color: rgb(100, 100, 100);
  font-weight: inherit;
}

.ula {
  font-style: 13px !important;
}


.leftnav li:hover {
  background-color: rgb(255, 247, 235);
}

.navspan {
  margin: 0 2px 0 2px;
  color: rgb(100, 100, 100);
}

.leftnav .liarrow {
  float: right;
  color: rgb(191, 191, 191);
  font-size: 5px;
  cursor: default;
}

.selected {
  font-weight: 900;
}

.unselected {
  font-weight: normal;
}

.pageright {
  width: 950px;
  height: 415px;
  position: relative;
  left: 400px;
}

.rotationChart {
  width: 550px;
  height: 240px;
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 1;
}

.rotationChart img {
  width: 550px;
  height: 240px;
  object-fit: contain;
}

.lunboOptions {
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
  width: 120px;
  height: 2px;
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translate(-50%, 0);
}

.lbopli {
  width: 15px;
  height: 2px;
  background-color: rgba(60, 59, 60, 0.2);
  border-radius: 5px;
}

.lbopli:nth-child(1) {
  background-color: rgb(243, 243, 255);
}



.pageImgs img {
  object-fit: contain;
  position: absolute;
}

.pageImgs .xxsh {
  width: 150px;
  height: 240px;
  left: 560px;
  top: 10px;
  z-index: 1;
}

.pageImgs .pagelogin {
  width: 230px;
  height: 240px;
  background-color: white;
  border: 1px solid rgb(229, 229, 229);
  position: absolute;
  top: 10px;
  left: 720px;
  z-index: 1;
}

.pageImgs .pagelogin .logoimg {
  position: relative;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  left: 50%;
  top: 10%;
  border: 5px solid rgb(229, 229, 229);
  background-color: rgb(244, 244, 244);
  transform: translateX(-50%);
}

.logIn,
.signUp {
  width: 118px;
  height: 38px;
  line-height: 38px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  border-radius: 30px;
  text-align: center;
  border: 1px solid rgb(229, 229, 229);
}

.logIn {
  background-color: rgb(255, 193, 0);
  top: 130px;
}
.signUp {
  background-color: white;
  top: 185px;
}

.logIn a, .signUp a{
  color: black;
}

.pageImgs .zjd {
  width: 270px;
  height: 165px;
  position: absolute;
  top: 260px;
  left: 0;
}

.pageImgs .zzs {
  width: 270px;
  height: 165px;
  position: absolute;
  top: 260px;
  left: 280px;
}

.pageImgs .wssj {
  width: 150px;
  height: 165px;
  position: absolute;
  top: 260px;
  left: 560px;
}

.pageImgs .qrInfo {
  width: 230px;
  height: 167px;
  position: absolute;
  top: 260px;
  left: 720px;
  background-color: #fff;
  border: 1px solid rgb(229, 229, 229);
}

.pageImgs .qrInfo .qrimg{
  width: 95px;
  height: 95px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.qrInfo p{
  font-size: 16px;
   position: absolute;
  left: 50%;
  top: 105px;
  transform: translateX(-50%);
}

.qrInfo .qrspan1,.qrInfo .qrspan2{
  font-size: 12px;
  position: absolute;
  top: 125px;
}

.qrInfo .qrspan1{
  color:red;
  left: 32%;
}

.qrInfo .qrspan2{
  left: 47%;
}

</style>