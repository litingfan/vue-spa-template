## 项目简介

基于 vue.js 的前端开发环境，用于前后端分离后的单页应用开发，可以在开发时使用 ES Next、scss 等最新语言特性。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`、`whatwg-fetch`
- 编译/打包工具：`webpack`、`babel`、`node-sass`
- 单元测试工具：`karma`、`mocha`、`sinon-chai`
- 本地服务器：`express`

## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   └── title.vue
    │   ├── config                          公共配置目录
    │   │   ├── config.js                       常量配置
    |   |   ├── fetch.js                        请求接口
    |   |   └── nav.js                          目录
    │   ├── fetchApi                        请求接口
    │   │   └── auth.js                         用户数据    
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes                          前端路由
    │   │   └── index.js
    │   ├── vuex                           应用级数据（state）
    |   |   ├── modules                     各个state
    |   |   |   └── auth.js                 
    │   │   └── store.js
    │   └── views                           页面目录
    │       ├── hello.vue
    │       └── notfound.vue
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            ├── index.js                        入口脚本
            ├── karma.conf.js                   karma配置文件
            └── specs                           单测case目录
                └── Hello.spec.js

## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后安装 cnpm 命令：

        npm install -g cnpm --registry=https://registry.npm.taobao.org


## 命令列表：

    #开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器，浏览器访问 http://localhost:8081
    npm run dev

    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
    npm run build

    #运行构建服务器，可以查看构建的页面
    npm run build-server

    #运行单元测试
    npm run unit
    
## 模块化

开发时可以使用 ES2015 module 语法，构建时每个文件会编译成 amd 模块。

## 单元测试

可以为每个组件编写单元测试，放在 `test/unit/specs` 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 `.spec.js`结尾。
执行 `npm run unit` 时会遍历所有的 `spec.js` 文件，产出测试报告在 `test/unit/coverage` 目录。


## 相关资源

- vue.js 官网：[https://vuejs.org/](https://vuejs.org/)
- vue.js 中文网： [http://vuefe.cn/](http://vuefe.cn/)
- vue-router 文档：[http://router.vuejs.org/zh-cn/index.html/](http://router.vuejs.org/zh-cn/index.html)
- vuex 文档：[http://vuex.vuejs.org/](http://vuex.vuejs.org/)
- webpack 文档：[https://webpack.github.io/docs/](https://webpack.github.io/docs/)
- ES2015 入门教程：[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)
- scss 文档：[http://sass-lang.com/documentation/file.SASS_REFERENCE.html](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- mocha 文档: [http://mochajs.org/](http://mochajs.org/)
- express 中文官网：[http://expressjs.com/zh-cn/](http://expressjs.com/zh-cn/) 
