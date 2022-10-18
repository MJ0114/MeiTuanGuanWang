<template>
  <div class="about">
    <ul class="userhelp">
        <span>用户帮助</span>
        <li><a href="#">申请退款</a></li>
        <li><a href="#">常见问题</a></li>
        <li><a href="#">用户协议</a></li>
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">反诈骗公告</a></li>
        <li><a href="#">消费者权益保障</a></li>
    </ul>

    <ul class="mtservice">
        <span>美团服务</span>
        <li><a href="#">美团外卖</a></li>
        <li><a href="#">美团酒店</a></li>
        <li><a href="#">猫眼电影</a></li>
        <li><a href="#">美团配送</a></li>
        <li><a href="#">美团云</a></li>
        <li><a href="#">大众点评</a></li>
        <li><a href="#">美团民宿</a></li>
        <li><a href="#">无人配送</a></li>
        <li><a href="#">企业用餐、企业用车、企业差旅</a></li>
        <li><a href="#">开放平台</a></li>
    </ul>

    <ul class="bsncprt">
        <span>商家合作</span>
        <li><a href="#">美食商家入驻(非外卖)</a></li>
        <li><a href="#">美团外卖开店申请</a></li>
        <li><a href="#">美团餐饮系统</a></li>
        <li><a href="#">美团配送合作申请</a></li>
        <li><a href="#">美团餐饮培训</a></li>
        <li><a href="#">酒店商家入驻</a></li>
        <li><a href="#">境内度假商家入驻</a></li>
        <li><a href="#">综合商家入驻</a></li>
        <li><a href="#">美团民宿房东商家入驻</a></li>
        <li><a href="#">商家开票申请</a></li>
        <li><a href="#">美团智能收银机</a></li>
        <li><a href="#">美团开放平台</a></li>
        <li><a href="#">美团收单</a></li>
        <li><a href="#">免费使用美团排队</a></li>
        <li><a href="#">快驴进货商家合作</a></li>
        <li><a href="#">美团闪购商家入驻</a></li>
        <li><a href="#">合作/招聘</a></li>
    </ul>
    <ul class="rcutpartner">
        <span>合作商招募</span>
        <li><a href="#">美团外卖合作商招募</a></li>
        <li><a href="#">到店餐饮合作商招募</a></li>
        <li><a href="#">到店综合业务合作商招募</a></li>
        <li><a href="#">美团联盟</a></li>
        <li><a href="#">美团收银招募线上分销商</a></li>
        <li><a href="#">美团收银合作商招募</a></li>
        <li><a href="#">美团收单合作商招募</a></li>
        <li><a href="#">美团充电宝合作商招募</a></li>
        <li><a href="#">美团优选渠道合作商招募</a></li>
        <li><a href="#">美团买菜合作商招募</a></li>
        <li><a href="#">美团硬件设备合作商招募</a></li>
    </ul>

    <ul class="mtrules">
        <span>美团规则</span>
        <li><a href="#">规则中心</a></li>
        <li><a href="#">规则目录</a></li>
        <li><a href="#">规则评议院</a></li>
    </ul>

    <ul class="focusonmt">
        <span>关注美团</span>
        <li><a href="#">美团新浪微博</a></li>
    </ul>

    <ul class="companyinfo">
        <span>公司信息</span>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">投资者关系</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商户诚信公约及管理办法</a></li>
        <li><a href="#">保险经纪资质</a></li>
    </ul>

    <ul class="report">
        <span>廉正举报</span>
        <li><a href="#">廉正举报平台</a></li>
    </ul>

    <ul class="property">
        <span>知识产权</span>
        <li><a href="#">知识产权维权平台</a></li>
    </ul>

    <ul class="csmsvhotl">
        <span>消费者服务热线</span>
        <li><span>外卖消费者：</span><a href="#">10109777</a></li>
        <li><span>猫眼消费者：</span><a href="#">10105335</a></li>
        <li><span>其他消费者：</span><a href="#">10107888</a></li>
    </ul>

    <ul class="mcsvhotl">
        <span>商家服务热线</span>
        <li><span>外卖&餐饮商家：</span><a href="#">10105557</a></li>
        <li><span>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：</span><a href="#">10100107</a></li>
    </ul>

    <ul class="reportarea">
        <span>投诉举报专区</span>
        <li><span>违法和不良信息举报电话：</span><a href="#">4006018900</a></li>
        <li><span>举报邮箱：</span><a href="#">tousujubao@meituan.com</a></li>
        <li><a href="#">网上有害信息举报</a></li>
        <li><span>注：</span><a href="#">以上渠道均可投诉举报涉未成年人的违法和不良信息</a></li>
    </ul>

    <span><a href="#" class="mcselfhelp">商家自助入驻美团入口</a></span>
    <span><a href="#" class="supplierrgstra">供应商注册入口</a></span>
  </div>
</template>

<script>
export default {
    name:'AboutInfo',
    setup(){
        return {

        }
    }
}
</script>

<style scoped>
.about{
    width: 1200px;
    height: 590px;
    margin: 0 auto;
    position: relative;
    border-bottom: 1px solid rgb(229,229,229);
}

ul{
    width: 220px;
}

ul span{
    font-size: 14px;
    color:rgb(51,51,51);
}

ul li{
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
}

ul li a{
    color:rgb(102,102,102);
}

ul li a:hover{
    color:rgb(254,140,0);
}

.userhelp{
    position: absolute;
    top: 10px;
}

.mtservice{
    position: absolute;
    top: 200px;
}

.bsncprt{
    position: absolute;
    top: 10px;
    left: 230px;
}

.rcutpartner{
    position: absolute;
    top: 10px;
    left: 460px;
}

.mtrules{
    position: absolute;
    top: 310px;
    left: 460px;
}

.focusonmt{
    position: absolute;
    top: 10px;
    left: 690px;
}

.companyinfo{
    position: absolute;
    top: 100px;
    left: 690px;
}

.report{
    position: absolute;
    top: 280px;
    left: 690px;
}

.property{
    position: absolute;
    top: 370px;
    left: 690px;
}

.csmsvhotl{
    position: absolute;
    top: 10px;
    left: 920px;
}

.mcsvhotl{
    position: absolute;
    top: 150px;
    left: 920px;
}

.reportarea{
    position: absolute;
    top: 290px;
    left: 920px;
}

.mcselfhelp{
    position: absolute;
    color:rgb(102,102,102);
    font-size: 14px;
    top: 490px;
    left: 920px;
}

.mcselfhelp:hover{
    color:rgb(254,140,0);
}

.supplierrgstra{
    position: absolute;
    color:rgb(102,102,102);
    font-size: 14px;
    top: 530px;
    left: 920px;
}
</style>