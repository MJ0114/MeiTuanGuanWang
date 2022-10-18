<template>
  <div class="cateyemovie">
    <div class="movieTitle">
      <span class="title">猫眼电影</span>
      <span id="zzry" class="span1show" @mouseenter="showing">正在热映</span>
      <span id="jjsy" class="span2" @mouseenter="toShow">即将上映</span>
      <div class="titleright">
        <a href="#"
          ><span class="titlea">全部</span> <i class="iconfont">&#xe6ac;</i></a
        >
      </div>
    </div>
    <transition
      class="animate__animated"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <div
        style="position: absolute;z-index: 3;"
        v-show="store.state.showBtn"
        @mouseenter="getInBtn"
        @mouseleave="getOutBtn"
      >
        <div class="lbtn">
          <i class="iconfont" @click="showPageOne">&#xe6af;</i>
        </div>
        <div class="rbtn">
          <i class="iconfont" @click="showPageTwo">&#xe6ac;</i>
        </div>
      </div>
    </transition>

    <div
      class="zzryimgs"
      @mouseenter="getIn"
      @mouseleave="getOut"
      v-show="movieShowing"
    >
      <div class="container">
        <div>
          <a href="#">
            <img src="../assets/imgs/movie1.jpg" alt="电影雀斑公主" />
            <div class="mask"></div>
            <img class="imaximg" src="../assets/imgs/imax.png" alt="imax" />
            <span class="buyticket">购票</span>
            <span class="filenum">22684</span>
            <b class="afternum">人想看</b>
            <span class="filename">雀斑公主</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movie2.jpg" alt="电影世界上我最爱的人" />
            <div class="mask"></div>
            <img class="imaximg" src="../assets/imgs/imax.png" alt="imax" />
            <span class="buyticket">购票</span>
            <span class="filenum">43204</span>
            <b class="afternum">人想看</b>
            <span class="filename">世界上我最爱的人</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movie3.jpg" alt="电影浪漫青春" />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span>
            <span class="filenum">32601</span>
            <b class="afternum">人想看</b>
            <span class="filename">浪漫青春</span>
          </a>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movie4.jpg" alt="电影忠犬帕尔玛" />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">22694</span>
          <b class="afternum">人想看</b>
          <span class="filename">忠犬帕尔玛</span>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movie5.jpg" alt="电影大白鲨" />
            <div class="mask"></div>
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">12928</span>
          <b class="afternum">人想看</b>
          <span class="filename">大白鲨</span>
        </div>

        <div>
          <a href="#">
            <img src="../assets/imgs/movie6.jpg" alt="电影海的尽头是草原" />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">6884</span>
            <b class="afternum">人想看</b>
            <span class="filename">海的尽头是草原</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movie7.jpg" alt="电影还是觉得你最好" />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">6265</span>
            <b class="afternum">人想看</b>
            <span class="filename">还是觉得你最好</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movie8.jpg" alt="电影狼群" />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">7901</span>
            <b class="afternum">人想看</b>
            <span class="filename">狼群</span>
          </a>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movie9.jpg" alt="电影我要和你在一起" />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">13694</span>
          <b class="afternum">人想看</b>
          <span class="filename">我要和你在一起</span>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movie10.jpg" alt="电影追光万里" />
            <div class="mask"></div>
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">8861</span>
          <b class="afternum">人想看</b>
          <span class="filename">追光万里</span>
        </div>
      </div>
    </div>

    <div
      class="jjsyimgs"
      @mouseenter="getIn"
      @mouseleave="getOut"
      v-show="movieToShow"
    >
      <div class="container">
        <div>
          <a href="#">
            <img src="../assets/imgs/movietoshow1.png" alt="电影雀斑公主" />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">8884</span>
            <b class="afternum">人想看</b>
            <span class="filename">证明</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="../assets/imgs/movietoshow2.jpg"
              alt="电影世界上我最爱的人"
            />
            <div class="mask"></div>
            <img class="imaximg" src="../assets/imgs/imax.png" alt="imax" />
            <span class="buyticket">购票</span>
            <span class="filenum">43204</span>
            <b class="afternum">人想看</b>
            <span class="filename">世间有她</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movietoshow3.jpg" alt="电影浪漫青春" />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">32601</span>
            <b class="afternum">人想看</b>
            <span class="filename">断网</span>
          </a>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movietoshow4.jpg" alt="电影忠犬帕尔玛" />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">22694</span>
          <b class="afternum">人想看</b>
          <span class="filename">请别相信她</span>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movietoshow5.jpg" alt="电影大白鲨" />
            <div class="mask"></div>
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">12928</span>
          <b class="afternum">人想看</b>
          <span class="filename">我的非凡父母</span>
        </div>

        <div>
          <a href="#">
            <img
              src="../assets/imgs/movietoshow6.jpg"
              alt="电影海的尽头是草原"
            />
            <div class="mask"></div>
            <img class="imaximg" src="../assets/imgs/imax.png" alt="imax" />
            <span class="buyticket">购票</span>
            <span class="filenum">6884</span>
            <b class="afternum">人想看</b>
            <span class="filename">狼群</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="../assets/imgs/movietoshow7.jpg"
              alt="电影还是觉得你最好"
            />
            <div class="mask"></div>
            <span class="buyticket">购票</span>
            <span class="filenum">6265</span>
            <b class="afternum">人想看</b>
            <span class="filename">追光万里</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="../assets/imgs/movietoshow8.jpg" alt="电影狼群" />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span>
            <span class="filenum">7901</span>
            <b class="afternum">人想看</b>
            <span class="filename">世界上最爱我的人</span>
          </a>
        </div>
        <div>
          <a href="#"
            ><img
              src="../assets/imgs/movietoshow9.jpg"
              alt="电影我要和你在一起"
            />
            <div class="mask"></div>
            <img
              style="width: 78px"
              class="imaximg"
              src="../assets/imgs/imax3d.png"
              alt="imax"
            />
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">13694</span>
          <b class="afternum">人想看</b>
          <span class="filename">还是觉得你最好</span>
        </div>
        <div>
          <a href="#"
            ><img src="../assets/imgs/movietoshow10.jpg" alt="电影追光万里" />
            <div class="mask"></div>
            <span class="buyticket">购票</span></a
          >
          <span class="filenum">8861</span>
          <b class="afternum">人想看</b>
          <span class="filename">海的尽头是草原</span>
        </div>
      </div>
    </div>

    <!-- <div class="jjsyimgs"></div> -->
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "CatEyeBlue",
  setup() {
    let lrbtnTrue = ref(false);
    let store = useStore();
    let movieShowing = ref(true);
    let movieToShow = ref(false);

    function showing() {
      let shownow = document.querySelector("#zzry");
      shownow.className = "span1show";
      let showafter = document.querySelector("#jjsy");
      showafter.className = "span2";
      movieToShow.value = false;
      movieShowing.value = true;
    }

    function toShow() {
      let showafter = document.querySelector("#jjsy");
      showafter.className = "span2show";
      let shownow = document.querySelector("#zzry");
      shownow.className = "span1";
      movieShowing.value = false;
      movieToShow.value = true;
    }

    function getIn() {
      store.commit("INMOV");
    }

    function getOut() {
      store.dispatch("outmov");
    }

    function getInBtn() {
      store.commit("INBTN");
    }

    function getOutBtn() {
      store.dispatch("outbtn");
    }

    function showPageOne() {
      let containers = document.querySelectorAll(".container");
      containers[0].style.left = '0px';
      containers[1].style.left = '0px';
    }

    function showPageTwo() {
      let containers = document.querySelectorAll(".container");
      containers[0].style.left = '-1130px';
      containers[1].style.left = '-1130px';
    }

    // onMounted(()=>{
    //   let containers = document.querySelectorAll(".container");
    //   containers[0].className = "containerl";
    //   containers[1].className = "containerl";
    // })

    return {
      lrbtnTrue,
      store,
      movieShowing,
      movieToShow,
      showing,
      toShow,
      getIn,
      getOut,
      getInBtn,
      getOutBtn,
      showPageOne,
      showPageTwo,
    };
  },
};
</script>

