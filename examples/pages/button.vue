<template>
  <div style="margin-top:10px">
    
    <f-button text="default-默认样式"></f-button><br/>
    <f-button text="default danger" type="danger" loading disable></f-button><br/>
    <f-button text="default success"   type="success"></f-button><br/>
    <f-button text="img slot自定义图标" type="warning"><img src="../assets/logo.png"/></f-button><br/>
    <f-button text="default info"   type="info"></f-button><br/>
    <f-button text="default dark" icon="icon-light" type="dark"></f-button>
    <br/>
    <p>
    <f-button text="即刻送达"  icon="icon-deliver_fill" size="normal" type="primary"></f-button>
    <f-button text="success" type="success" size="normal" icon="icon-check"></f-button>
    </p>
    <p>
    <f-button text="警告" size="normal" type="warning">
      <img src="../assets/logo.png"/>
    </f-button>
    <f-button text="信息" type="info" size="normal"></f-button>
    </p>
    <p>
    <f-button text="提交" loading size="normal" type="dark"></f-button>
    <f-button text="danger"  size="normal" type="danger"></f-button>
    </p>
    <p>
      <f-button text="primary"  size="small" type="primary"></f-button>
      <f-button text="success" type="success" icon="icon-check" size="small"></f-button>
      <f-button text="查看" size="small" type="warning"><img src="../assets/logo.png"/></f-button>
      <f-button text="info" size="small" type="info"></f-button>
    </p>
  </div> 

</template>

<script>


export default {
  name: 'button',
  data:function(){
    return {
      headerImg5:{
        type:'icon',
        value:'icon-newfill'
      }
    }
  },
  methods:{
    goHome:function(){
      window.history.back(-1);
    }
  }
}
</script>

<style>

</style>
