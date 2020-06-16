import FButton from './Button';
import FHeader from './Header';
import FTripleHeader from './FTripleHeader';
import FToast from './Toast';
import FCol from './Col';
import FRow from './Row';
import FConfirm from './Confirm';
import FMenu from './Menu';


import './assets/global.less';
//import Vue from 'vue';
const components = [
    FButton, FHeader, FTripleHeader, FToast, FCol, FRow, FConfirm, FMenu
]

const install = function (Vue) {
    if (install.installed) return;
    //components.map(component => Vue.component(component.name, component))
    components.map(item=>{
        Vue.use(item)
    })
}

 if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
} 



export  {
    install,
    FButton,
    FHeader,
    FTripleHeader,
    FToast, FCol, FRow, FConfirm, FMenu
}