<style scoped>
.cateyemovie {
  width: 1190px;
  height: 342px;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
}

.movieTitle {
  position: relative;
  width: 1190px;
  height: 44.8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(252, 65, 88);
}

img {
  border-radius: 5px;
  width: 207px;
  /* filter: brightness(50%); */
}

.imaximg {
  position: absolute;
  top: -124px;
  left: 7px;
  width: 55px;
  height: 20px;
  object-fit: contain;
  z-index: 2;
  filter: brightness(100%);
}

.mask {
  box-sizing: border-box;
  box-shadow: 0 -10px 10px rgba(7, 7, 7, 0.5);
  width: 207px !important;
  margin-left: 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 40px;
  background-color: rgba(7, 7, 7, 0.5);
  position: absolute;
  z-index: 1;
  bottom: 43px;
  right: 1px;
}

.zzryimgs,
.jjsyimgs {
  display: flex;
  width: 98%;
  height: 290px;
  margin: 0 auto;
  margin-top: 3.6px;
  position: absolute;
  left: 10px;
  overflow: hidden;
}
.container{
  display: flex;
  position: relative;
  left: 0;
  transition: all linear 5s;
}

.zzryimgs div,
.jjsyimgs div {
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
  width: 207px;
  position: relative;
  flex-grow: 1;
  transition: all 1s;
}

