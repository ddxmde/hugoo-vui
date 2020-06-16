<template>
  <div style="margin-top:10px">
    <f-button style="margin-top:10px"  text="自定义标题"  type="info"
        v-on:btnclick="showConfirm1()"></f-button>
    <f-button style="margin-top:10px"  text="顶部位置"  type="info"
        v-on:btnclick="showConfirm2()"></f-button>
    <f-button style="margin-top:10px"  text="中间位置"  type="info"
        v-on:btnclick="showConfirm3()"></f-button>
    <f-button style="margin-top:10px"  text="自定义风格type"  type="info"
        v-on:btnclick="showConfirm4()"></f-button>
    <f-button style="margin-top:10px"  text="自定义按钮风格"  type="info"
        v-on:btnclick="showConfirm5()"></f-button>

    <f-confirm :show="confirmShow2" position="top" title="电量剩余情况" content="请及时给手机充电，确保正常使用"
        cancelText="取消" cancelType="info"  confirmText="确认" confirmType="primary"
        v-on:cancle="confirmShow2=false" v-on:confirm="confirmShow2=false"
    ></f-confirm>
    <f-confirm :show="confirmShow1"   
        cancelText="取消" cancelType="info"  confirmText="确认" confirmType="primary"
        v-on:cancle="confirmShow1=false" v-on:confirm="confirmShow1=false"
    >
        <div slot="title" style="color:#FFF;width:100%;font-size:18px;text-align:center;padding:10px 0;background:#2f4858;">
            <span class="iconfont icon-same" style="font-size:26px;"></span> 用户协议
        </div>

        <div slot="content" style="height:200px;overflow:scroll">
            {{xieyi.text}}
        </div>
    </f-confirm>
    <f-confirm :show="confirmShow3" type="info"  position="middle" content="根据用户使用协议，您的操作目前存在较高风险，请确认您的操作实属本人，且本平台不承担任何法律奉献。接受请按确认，否则点击取消。"
        cancelText="取消" cancelType="dark"   confirmText="确认" confirmType="primary"
        v-on:cancle="confirmShow3=false"  v-on:confirm="confirmShow3=false">
        <div slot="title" class="content-color-dark" style="width:100%;font-size:18px;text-align:center;padding:10px 0;">
            <span class="iconfont icon-same" style="font-size:26px;"></span> 自定义标题
        </div>
    </f-confirm>
    <f-confirm :show="confirmShow4" type="danger"  position="middle" title="风险提示" content="根据用户使用协议，您的操作目前存在较高风险，请确认您的操作实属本人，且本平台不承担任何法律奉献。接受请按确认，否则点击取消。"
        cancelText="取消" cancelType="info"   confirmText="确认" confirmType="dark"
        v-on:cancle="confirmShow4=false" v-on:confirm="confirmShow4=false"
    ></f-confirm>
    <f-confirm :show="confirmShow5" position="middle" title="风险提示" content="根据用户使用协议，您的操作目前存在较高风险，请确认您的操作实属本人，且本平台不承担任何法律奉献。接受请按确认，否则点击取消。"
        cancelText="取消" cancelType="dark"   confirmText="确认" confirmType="danger"
        v-on:cancle="confirmShow5=false" v-on:confirm="confirmShow5=false"
    ></f-confirm>
  </div>
</template>

<script>


export default {
  name: 'confirm',
  data:function(){
    return {
      confirmShow1:false,
      confirmShow2:false,
      confirmShow3:false,
      confirmShow4:false,
      confirmShow5:false,
      xieyi:{
          text:`使用规则

    用户注册成功后，知乎将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。

    用户须对在知乎的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人；不得利用他人的名义发布任何信息；不得恶意使用注册帐号导致其他用户误认；否则知乎有权立即停止提供服务，收回其帐号并由用户独自承担由此而产生的一切法律责任。

    用户直接或通过各类方式（如 RSS 源和站外 API 引用等）间接使用知乎服务和数据的行为，都将被视作已无条件接受本协议全部内容；若用户对本协议的任何条款存在异议，请停止使用知乎所提供的全部服务。

    `
      }
    }
  },
  methods:{
    showConfirm1:function(){
        this.confirmShow1 = true;
    },
    showConfirm2:function(){
        this.confirmShow2 = true;
    },
    showConfirm3:function(){
        this.confirmShow3 = true;
    },
    showConfirm4:function(){
        this.confirmShow4 = true;
    },
    showConfirm5:function(){
        this.confirmShow5 = true;
    }
  }
}
</script>

<style>
</style>
