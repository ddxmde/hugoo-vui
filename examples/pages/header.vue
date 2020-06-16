<template>
  <div style="margin-top:10px">
    
    <f-triple-header class="box-shadow-3 border-3"
                    style-mode="success" 
                  title-text="success" 
                  left-text="主页"
                  right-icon="icon-cart"
                  v-on:click-left="handleClickLeft"
                  v-on:click-title="handleClickTtile"
                  v-on:click-right="handleClickRight"
    ></f-triple-header>
    <br/>
    <f-triple-header style-mode="warning" class="box-shadow-4 border-4"
                  title-text="warning" 
                  :title-icon="headerImg2"
                  
                  v-on:click-left="handleClickLeft"
                  v-on:click-title="handleClickTtile"
                  v-on:click-right="handleClickRight"
    ></f-triple-header>
    <br/>
    <f-triple-header style-mode="danger" class="box-shadow-4 border-4"
                  title-text="danger" 
                  :title-icon="headerImg3"
                  left-text="" left-icon="icon-shop "
                  right-icon="icon-service "
                  v-on:click-left="handleClickLeft"
                  v-on:click-title="handleClickTtile"
                  v-on:click-right="handleClickRight"
    ></f-triple-header>
    <br/>
    <f-triple-header class="box-shadow-4 border-4" style-mode="info" 
                  :title-icon="headerImg4"
                  title-text="信息提示"
                  left-text="Info配色" 
                  right-icon="icon-info"
                  v-on:click-left="handleClickLeft"
                  v-on:click-title="handleClickTtile"
                  v-on:click-right="handleClickRight"
    ></f-triple-header>
    <br/>
    <f-triple-header class="box-shadow-1 border-1" style-mode="dark" 
                  title-text="dark" 
                  :title-icon="headerImg5"
                  left-text="缅怀" left-icon="icon-clothes "
                  right-icon="icon-change "
                  v-on:click-left="handleClickLeft"
                  v-on:click-title="handleClickTtile"
                  v-on:click-right="handleClickRight"
    ></f-triple-header>
  </div> 

</template>

<script>


export default {
  name: 'header',
  data:function(){
    return {
      headerImg1:{
        type:'img',
        value:require('../assets/logo.png')
      },
      headerImg2:{
        type:'icon',
        value:"icon-lightfill"
      },
      headerImg3:{
        type:'icon',
        value:"icon-round_close_light"
      },
      headerImg4:{
        type:'img',
        value:require('../assets/logo.png')
      },
      headerImg5:{
        type:'icon',
        value:'icon-group_fill'
      }
    }
  },
  methods:{
    handleClickLeft: function(){
      window.history.back(-1);
    },
    handleClickTtile:function(){
      console.log("点击标题")
    },
    handleClickRight:function(){
      console.log("点击→按钮")
    }
  }
}
</script>

<style>
</style>
