## 闭包
函数都有一个作用域。当一个函数执行的作用域和定义的作用域不同时，肯定会出现闭包

## 图片懒加载的原理
核心：先放置占位符，等到了可视区之后，给src属性赋值

## Vue2响应式原理
每个组件对应一个Watcher 

每个属性对应一个dep

Watcher和Dep是多对多关系，一个watcher中存了多个dep，一个dep中存了多个watcher

## webpack打包流程
1. 找到路口文件 index.js
2. 找到入口文件中引用了哪些模块
3. 执行的时候会从入口文件执行，找到所需依赖，加载依赖
webpack自己实现了一个commonjs模块
require方法改写成了__webpack_require__

## webpack钩子基于tapable
``` js
// 创建hooks
this.hooks = {
    run: new tapable.SyncHook(),
    emit: new tapable.SyncHook(),
}
// 特定时机触发hook
this.hooks.run.call();

// plugins中调用
class MyPlugin{
    apply(compiler){
        compiler.hooks.emit.tab("MyPlugin",()=>{
            console.log('...')
        })
    }
}
```
1. plugins一般顺序没关系，主要看监听的事件;如果监听的事件相同，按监听的顺序触发

## webpack loader
> loader就是一个函数，loadder的唯一作用：就是将一段代码转化成另一段代码
> webpack默认只认识javascript模块，对于一些其它格式的文件模块，可以用loader实现转化
> loader的类型：
pre 前置loder
inline 行内loader
post 后置loader
> options.resolveLoader配置项可以指定加载loader的查找路径

``` js
// 不能用箭头函数：因为要用到this
function myLoader(source){
    return source;
}
// pitch可以中断loader的运行
myLoader.pitch = function(){

}
```


## webpack 开发环境优化
1、按需引用及动态路由
2、启用 uglifyjs-webpack-plugin 缓存
3、关闭 source-map
4、利用 DllPlugin 和 DllReferencePlugin 提取公用库