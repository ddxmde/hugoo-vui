<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-15 20:28:15
@version 1.0.0
-->
<template>
        
  <transition :name="'confirm-trans-'+position">
  <div  v-show="show" :class="['f-confirm','f-confirm-'+position,'content-color-'+type,'box-shadow-max-info']">
        <div v-if="title!==''" class="f-confirm-title">
            {{title}}
        </div>
        <div v-else>
            <slot name="title"></slot>
        </div>
        <div v-if="content!==''" class="f-confirm-content">
            <p>{{content}}</p>
        </div>
        <div v-else class="f-confirm-content">
            <slot name="content"></slot>
        </div>
        <div v-if="cancelText!==''||confirmText!==''" class="f-confirm-btns">
            <p>
                <f-button :text="cancelText" :type="cancelType" size="normal"
                    v-on:btnclick="$emit('cancle')"></f-button>
                <f-button :text="confirmText" :type="confirmType" size="normal"
                    v-on:btnclick="$emit('confirm')"></f-button>
            </p>
        </div>
        <div v-else class="f-confirm-btns">
            <slot name="btns"></slot>
        </div>
  </div>      
  </transition>
  
</template>

<script>
  export default {
      name:'f-confirm',
      props:{
          position:{
              type:String,
              default:'bottom'
          },
          type:{
              type:String,
              default:'default'
          },
          title:{
              type:String,
              default:''
          },
          content:{
              type:String,
              default:''
          },
          cancelText:{//取消按钮 为空时不显示
              type:String,
              default:''
          },
          cancelType:{//确认按钮 为空时不显示
              type:String,
              defalut:'default'
          },
          confirmText:{
              type:String,
              default:''
          },
          confirmType:{
              type:String,
              defalut:'default'
          },
          showTime:{
              type:Number,
              default:0 //为0时默认不自动消失
          },
          show:{
              type:Boolean,
              defalut:false
          }
      },
      methods:{
          
      },
      mounted:function(){
          console.log(this.$root.$el.style.offsetHeight)
          if(this.showTime!==0){
              this.show = false;
          }
          
      },
      watch:{
          show:function(){
              if(this.show){
                  this.$nextTick(() => {
                  //console.log(this.$el)
                    const bodyheight = window.screen.availHeight||document.documentElement.clientHeight||document.body.clientHeight ;
                    //console.log(bodyheight)
                    const domheight = this.$el.offsetHeight;
                    //console.log(bodyheight)
                    console.log(this.$el)
                    if(this.position=='middle'){
                            const top = (bodyheight-domheight)/2;
                            this.$el.style.top = top+'px';
                            console.log(bodyheight+"-"+domheight+"-"+top)
                    }
                })
              }else{
                  //this.$el.style.zIndex = -999;
              }
              
          }
      }
  }
</script>

<style lang="less" scoped>
  .confirm-trans-top-enter-active{
      animation:bounce-in-top .5s;
  }
  .confirm-trans-top-leave-active {
    animation: bounce-in-top .5s reverse;
    }
  .confirm-trans-middle-enter-active{
      animation:bounce-in-middle .5s;
  }
  .confirm-trans-middle-leave-active {
    animation: bounce-in-middle .5s reverse;
    }
    .confirm-trans-bottom-enter-active{
      animation:bounce-in-bottom .5s;
  }
  .confirm-trans-bottom-leave-active {
    animation: bounce-in-bottom .5s reverse;
    }
  @keyframes bounce-in-bottom {
    0% {
        transform: scale(1,0);
        transform-origin:bottom;
    }
    100% {
        transform: scale(1);
        transform-origin:bottom;
    }
  }
  @keyframes bounce-in-top {
    0% {
        transform: scale(1,0);
        transform-origin:top;
    }
    100% {
        transform: scale(1);
        transform-origin:top;
    }
  }
  @keyframes bounce-in-middle {
  0% {
    transform: scale(1,0);
    transform-origin:center;
  }
  100% {
    transform: scale(1);
  }
}
</style>
