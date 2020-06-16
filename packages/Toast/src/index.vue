<!--
toast.vue
@authors Your Name (you@example.org)
@date    2020-06-13 15:22:57
@version 1.0.0
-->
<template>
  <transition name="f-toast-pop">
    <div class="f-toast" v-show="visible" :class="'pos-'+position" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="f-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="f-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>
<style lang="less" scoped>

@comp-prefix: .f-toast;
@trans-prefix: @{comp-prefix}-pop;

@{comp-prefix}{
    position: fixed;
    border-radius: 5px;
    max-width: 80%;
    background: #999;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: opacity .3s linear;
    @{comp-prefix}-icon{
        display: block;
        text-align: center;
        font-size: 56px;
    }
    @{comp-prefix}-text{
        font-size: 14px;
        display: block;
        text-align: center;
    }
    
    @{trans-prefix}-pop-enter-active, @{trans-prefix}-pop-leave-active {
        opacity: 0;
    }
}
.pos-top{
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
}
.pos-middle{
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.pos-bottom{
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
}
</style>
<script>
  export default {
      name:'f-toast',
      props:{
          message:String,
          className:{
              type:String,
              default:""
          },
          position:{
              type:String,
              default:'middle'
          },
          iconClass:{
              type:String,
              default:''
          }
      },
      data(){
          return{
              visible:false
          };
      }
  }
</script>

