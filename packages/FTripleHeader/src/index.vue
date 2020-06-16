<!--
Description
@authors Your Name (you@example.org)
@date    2020-06-11 21:02:01
@version 1.0.0
-->
<template>
    <f-header :type="type" height="60px" >
      <div  slot="title" class="title-col" v-if="titleIcon.value!==''">
        <span v-if="titleIcon.type==='icon'"
        :class="['iconfont title-icon', titleIcon.value]"  v-on:click="$emit('clicktitle')"></span>
        <img v-else :src="titleIcon.value" class="title-img"/>
        <span class="text-cut" style="font-size:12px;margin-top:-3px;" v-on:click="$emit('clicktitle')">{{titleText}}</span>
      </div>
      <div  slot="title" class="title-inline" v-else >
        <span class="text-cut" style="font-size:18px" v-on:click="$emit('clicktitle')">{{titleText}}</span>
      </div>
      <div slot="left" class="left" v-if="leftIcon!==''">
        <span :class="['iconfont left-icon', leftIcon]" 
             v-on:click="$emit('clickleft')"></span>
        <span v-if="leftText!==''" :class="[leftIcon===''?'':'left-text']" v-on:click="$emit('clickleft')">{{leftText}}</span>
      </div>
      <div slot="left" class="left-one" v-else>
        <span :class="[leftIcon===''?'':'left-text']" v-on:click="$emit('clickleft')">{{leftText}}</span>
      </div>
      <div slot="right" class="right">
        <span :class="['iconfont right-icon', rightIcon]"  v-on:click="$emit('clickright')"></span>
      </div>
    </f-header>
</template>

<script>
import FHeader from '../../Header';
  export default {
      name:'f-triple-header',
      components:{FHeader},
      data:function(){
            return{
            }
        },
      props:{
          type:{
              type:String,
              default:""
          },
          titleText:{
              type:String,
              default:""
          },
          titleIcon:{
              type:Object,
              default:function(){
                return{
                    type:'icon',
                    value:''
                }
              }
          },
          leftText:{
              type:String,
              default:""
          },
          leftIcon:{
              type:String,
              default:""
          },
          rightIcon:{
              type:String,
              default:''
          }
      },
      
      methods:{
          isImage:function(iconpath){
              if(iconpath===''||iconpath===null) return false;
              var ext = iconpath.substr(iconpath.lastIndexOf(".")+1);
              return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
          }
      }
      
  }
</script>

<style lang="less" scoped>
.box-shadow{
    box-shadow: 2px 0px 2px @primary;
}
.title-col{
    align-items: center;
    justify-content:center;
    flex-direction:column;
    display:flex;
    height:100%;
    width:100%;
}
.title-inline{
    align-items: center;
    justify-content:center;
    display:flex;
    height:100%;
    width:100%;
}
  .title-icon{
      font-size:34px;
  }
  .title-img{
      width:34px;
  }
  .left{
      height:100%;
      margin-left:5px;
      display:flex;
      font-size:14px;
      justify-content:center;
      align-items: center; 
  }
  .left-one{
     height:100%;
      margin-left:15px;
      display:flex;
      font-size:14px;
      align-items: center;  
  }
  .left-icon{
      font-size:26px;
      margin-right:3px;
  }
  .left-text{
      border-left:1px solid @info;
      padding-left:3px;
  }
  .right{
      height:100%;
      display:flex;
      font-size:14px;
      letter-spacing:1px;
      justify-content:center;
      align-items: center; 
  }
  .right-icon{
      font-size:26px;
  }
  .text-cut{
      max-width:80%;
      padding:0px 20px;
    white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/ 
        overflow: hidden; /*隐藏超出单元格的部分*/
        text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
  }
</style>
