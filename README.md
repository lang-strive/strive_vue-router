# vue-router

> A Vue.js project


## 安装:
``` bash
import VueRouter from 'vue-router';
Vue.use(VueRouter);
```
## dev
``` bash
"dev":"webpack-dev-server --host localhost --port 8088 --open --history-api-fallback --config webpack.config.js"
```

## history:	--history-api-fallback
``` bash
把路由的所有请求指向index.html文件,就不会中断了

1).在生产环境下可以把404页面设置成index.html就不会中断路由了
2).后台把所有的路径指向index.html就可以了
```

## 渲染其余的vue文件
``` bash
<router-view></router-view>
```

## 重定向:
``` bash
{
path:'*',
redirect:'/index'
}
```

##带参数写法:
``` bash
{
path:'/user/:id',
component:home
}
```

## 获取参数:	
``` bash
1).  {{ $route.params.id}}
2).  export default{
mounted(){
console.log(this.$route.params.id)
}
}
```

## vue-router 跳转:
``` bash
1). <router-link>	通过标签跳转,渲染成a标签
<router-link to="/news" :to="" tag="li" replace  active-class="classname"></router-link>
to="/news"	里面填写路径
:to="变量"		动态的bind绑定一个变量
tag="li"		制定那个标签	
replace		不想保留history历史记录
active-class	绑定一个class高亮


2).编程式导航(push,replace,go)	
编程式导航只需要添加一个标签(随意的标签),
然后给标签添加一个事件即可

通过js跳转(相当于window.location.href)
methods:{
handleClick(){
this.$router.push('/user/123');
this.$router.replace('/user/123');
this.$router.go(-2);
}
}

this.$router.push('/user/123');		跳转页面,会写入历史记录
this.$router.replace('/user/123');	跳转页面,清除历史记录
this.$router.go(-2);				后退两页,里面写页数 
```


## 高级用法:

> meta: router存信息
``` bash
{
path:'/home',
meta:{	
title:'首页'
},
component:Home
}
```

> 创建时候触发:
``` bash
router.beforeEach((to,from,next)=>{    

})
```

> 创建之后触发:
``` bash
router.afterEach((to,from,next)=>{

})
to	即将要进入的目标路由对象
from	当前导航即将要离开的
next	 主动调用进入下一个生命周期
next('/login')	设置路由跳转
next(false)	取消跳转
```

> 更改title标题:
``` bash
router.beforeEach((to,from,next)=>{
window.document.title=to.meta.title;
next();
})
```

> 返回顶端:
``` bash
router.afterEach((to,from,next)=>{
window.scrollTo(0,0);
})
```

> loading加载:
``` bash
开始的时候用beforeEach:
router.beforeEach((to,from,next)=>{

})
```

> 结束的时候用afterEach:
``` bash
router.afterEach((to,from,next)=>{

})
```

> 验证:
``` bash
router.beforeEach((to,from,next)=>{
if(window.localStorage.getItem('token')){
next();
}else{
next('/login');
}
})
```

