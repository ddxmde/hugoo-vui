<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-15 16:53:06
@version 1.0.0
-->
<template>
    <div  :style="{display:'flex',flex:(offset+span)/24}">
            <div :style="{flex:(offset/(offset+span))}"></div>
            <div :class="className" :style="{flex:(span/(offset+span))}">
            <slot></slot>
            </div>
    </div>
</template>


<style lang="css" scoped>
  


</style>


<script>
  export default {
      name:"f-col",
      props:{
          span:{
              type:Number,
              default:24 //默认是24
          },
          offset:{
              type:Number,
              default:0
          },
          className:{
              type:String,
              default:''
          }
      }
  }
</script>


