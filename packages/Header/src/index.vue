<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-11 15:38:33
@version 1.0.0
-->
<template>
  <div :class="[type===''?'f-header-default':'content-color-'+type,'f-header']" 
        :style="{height:height}">
    <div class="f-header-left">
      <slot name="left"></slot>
    </div>
    <div class="f-header-title">
      <p v-if="title" style="line-height:100%;">{{title}}</p>
    <slot v-else name="title"></slot>
    </div>
    <div class="f-header-right" >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
      name:'f-header',
      props:{
        type:{
          type:String,
          default:''
          },
        title:{
          type:String,
          default:""
        },
        height:{
          type:String,
          default:'50px'
        }
      }
  }
</script>

<style lang="less" scoped>

.f-header{
  width:100vw;
  display: flex;
  flex-direction: row;
  
}
.f-header-title{
    width:50%;
    font-weight:600;
    font-size:18px;
    height:100%;
    letter-spacing:1px;
}

  .f-header-light{
      background:#FAFAFA;
      color:#333;
      border-bottom:1px solid #CCC;
      
  }
.f-header-left{
  flex:1;
}
.f-header-right{
  flex:1
}
</style>
