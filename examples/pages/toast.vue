<template>
  <div style="margin-top:10px">
    
    <f-button text="默认Toast" type="info" v-on:btnclick="handlbtn2"></f-button>
    <br/>
    <f-button text="Icon-Toast"  type="info" v-on:btnclick="handlbtn3"></f-button>
    <br/>
    <f-button text="bottom-Toast"  type="info" v-on:btnclick="handlbtn4"></f-button>
    <br/>
    <f-button text="top-Toast" type="info" v-on:btnclick="handlbtn5"></f-button>
    
  </div> 

</template>

<script>
export default {
  name: 'toast',
  data:function(){
    return {
      headerImg5:{
        type:'icon',
        value:'icon-newfill'
      },
      toastOpen:true
    }
  },
  methods:{
    goHome:function(){
      window.history.back(-1);
    },
    handlbtn2:function(){
       this.$ftoast({
          message:"带图标Toast",
          iconClass:'iconfont icon-roundcheckfill'
        });
    },
    handlbtn3:function(){
        this.$ftoast({
          message:"带图标Toast",
          iconClass:'iconfont icon-roundcheckfill'
        });
    },
    handlbtn4:function(){
         this.$ftoast({
          duration:5000,
          position:'bottom',
          message:"bottom-Toast",
          iconClass:'iconfont icon-roundcheckfill'
        });
    },
    handlbtn5:function(){
        this.$ftoast({
          position:'top',
          message:"Top-Toast",
          iconClass:'iconfont icon-roundcheckfill'
        });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