.buyticket {
  position: absolute;
  right: -5px;
  bottom: 10px;
  border-radius: 15px;
  line-height: 25px;
  background-color: rgb(255, 73, 73);
  width: 52px;
  height: 25px;
  font-size: 14px;
  color: white;
  text-align: center;
  z-index: 2;
}

.filename {
  z-index: 2;
  font-size: 16px;
  display: inline-block;
  width: 106px;
  height: 20.8px;
  color: white;
  position: absolute;
  left: 20px;
  bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.filenum {
  color: #fd9827;
  width: 47px;
  height: 20.8px;
  font-size: 16px;
  position: absolute;
  bottom: 25px;
  z-index: 2;
  left: 20px;
  text-align: center;
}

.afternum {
  width: 86.5px;
  height: 16px;
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 25px;
  left: 69px;
  z-index: 3;
  text-align: left;
}

.zzryimgs div img,
.jjsyimgs div img {
  height: 290px;
}

.zzryimgs div a,
.jjsyimgs div a {
  display: inline-block;
  margin-left: 14px;
}

.title {
  font-family: "STXingkai" !important;
  font-size: 25px;
  color: white;
  line-height: 44.8px;
  margin-left: 10px;
  cursor: pointer;
}

.movieTitle .span1,
.movieTitle .span1show,
.movieTitle .span2,
.movieTitle .span2show {
  font-size: 14px;
  margin-left: 15px;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.movieTitle .span1,
.movieTitle .span1show {
  left: 110px;
}

.movieTitle .span2,
.movieTitle .span2show {
  left: 180px;
}

.movieTitle .span1show,
.movieTitle .span2show {
  font-size: 14px;
  margin-left: 15px;
  color: white;
}

.movieTitle .span1show::after {
  font-family: "iconfont" !important;
  content: "\e600";
  position: relative;
  top: 20px;
  left: -36px;
  font-size: 15px;
}

.movieTitle .span2show::after {
  font-family: "iconfont" !important;
  content: "\e600";
  position: relative;
  top: 20px;
  left: -36px;
  font-size: 15px;
}

.titleright {
  float: right;
  margin-right: 10px;
}

.titleright span,
.titleright .iconfont {
  font-size: 14px;
  color: white;
  line-height: 44.8px;
}

.lbtn,
.rbtn,
.iconfont {
  z-index: 3;
  font-size: 30px;
}

.lbtn,
.rbtn {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 135px;
  cursor: pointer;
  text-align: center;
}

.lbtn {
  left: 8px;
}

.rbtn {
  left: 1150px;
}

.iconfont {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>