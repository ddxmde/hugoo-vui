let Tips = (msg)=>{
    alert(msg);
}

Tips.install = function(Vue){
    Vue.$tips=Vue.prototype.$tips = Tips;
}

export default Tips;