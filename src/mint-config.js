import {
    Button,
    Badge,
    Cell,
    Tabbar,
    TabItem,
    Header,
    Popup,
    Search,
    Navbar,
    TabContainer,
    TabContainerItem
} from 'mint-ui';

let AntComponents = [Button,Badge, Cell, Tabbar, TabItem, Header, Popup, Search, Navbar, TabContainer, TabContainerItem]

export default {
    install(Vue) { // Vue.use会自动触发该方法,并将Vue构造函数传入该方法中
        AntComponents.forEach(component => {
            console.log(component.name)
            Vue.component(component.name, component) // 某些组件使用该方法无法完全注册
            // Vue.use(component)
        })
    }
}
