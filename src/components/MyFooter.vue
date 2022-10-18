<template>
  <div class="footer">
    <div class="botnav">
      <BottomNav></BottomNav>
    </div>
    <div class="aboutinfo">
      <AboutInfo></AboutInfo>
    </div>
    <div class="copyinfo">
      <CopyrightInfoVue></CopyrightInfoVue>
    </div>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import AboutInfo from './AboutInfo.vue'
import CopyrightInfoVue from './CopyrightInfo.vue'

export default {
  name:'MyFooter',
  components:{BottomNav,AboutInfo,CopyrightInfoVue},
  setup(){
    return {

    }
  }
}
</script>

<style scoped>
.footer{
    height: 746px;
    background-color: rgb(248,248,248);
}

.botnav{
  width: 1210px;
  height: 340px;
  border-bottom: 1px solid rgb(229,229,229);
  margin: 0 auto;
}

.aboutinfo{
  padding-top: 60px;
}
</style>