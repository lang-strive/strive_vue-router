import Home from './components/Home.vue'
import News from './components/News.vue'
import Msg from './components/msg.vue'

export default {
    routes:[
        {path:'/home',component:Home},
        {path:'/news',component:News,children:[
            {path:'/news/:id',component:Msg}
        ]},
        {path:'*',redirect:'/home'}
        
    ]
}






