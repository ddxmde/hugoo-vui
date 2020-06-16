<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-15 16:53:06
@version 1.0.0
-->
<template>
  <div :class="['f-row',className]">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
  .f-row{
    width:100%;
    display:flex;
    display: flex;
    display:-webkit-flex;
    flex-direction:row;
    justify-content:flex-start;
  }
</style>

<script>
  export default {
      name:"f-row",
      props:{
          gutter:{
              type:Number,
              default:0
          },
          className:{
              type:String,
              default:""
          }
      },
      data:function(){
        return{
          childgutter:this.gutter
        }
      },
      mounted:function(){
        //console.log(this.$children)
        var mchildren = this.$children;
        //var mchildren = Array.prototype.slice.call(children,1);
        // console.log(mchildren)
        // mchildren.map(node=>{
        //   console.log(node)
        //   node.style.marginLeft = this.gutter+'px';
        // })
        //console.log(mchildren)
        //console.log(this.$children.length)
        for(var i=1;i<mchildren.length;i++){
          //console.log(mchildren[i])
          var e =  mchildren[i].$el;
          //console.log(e)
          e.style.marginLeft = this.gutter+'px';
        }

      }
  }
</script>


