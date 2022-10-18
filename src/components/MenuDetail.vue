<template>
  <div v-cloak class="detail">
    <div v-html="myDiv.innerHTML" style="padding:10px"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "MenuDetail",
  props: ["num"],
  setup(props) {
    const store = useStore();
    let info = [
      {
        title: ["美食"],
        content: [
          [
            "代金券",
            "甜点饮品",
            "火锅自助餐",
            "小吃快餐",
            "日韩料理",
            "西餐",
            "聚餐宴请",
            "烧烤烤肉",
            "东北菜",
            "川湘菜",
            "江浙菜",
            "香锅烤鱼",
            "粤港菜",
            "中式烧烤/烤串",
            "西北菜",
            "咖啡酒吧茶馆",
            "云贵菜",
            "东南亚菜",
            "海鲜",
            "素食",
            "台湾/客家菜",
            "创意菜",
            "汤/粥/炖菜",
            "蒙餐",
            "新疆菜",
            "其他美食",
            "京菜鲁菜",
          ],
        ],
      },
      {
        title: ["外卖"],
        content: [["美团外卖"]],
      },
      {
        title: ["酒店星级"],
        content: [["经济型", "舒适/三星", "高档/四星", "豪华/五星"]],
      },
      {
        title: ["热门城市", "热门房源"],
        content: [
          [
            "上海",
            "成都",
            "北京",
            "重庆",
            "南京",
            "杭州",
            "广州",
            "西安",
            "武汉",
            "厦门",
            "长沙",
            "青岛",
            "深圳",
            "天津",
            "苏州",
          ],
          ["复式Loft", "别墅"],
        ],
      },
      {
        title: ["热门电影"],
        content: [
          [
            "独行月球",
            "明日战记",
            "小黄人大眼萌：神偷奶爸前传",
            "新神榜：杨戬",
            "断·桥",
            "人生大事",
            "隐入尘烟",
            "猪猪侠大电影·海洋日记",
            "小马宝莉：新世代",
            "山海经之再见怪兽",
          ],
        ],
      },
      {
        title: ["机票", "火车票"],
        content: [["国内机票", "国际/港澳台机票"], ["火车票"]],
      },
      {
        title: ["休闲娱乐", "KTV"],
        content: [
          [
            "足疗按摩",
            "洗浴/汗蒸",
            "酒吧",
            "密室逃脱",
            "轰趴馆",
            "茶馆",
            "私人影院",
            "DIY手工坊",
            "采摘/农家乐",
            "网吧网咖",
            "游乐游艺",
            "VR桌面游戏",
            "真人CS",
            "棋牌室",
            "其他玩乐",
          ],
          ["KTV"],
        ],
      },
      {
        title: ["生活服务"],
        content: [
          [
            "衣物/皮具洗护",
            "家政",
            "搬家运输",
            "送水",
            "充值缴费",
            "服饰/鞋包养护",
            "开锁换锁",
            "居家维修",
            "管道疏通",
            "家电维修清洗",
            "电脑维修",
            "手机维修",
            "证件照/肖像摄影",
            "照片冲印/图文文印",
            "商务服务/法律服务",
            "文化传媒机构",
            "成人用品/情趣用品",
          ],
        ],
      },
      {
        title: ["丽人"],
        content: [
          [
            "美发",
            "美甲美睫",
            "美容美体",
            "医学美容",
            "瑜伽舞蹈",
            "瘦身纤体",
            "韩式定妆",
            "祛痘",
            "纹身",
            "化妆品",
            "养发",
          ],
        ],
      },
      {
        title: ["结婚"],
        content: [
          [
            "婚纱摄影",
            "旅拍",
            "个性写真",
            "婚宴",
            "婚庆公司",
            "婚纱礼服",
            "西服定制",
            "婚戒首饰",
            "婚车租赁",
            "司仪主持",
            "彩妆造型",
            "婚礼跟拍",
            "婚礼小礼品",
            "更多婚礼服务",
          ],
        ],
      },
      {
        title: ["儿童乐园", "幼儿教育", "亲子摄影", "孕产护理"],
        content: [
          ["婴儿游泳", "其它亲子游乐"],
          [
            "早教中心",
            "少儿英语",
            "智力开发",
            "托班/幼儿园",
            "幼儿教育",
            "其他幼儿教育",
          ],
          ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"],
          [
            "月子会所",
            "产后恢复",
            "妇幼医院",
            "孕产用品",
            "开奶催乳",
            "月嫂",
            "亲子购物",
            "宝宝派对",
            "亲子服务",
          ],
        ],
      },
      {
        title: ["运动健身"],
        content: [
          [
            "健身中心",
            "武术场馆",
            "游泳馆",
            "羽毛球馆",
            "溜冰场",
            "射箭馆",
            "篮球场",
            "网球馆",
            "台球馆",
            "乒乓球",
            "足球场",
            "高尔夫场",
            "保龄球馆",
            "体育场馆",
            "马术场",
            "壁球馆",
            "更多运动",
          ],
        ],
      },
      {
        title: ["装修设计", "装修建材", "家具家居", "家装卖场"],
        content: [
          ["半包装修", "全包装修", "清包装修"],
          [
            "地板",
            "瓷砖石材",
            "橱柜",
            "灯饰照明",
            "厨卫洁具",
            "油漆涂料",
            "集成吊顶",
            "墙纸墙艺",
            "门窗",
            "木材板材",
            "家用五金",
            "电工电料",
            "楼梯",
            "管材管件",
          ],
          ["家具", "床上用品/家纺", "家居饰品", "厨具餐具", "智能家居"],
          ["建材卖场", "家居卖场", "灯饰卖场"],
        ],
      },
      {
        title: ["音乐培训", "职业培训", "外语培训", "美术培训"],
        content: [
          ["钢琴", "吉他", "小提琴", "古筝", "架子鼓", "声乐", "其他音乐培训"],
          [
            "美容化妆",
            "会计",
            "IT",
            "厨艺",
            "管理培训",
            "摄影培训",
            "司法考试",
            "公务员培训",
            "其他职业培训",
          ],
          [
            "英语",
            "日语",
            "韩语",
            "法语",
            "德语",
            "汉语",
            "俄语",
            "西班牙语",
            "其他外语",
          ],
          ["绘画", "书法", "其他美术"],
        ],
      },
      {
        title: ["医疗健康", "爱车", "宠物"],
        content: [
          ["医院", "齿科口腔", "体检中心", "药店", "中医", "其他健康服务"],
          [
            "洗车",
            "租车",
            "加油站",
            "维修保养",
            "驾校",
            "汽车美容",
            "陪练",
            "汽车用品",
            "停车场",
            "汽车保险",
            "4S店/汽车销售",
            "更多汽车服务",
            "机油保养",
            "汽车报价",
            "二手车",
            "广告驾校",
            "交警队",
            "汽车改装",
            "汽车配件",
          ],
          ["宠物店", "宠物医院"],
        ],
      },
      {
        title: ["玩乐"],
        content: [
          [
            "KTV",
            "酒吧",
            "密室逃脱",
            "游乐游艺",
            "网吧网咖",
            "私人影院",
            "DIY手工坊",
            "桌面游戏",
            "采摘/农家乐",
            "棋牌室",
            "轰趴馆",
            "真人CS",
            "VR",
            "其他玩乐",
          ],
        ],
      },
    ];

    let obj = info[props.num];

    let myDiv = document.createElement('div');

    for(let x = 0; x < obj.title.length; x++){
      //包含每一块的div
      let divNum = document.createElement('div');
      divNum.setAttribute('style','width:350px;margin:0 auto');
      //块内title
      let titleText = obj.title[x];
      let t1Text = document.createTextNode(titleText);
      let t = document.createElement('a');
      t.appendChild(t1Text);
      t.href = '#';
      t.setAttribute('style','color:rgb(34,34,34);');
      let titleP = document.createElement('p');
      titleP.appendChild(t);
      titleP.setAttribute('style','font-size:16px;margin-top:15px;')
      divNum.appendChild(titleP);
      let moreText = '更多>';
      let moreNode = document.createTextNode(moreText);
      let moreInfo = document.createElement('a');
      moreInfo.href = '#';
      moreInfo.appendChild(moreNode);
      moreInfo.setAttribute('style','color:rgb(153,153,153);position:relative;bottom:17px;left:310px');
      divNum.appendChild(moreInfo);
      let CutLine = document.createElement('div');
      CutLine.setAttribute('style','background-color:rgb(229,229,229);width:350px;height:1px;margin:0 auto;margin-bottom:15px');
      divNum.appendChild(CutLine);

      //块内细节内容
      let details = obj.content[x];
      for(let j = 0; j < details.length; j++){
        let detailText = details[j];
        let dText = document.createTextNode(detailText);
        let d = document.createElement('a');
        d.appendChild(dText);
        d.href = '#';
        d.setAttribute('class','detaila')
        d.setAttribute('style','color:rgb(153,153,153);font-size:12px;padding-right:15px');
        let detailSpan = document.createElement('span');
        detailSpan.setAttribute('style','display:inline-block;margin-bottom:5px');
        detailSpan.appendChild(d);
        divNum.appendChild(detailSpan);
      }

      //将每一块加入myDiv
      myDiv.appendChild(divNum);
    }


    onMounted(() => {
      const root = document.querySelector(".detail");
      root.addEventListener("mouseenter", () => {
        store.dispatch("inshow");
      });
      root.addEventListener("mouseleave", () => {
        store.dispatch("outshow");
      });
      const detailsA = document.querySelectorAll('.detaila');
      for(let i = 0; i < detailsA.length; i++){
        detailsA[i].addEventListener('mouseenter',(e)=>{
          e.target.style.color = 'rgb(254,140,0)';
        });
         detailsA[i].addEventListener('mouseleave',(e)=>{
          e.target.style.color = 'rgb(153,153,153)';
        })
      }
    });

    return{
      obj,
      myDiv
    }
  },
};
</script>

<style scoped>
.detail {
  width: 400px;
  height: 416px;
  position: absolute;
  left: 390px;
  top: 10px;
  background-color: #fff;
  z-index: 2;
}

.titleSPan{
  display: inline-block;
  color:rgb(34,34,34);
  font-size: 16px;
}

.detailSpan{
  color: rgb(153,153,153) !important;
}

</style>