<template>
  <div class="item">
    <a href="#">
      <!-- <img id="picture" alt="美食图片" /> -->
      <slot></slot>
      <p class="info">{{ information }}</p>
      <div class="levels">
        <span class="stars">
          <div v-if="level == 0.5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c3;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 1">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 1.5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c3;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 2">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 2.5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c3;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 3">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 3.5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c3;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 4">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(195,195,195)" class="iconfont">&#xe6c2;</i>
          </div>
          <div v-if="level == 4.5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c3;</i>
          </div>
          <div v-if="level == 5">
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
            <i style="color:rgb(255,153,0)" class="iconfont">&#xe6c2;</i>
          </div>

        </span>
      
        <span class="pingjianums">{{ num }}个评价</span>
      </div>
      <p class="loca">{{location}}</p>
      <p class="prices"><span style="font-size: 14px;">￥</span>{{price}}<span style="font-size: 12px;">起</span></p>
    </a>
  </div>
</template>

<script>

export default {
  name: "RecomItem",
  props: ["itemSrc", "information",'level', 'num','price','location'],
  setup() {
  },
};
</script>

<style scoped>
i{
  width: 213px;
  height: 246px;
}
img {
  width: 213px;
  height: 120px;
  margin: 0 auto;
  margin-top: 10px;
}

.info {
  color:black;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pingjianums,.loca{
  color:rgb(153,153,153);
  font-size: 12px;
}

.prices{
  font-size: 22px;
  color:rgb(255,102,0);
}

</style>