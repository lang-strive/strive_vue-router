import Home from './components/Home.vue'
import News from './components/News.vue'
import Msg from './components/msg.vue'


const routers =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/news',
        component:News,
        children:[
            {
                path:'/news/:id',
                component:Msg
            }
        ]
    },
    {
        path:'*',
        redirect:'/home'
    }
]

const RouterConfig = {
    mode: 'history',
    base: __dirname,
    routes: routers
}
export default RouterConfig






