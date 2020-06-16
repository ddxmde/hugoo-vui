<template><div>
    <f-button style="margin-top:10px" v-for="(item,inx) in pages" :key="inx" 
        :text="item.text" :loading="item.loading" type="info" :ref="item.text"
        v-on:btnclick="goto(item)"></f-button>
  <br/>
  </div>
</template>

<script>


export default {
  name: 'menus',
  data: function(){
    return{
      pages:[]
    }
  },
  components: {
    
  },
  methods:{
    goto:function(tar){
      this.$refs[tar.text][0].loading=true
      console.log(this.$refs[tar.text][0].loading)
      //tar.loading =true;
      this.$router.push(tar.text)
    }
  },
  mounted:function(){
    //console.log('tiaozhuan')
    //console.log(this.$router)
    let paths=[]
    this.$router.options.routes.map(item=>{
      let text = item.path.substr(1);
      let loading = false;
      paths.push({text,loading})
    })
    this.pages = paths.slice(1);
  }
}
</script>
