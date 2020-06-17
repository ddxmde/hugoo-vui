import Vue from 'vue';
import toasttemp from './src/index.vue';
const ToastConstructor = Vue.extend(toasttemp);
//const ToastConstructor = Vue.extend(require('./src/index.vue'));
// const ToastConstructor = new Vue({
//     render: h => h(App),
// }).$mount('#app')

let toastPool=[];

let getAnInstance = ()=>{
    if(toastPool.length > 0){
        let ins = toastPool[0];
        toastPool.splice(0,1);
        return ins;
    }
    const instance = new ToastConstructor({
        el:document.createElement("div")
    });
    //instance.$mount(document.createElement("div"));
    return instance;
};

let returnAnInstance = instance =>{
    if(instance){
        toastPool.push(instance);
    }
};

let removeDom = event =>{
    if(event.target.parentNode){
        event.target.parentNode.removeChild(event.target);
    }
};

ToastConstructor.prototype.close = function(){
    this.visible = false;
    this.$el.addEventListener('transitioned',removeDom);
    this.closed = true;
    returnAnInstance(this);
}

const FToast = (options={})=>{
    let duration = options.duration || 1000;

    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.className = options.className || '';
    instance.iconClass = options.iconClass || '';
    
    document.body.appendChild(instance.$el);
    Vue.nextTick(function () {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        ~duration && (instance.timer = setTimeout(function () {
            //console.table(instance.$el)
            if (instance.closed) return;
            instance.close();
        }, duration));
    });
    return instance;
}

FToast.install=function(Vue){
    Vue.component('FToast',FToast)
    Vue.$ftoast = Vue.prototype.$ftoast = FToast;
}
export default FToast;