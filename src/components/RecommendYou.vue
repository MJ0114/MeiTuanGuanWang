<template>
  <div class="recommmend">
    <div class="recommmendTitle">
        <span class="title">猜你喜欢</span>
        <span class="info">为你甄选最适合的</span>
    </div>
    <div class="items">
        <div class="item">    <RecomItem :level="levels[0]" :num="nums[0]" :price="prices[0]" :location="locations[0]" :information="informations[0]">
        <img src="../assets/imgs/recommendimg1.jpg" alt="美团 美食">
    </RecomItem></div>

    <div class="item">
        <RecomItem :level="levels[1]" :num="nums[1]" :price="prices[1]" :location="locations[1]" :information="informations[1]">
        <img src="../assets/imgs/recommendimg2.jpg" alt="美团 美食">
    </RecomItem>
    </div>
  
    <div class="item"><RecomItem :level="levels[2]" :num="nums[2]" :price="prices[2]" :location="locations[2]" :information="informations[2]">
        <img src="../assets/imgs/recommendimg3.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[3]" :num="nums[3]" :price="prices[3]" :location="locations[3]" :information="informations[3]">
        <img src="../assets/imgs/recommendimg4.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[4]" :num="nums[4]" :price="prices[4]" :location="locations[4]" :information="informations[4]">
        <img src="../assets/imgs/recommendimg5.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[5]" :num="nums[5]" :price="prices[5]" :location="locations[5]" :information="informations[5]">
        <img src="../assets/imgs/recommendimg6.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[6]" :num="nums[6]" :price="prices[6]" :location="locations[6]" :information="informations[6]">
        <img src="../assets/imgs/recommendimg7.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[7]" :num="nums[7]" :price="prices[7]" :location="locations[7]" :information="informations[7]">
        <img src="../assets/imgs/recommendimg8.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[8]" :num="nums[8]" :price="prices[8]" :location="locations[8]" :information="informations[8]">
        <img src="../assets/imgs/recommendimg9.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem :level="levels[9]" :num="nums[9]" :price="prices[9]" :location="locations[9]" :information="informations[9]">
        <img src="../assets/imgs/recommendimg10.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem  :level="levels[10]" :num="nums[10]" :price="prices[10]" :location="locations[10]" :information="informations[10]">
        <img src="../assets/imgs/recommendimg11.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem  :level="levels[11]" :num="nums[11]" :price="prices[11]" :location="locations[11]" :information="informations[11]">
        <img src="../assets/imgs/recommendimg12.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem  :level="levels[12]" :num="nums[12]" :price="prices[12]" :location="locations[12]" :information="informations[12]">
        <img src="../assets/imgs/recommendimg13.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem  :level="levels[13]" :num="nums[13]" :price="prices[13]" :location="locations[13]" :information="informations[13]">
        <img src="../assets/imgs/recommendimg14.jpg" alt="美团 美食">
    </RecomItem></div>
    <div class="item"><RecomItem  :level="levels[14]" :num="nums[14]" :price="prices[14]" :location="locations[14]" :information="informations[14]">
        <img src="../assets/imgs/recommendimg15.jpg" alt="美团 美食">
    </RecomItem></div>
    </div>
   
  </div>
</template>

<script>
import RecomItem from './RecomItem.vue';

export default {
    name:'RecommendYou',
    components:{RecomItem},
    setup(){
        let prices = [];
        let levels = [5,2.5,1,3,1,4,4.5,2,1.5,5,4,3.5,4,5,2.5];
        let nums = [];
        let locations = ['昌平镇','管庄','鲁谷','新街口','苹果园','良乡','北大地/万丰路','知春路','亦庄','金地来','前门/大栅栏','航天桥','双榆树','中关村','远大路'];
        let informations = ['屯老二农家铁锅炖（松园店）','芦月轩羊蝎子（杨闸店）','晓寿司•日本料理（鲁谷店）','京八珍（积水潭店）','分米鸡（喜隆多店）','汉斯特自助烤肉（良乡店）','蝎王府羊蝎子（北大地店）','欢乐口腔正畸（知春路分院）','巴蜀王婆大虾（亦庄林肯公园店）','宽板凳老灶火锅（密云店）','北京炸酱面馆（前门总店）','中央电视塔旋转餐厅','华莱士炸鸡汉堡（石油大学店）','味多美蛋糕（紫金数码店）','玫瑰花园自助烤肉（金源店）'];
        for(let i = 0; i < 15; i++){
            prices[i] = Math.floor(Math.random() * 300 + 5);
            nums[i] = Math.floor(Math.random() * 80000 + 500);
        }
        return {
            prices,
            levels,
            nums,
            locations,
            informations
        }
    }
}
</script>

<style scoped>
.iconfont{
    color:rgb(255,153,0);
}

.recommmend{
    width: 1190px;
    height: 802px;
    margin: 0 auto;
    margin-top: 47px;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    outline: 1px solid rgb(229,229,229);
}

img{
    width: 213px;
    height: 120px;
    border-radius: 6px;
}

.recommmendTitle{
    color:white;
    width: 1180px;
    height: 44px;
    line-height: 44px;
    background-color: rgb(81,180,216);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 10px;
}

.title{
    font-family: 'STLiti';
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
}

.info{
    font-size: 14px;
    cursor: pointer;
}

.info::after{
    content: '\e600';
    font-family:'iconfont' !important;
    position: relative;
    top: 19px;
    right:63px;
}

.items{
    margin-top: 5px;
    display: flex;
    width: 1188px;
    height: 747px;
    padding: 10px;
    flex-wrap: wrap;
}
.item{
    flex-grow: 1;
    width: 230px;
    height: 246px;
}

</style>