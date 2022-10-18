<template>
  <div class="bottomnav">
    <p class="title">美团导航</p>
    <span class="subtitle">热门城市</span>
    <div class="hotcity">
      <div><a href="#" title="南宁">南宁</a></div>
      <div><a href="#" title="深圳">深圳</a></div>
      <div><a href="#" title="石家庄">石家庄</a></div>
      <div><a href="#" title="广州">广州</a></div>
      <div><a href="#" title="常州">常州</a></div>
      <div><a href="#" title="苏州">苏州</a></div>
      <div><a href="#" title="长春">长春</a></div>
      <div><a href="#" title="大连">大连</a></div>
      <div><a href="#" title="无锡">无锡</a></div>
      <div><a href="#" title="成都">成都</a></div>
      <div><a href="#" title="上海">上海</a></div>
      <div><a href="#" title="武汉">武汉</a></div>
      <div><a href="#" title="沈阳">沈阳</a></div>
      <div><a href="#" title="温州">温州</a></div>
      <div><a href="#" title="西安">西安</a></div>
      <div><a href="#" title="青岛">青岛</a></div>
      <div><a href="#" title="合肥">合肥</a></div>
      <div><a href="#" title="贵阳">贵阳</a></div>
      <div><a href="#" title="天津">天津</a></div>
      <div><a href="#" title="昆明">昆明</a></div>
    </div>
    <span class="subtitle">热门分类</span>
    <div class="polularctg">
      <div><a href="#" class="special" title="酒店">酒店</a></div>
      <div><a href="#" title="美食">美食</a></div>
      <div><a href="#" title="休闲娱乐">休闲娱乐</a></div>
      <div><a href="#" title="运动健身">运动健身</a></div>
      <div><a href="#" title="生活服务">生活服务</a></div>
      <div><a href="#" title="上门服务">上门服务</a></div>
      <div><a href="#" title="购物">购物</a></div>
      <div><a href="#" title="时尚购">时尚购</a></div>
      <div><a href="#" title="本地购物">本地购物</a></div>
      <div><a href="#" title="结婚">结婚</a></div>
      <div><a href="#" title="摄影写真">摄影写真</a></div>
      <div><a href="#" title="宴会">宴会</a></div>
      <div><a href="#" title="丽人">丽人</a></div>
      <div><a href="#" title="母婴亲子">母婴亲子</a></div>
      <div><a href="#" title="学习培训">学习培训</a></div>
      <div><a href="#" title="家装">家装</a></div>
      <div><a href="#" title="汽车服务">汽车服务</a></div>
      <div><a href="#" title="医疗">医疗</a></div>
      <div><a href="#" title="宠物">宠物</a></div>
    </div>
    <span class="subtitle">周边热门</span>
    <div class="surroundhot">
      <div><a href="#" title="门头沟酒店">门头沟酒店</a></div>
      <div><a href="#" title="门头沟美食">门头沟美食</a></div>
      <div><a href="#" title="大厂回族自治县休闲娱乐">大厂回族自治县休闲娱乐</a></div>
      <div><a href="#" title="廊坊生活服务">廊坊生活服务</a></div>
      <div><a href="#" title="门头沟区上门服务">门头沟区上门服务</a></div>
      <div><a href="#" title="门头沟区购物">门头沟区购物</a></div>
      <div><a href="#" title="门头沟区时尚购">门头沟区时尚购</a></div>
      <div><a href="#" title="廊坊本地购物">廊坊本地购物</a></div>
      <div><a href="#" title="廊坊结婚">廊坊结婚</a></div>
      <div><a href="#" title="门头沟区摄影写真">门头沟区摄影写真</a></div>
      <div><a href="#" title="门头沟区宴会">门头沟区宴会</a></div>
      <div><a href="#" title="廊坊丽人">廊坊丽人</a></div>
      <div><a href="#" title="廊坊母婴亲子">廊坊母婴亲子</a></div>
      <div><a href="#" title="大厂回族自治县学习培训">大厂回族自治县学习培训</a></div>
      <div><a href="#" title="门头沟区家装">门头沟区家装</a></div>
      <div><a href="#" title="廊坊汽车服务">廊坊汽车服务</a></div>
      <div><a href="#" title="大厂回族自治县医疗">大厂回族自治县医疗</a></div>
      <div><a href="#" title="门头沟区宠物">门头沟区宠物</a></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottomnav {
  width: 1190px;
  height: 270px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(255,255,255);
  border: 1px solid rgb(229,229,229);
}

a{
    color:rgb(102,102,102);
    text-align: center;
    font-size: 12px;
}

a:hover{
    color:rgb(254,140,0);
}

.title{
    width: 1170px;
    height: 44px;
    margin-left: 15px;
    font-size: 16px;
}

.subtitle{
    font-size: 14px;
    margin-left: 15px;
    /* display: inline-block; */
    /* margin-bottom: 15px; */
}

.hotcity,.polularctg,.surroundhot{
    display: flex;
    flex-wrap: wrap;
    width: 1080px;
    position: relative;
    left: 100px;
    bottom: 18px;
    border-bottom: 1px solid rgb(229,229,229);
    padding-right: 22px;
    margin-bottom: 10px;
}

.hotcity div,.polularctg div,.surroundhot div{
    width: 105px;
    flex-grow: 0;
    text-align: left;margin-bottom: 10px;
}

.surroundhot div{
    width: 60px;
    text-align: left;
    width: 100px;
   
}

.surroundhot{
    border-bottom: none;
}

.surroundhot div a{
    display: inline-block;
    width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.special::after{
    content: 'HOT';
    position: relative;
    left: 10px;
    color:white;
    background-color: rgb(255,72,72);
    border-radius: 10px;
    width: 35px;
    display: inline-block;
}

</style>