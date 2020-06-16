import Sidebar from './src'
Sidebar.install = function (Vue) {
    Vue.component(Sidebar.name, Sidebar)
}
export default Sidebar;