<template>
  <div class="Homestay">
    <div class="homestayTitle">
      <ul id="ultitle">
        <li><a href="#" id="firstTitle">推荐民宿</a></li>
        <li class="titlechecked">
          <a @mouseenter="titChecked" href="#">天津</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">济南</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">大连</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">太原</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">石家庄</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">秦皇岛</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">呼和浩特</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">潍坊</a>
        </li>
        <li class="titleelem">
          <a @mouseenter="titChecked" href="#">唐山</a>
        </li>
        <li class="titleelem" id="sss">
          <a @mouseenter="titChecked" href="#">泰安</a>
        </li>
      </ul>
      <a href="#" class="titleright">
        <span>全部</span>
        <i class="iconfont">&#xe6ac;</i>
      </a>
    </div>
    <div class="houses" v-show="showCity[1]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
    </div>


    <div class="houses" v-show="showCity[2]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[3]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
      
    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥398</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
     
    </div>

    <div class="houses" v-show="showCity[4]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥280</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥220</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥298</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[5]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
     
    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住1人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
     
    </div>

    <div class="houses" v-show="showCity[6]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
    
    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥90</p>
        </a>
      </div>
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥280</p>
        </a>
      </div>
     
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥188</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥324</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[7]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">舒适大床房/和谐公园/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住3人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
    
     
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[8]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
     
    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      
     
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[9]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>

    
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
      
     
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
    </div>

    <div class="houses" v-show="showCity[10]">
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg1.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner1.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【美家公寓】舒适大床房/和谐公园/小吃一条街/购物广场/真武路/地铁站</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥70</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg6.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner6.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【租美啦民宿】晨光大床房 滨海站 | 万达广场 | 滨海购物中心 | 天津海昌极地海洋公园</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥230</p>
        </a>
      </div>
     
      
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg5.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner5.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">近高新公寓，环渤海，天狮学院，武清职专</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥180</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg2.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner2.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">【小蜜蜂民宿公寓】北辰大厦暴力熊主题精装现代简约风一居室/御龙湾商圈/刘园商圈/轻奢大床投影房</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥218</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg4.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner4.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">津南大学城《海棠民宿》标准单人间</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥365</p>
        </a>
      </div>
      <div class="minsu-item">
        <a href="#">
          <img src="../assets/imgs/minsuimg3.jpg" alt="民宿">
          <img src="../assets/imgs/minsuowner3.jpg" alt="用户" class="minsuowner">
          <p class="itemtitle">西客运站旁简约小屋，近地铁近天津之眼 古文化街 鼓楼 意式风情街 陆家嘴 大悦城等近河北工业大学，近西沽公园小区安静舒适</p>
          <p class="minsuInfo"><span>整套一居室·可住2人</span><span> | </span><span>龙城大街小店</span>
            </p>
            <p class="price">￥266</p>
        </a>
      </div>
     
    </div>

  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  name: "MinSu",
  setup() {
    let showCity = reactive([false,true,false,false,false,false,false,false,false,false,false])

    function titChecked(e) {
      const father = document.getElementById("ultitle");
      const childs = father.getElementsByTagName("li");
      for (let i = 1; i < childs.length; i++) {
        childs[i].className = "titleelem";
        showCity[i] = false;
      }
      e.target.parentNode.className = "titlechecked";
      for (let i = 1; i < childs.length; i++) {
        if(childs[i].className == "titlechecked"){
          showCity[i] = true;
          break;
        }
      }
    }

    return {
      showCity,
      titChecked,
    };
  },
};
</script>

<style scoped>
.Homestay {
  width: 1190px;
  height: 733px;
  background-color: white;
  margin: 0 auto;
  margin-top: 35px;
  outline: solid rgb(229,229,229) 1px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

img{
  width: 370px;
  height: 208px;
  border-radius: 5px;
}

a{
  color:black;
}

.homestayTitle {
  width: 1190px;
  height: 44px;
  background-color: rgb(243,191,71);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: relative;
}

.homestayTitle ul {
  font-size: 14px;
  width: 680px;
  height: 44px;
  margin-left: 10px;
  line-height: 44px;
}

#firstTitle {
  font-size: 18px;
  font-family: "STCaiyun";
}

.titleright {
  font-size: 14px;
  display: inline-block;
  height: 44px;
  width: 45px;
  line-height: 44px;
}

.titleright span{
    position: absolute;
    right: 20px;
    top: 0;
}

.titleright i{
    position: absolute;
    top: 0;
    right: 5px;
}

.homestayTitle ul li {
  flex-grow: 1;
}

.homestayTitle ul li a,
.homestayTitle a {
  color: white;
}

#ultitle {
  position: relative;
}

.titlechecked,
.titleelem {
  margin-left: 5px;
  margin-right: 5px;
  position: absolute;
  top: 0;
}

.titleelem:nth-child(1) {
  left: -5px;
}
.titlechecked:nth-child(2),
.titleelem:nth-child(2) {
  left: 90px;
}
.titlechecked:nth-child(3),
.titleelem:nth-child(3) {
  left: 140px;
}
.titlechecked:nth-child(4),
.titleelem:nth-child(4) {
  left: 190px;
}
.titlechecked:nth-child(5),
.titleelem:nth-child(5) {
  left: 240px;
}
.titlechecked:nth-child(6),
.titleelem:nth-child(6) {
  left: 290px;
}
.titlechecked:nth-child(7),
.titleelem:nth-child(7) {
  left: 355px;
}
.titlechecked:nth-child(8),
.titleelem:nth-child(8) {
  left: 420px;
}
.titlechecked:nth-child(9),
.titleelem:nth-child(9) {
  left: 500px;
}
.titlechecked:nth-child(10),
.titleelem:nth-child(10) {
  left: 550px;
}
.titlechecked:nth-child(11),
.titleelem:nth-child(11) {
  left: 600px;
}

.titlechecked::after {
  color:rgb(248,248,248);
  font-family: "iconfont" !important;
  content: "\e600";
  position: relative;
  top: 19.5px;
  left: -22px;
  font-size: 15px;
}

.titlechecked:nth-child(6)::after,
.titlechecked:nth-child(7)::after {
  left: -29px;
}
.titlechecked:nth-child(8)::after {
  left: -36px;
}

.houses{
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
}

.minsu-item{
  flex-grow: 1;
  position: relative;
}


.minsuowner{
  width: 52px;
  height: 52px;
  border:2px solid white;
  border-radius: 50%;
  position: absolute;
  right: 25px;
  bottom: 125px;
}

.itemtitle{
  width: 297px;
  height: 20.8px;
  margin-top: 15px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.minsuInfo{
  margin-left: 8px;
  font-size: 12px;
  margin-top: 10px;
  color:rgb(153,153,153);
}

.price{
  color:rgb(255,102,0);
  margin-left: 6px;
  margin-top: 7px;
  margin-left: 2px;
  margin-bottom: 50px;
  font-size: 22px;
}

</style>