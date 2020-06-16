<template>
  <div style="margin-top:10px">
    <f-row className="myrow">
        <f-col className="mycol"></f-col>
    </f-row>
    <f-row className="myrow" :gutter="1">
        <f-col className="mycol" v-for="i in 24" :key="i"></f-col>
        
    </f-row>
    <f-row className="myrow" :gutter="20">
        <f-col className="mycol"></f-col>
        <f-col className="mycol"></f-col>
    </f-row>
    <f-row className="myrow" :gutter="10">
        <f-col className="mycol" :span="5"></f-col>
        <f-col className="mycol" :span="14"></f-col>
        <f-col className="mycol" :span="5"></f-col>
    </f-row>
    <f-row className="myrow" :gutter="10">
        <f-col className="mycol" :span="5" :offset="7"></f-col>
        <f-col className="mycol" :span="10"></f-col>
    </f-row>
    <f-row className="myrow" :gutter="10">
        <f-col className="mycol" :span="10"></f-col>
        <f-col className="mycol" :span="7" :offset="7"></f-col>
    </f-row>
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
.myrow{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:15px;background: #e5e9f2;
}
.mycol{
    background: #99a9bf;
    height:40px;
}
</style>
