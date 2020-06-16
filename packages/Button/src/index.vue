<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-11 13:08:50
@version 1.0.0
-->
<template>
  <div class="x-button" 
    :class="['content-color-'+type,'box-shadow-'+type,{'x-button-disable':disable},
    'x-button','btn-size-'+size]"
    
    v-on:click="$emit('btnclick')">

    

    <slot></slot>
    <span v-if="icon!==''" 
        :class="['iconfont btn-icon', icon]"></span>
    <span v-if="text!==''" >{{text}}</span>
    
    <div :class="['button-loading','btn-loading-'+size]" v-if="loading">
        <div class="iconfont icon-loading1"></div>
    </div>

  </div>
</template>

<script>
  export default {
      name:'f-button',
      props:{
          type:{
            type:String,
            default:'primary'
          },
          disable:{
            type:Boolean,
            default:false
          },
          loading:{
            type:Boolean,
            default:false
          },
          width:{
            type:Number,
            default:0
          },
          text:{
            type:String,
            default:''
          },
          size:{
            type:String,
            default:'large'
          },
          icon:{
            type:String,
            default:''
          }
      }
  }
</script>

<style lang="less" scoped>
  .x-button{
    text-align: center;
    &:hover,
    &:focus{
      cursor:pointer;
      }
  }
  .x-button-disable{
    cursor:not-allowed;
    opacity:0.6;
    box-shadow:0 0 0;
    &:hover,
    &:focus{
      box-shadow:0 0 0;
      }
  }
  .btn-icon{
    font-size:120%;
    margin-left:5px;
  }
  .button-loading{
    position:relative;
    margin-left:0;
    width:100%;
    height:100%;
    opacity:0.8;
    background:@dark;
    
      vertical-align: middle;
    div{
      
      display:inline-block;
      color:#ffffff;
     animation: rotate 3s linear infinite;
    }
    @keyframes rotate{from{transform: rotate(0deg)}
      to{transform: rotate(360deg)}
      }
  }
  .btn-loading-large{
    margin-top:-41px;
  }
  .btn-loading-normal{
    margin-top:-41px;
  }
  .btn-loading-small{
    margin-top:-31px;
  }
</style>
