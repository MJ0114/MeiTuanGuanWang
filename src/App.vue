<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from "./components/TopNav.vue";
import MyPage from "./components/MyPage.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <div>
    <TopNav></TopNav>
    <MyPage></MyPage>
    <MyFooter></MyFooter>
  </div>
</template>

<style>
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3599480 */
  src: url("//at.alicdn.com/t/c/font_3599480_9nbfz94m2dp.woff2?t=1661688108830")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3599480_9nbfz94m2dp.woff?t=1661688108830")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3599480_9nbfz94m2dp.ttf?t=1661688108830")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.switchbtn {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
}

.switchbtn .iconfont {
  position: relative;
  left: 11px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lbtn,
.rbtn {
  width: 40px;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: rgba(59, 70, 92, 0.8);
}
</style>