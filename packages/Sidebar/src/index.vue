<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-16 12:08:48
@version 1.0.0
-->
<template>
    <transition :name="'menu-trans-'+position">
        <div v-show="show" :class="['f-menu-wrapper','content-color-'+type,'f-menu-wrapper-'+position,'content-color-'+type,'box-shadow-max-'+type,className]"
                @touchmove="handleTouch" @touchstart="touchStart">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
  export default {
      name:'f-sidebar',
      data:function(){
          return {
              touch_start_x:0,
              touch_start_y:0
          }
      },
      props:{
          position:{
              type:String,
              default:'left' //只提供left right
          },
          type:{
              type:String,
              default:'default'
          },
          className:{
              type:String,
              default:''
          },
          show:{
              type:Boolean,
              default:false
          }
      },
      methods:{
          touchStart:function(event){
            event.preventDefault()
            this.startX = event.changedTouches[0].pageX
            this.startY = event.changedTouches[0].pageY
          },
          handleTouch:function(event){
                var _that = this;
                //console.log("进入点击事件")
                //event.preventDefault()
                var moveEndX = event.changedTouches[0].pageX
                var moveEndY = event.changedTouches[0].pageY
                var move_x = Math.abs(moveEndX - _that.startX)
                var move_y = Math.abs(moveEndY - _that.startY)
                var this_width = this.$el.offsetWidth
                //console.log(move_x+":"+move_y)
                if(move_x>(this_width/2)&&move_y<30){
                    //console.log("赋值canshow")
                    _that.$emit('selfclose')
                    //console.log(this.canshow)
                }
          }
      }
  }
</script>

<style lang="less" scoped>
  .f-menu-wrapper{
      position:fixed;
      width:auto;
      top:0;

  }
  .f-menu-wrapper-left{
      left:0px;
  }
  .f-menu-wrapper-right{
      right:0px;
  }
    .menu-trans-left-enter-active{
        animation:bounce-in-left .5s;
    }
    .menu-trans-left-leave-active {
        animation: bounce-in-left .5s reverse;
    }
    .menu-trans-right-enter-active{
      animation:bounce-in-right .5s;
    }
    .menu-trans-right-leave-active {
        animation: bounce-in-right .5s reverse;
    }

  @keyframes bounce-in-left {
    0% {
        transform: scale(0,1);
        transform-origin:left center;
    }
    100% {
        transform: scale(1,1);
        transform-origin:left center;
    }
  }
  @keyframes bounce-in-right {
    0% {
        transform: scale(0,1);
        transform-origin:right;
    }
    100% {
        transform: scale(1);
        transform-origin:right;
    }
  }
</style>
