<template>
  <div id="app">
   <f-triple-header style-mode="primary" class="box-shadow-3 border-3"
                  title-text="FloatUI" 
                  left-text="主页" left-icon="icon-home"
                  right-icon="icon-info"
                  v-on:clickleft="handleClickLeft"
                  v-on:clicktitle="taptitle()"
                  v-on:clickright="open1()"
    ></f-triple-header>
    
    <router-view>
      
    </router-view>

    <f-menu className="fmenu" type="primary"  :show="fmenuShow1">
      <div class="openBtn">
        <f-button type="info" style="bottom:20px;" v-on:btnclick="open2()"
        text="右侧menu样式"></f-button>
      </div>
    </f-menu>
    <f-menu className="fmenu" type="info"  position="right" :show="fmenuShow2">
      <div class="openBtn">
        <f-button type="info" style="bottom:20px;" v-on:btnclick="open1()"
        text="左侧menu样式"></f-button>
      </div>
    </f-menu>
  </div>
</template>

<script>
import{FToast} from 'hugoo-vui';
export default {
  name: 'App',
  data: function(){
    return {
      pages:[],
      fmenuShow1:false,
      fmenuShow2:false
    }
  },
  components: {
    
  },
  methods:{
    goto:function(tar){
      this.$refs[tar.text][0].loading=true
      console.log(this.$refs[tar.text][0].loading)
      //tar.loading =true;
      this.$router.push(tar.text)
    },
     handleClickLeft: function(){
      window.history.back(-1);
    },
    taptitle:function(){
      //Tips('tips 插件')
      FToast('toast调用')
    },
    open1:function(){
      
      this.fmenuShow2 = false;
      this.fmenuShow1 = true;
    },
    open2:function(){
      this.fmenuShow1 = false;
      this.fmenuShow2 = true;
    }
  },
  mounted:function(){
    //let paths=[]
    // this.$router.options.routes.map(item=>{
    //   let text = item.path.substr(1);
    //   let loading = false;
    //   paths.push({text,loading})
    // })
    // this.pages = paths.slice(1);
    this.$router.push('/menus')
  }
  /* created:function(){
    var _that = this;
    this.pages = _that.$router.options.routes
    //console.log(_that.$router.options.routes)
  } */
}
</script>

<style scoped>
.fmenu{
  width:80%!important;
  height:100vh;
}
.openBtn{
  position:absolute;
  width:100%;
  bottom:20px;
}
</style>
