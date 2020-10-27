# 前端
规建管一体化-建设监管系统前端，技术架构react + mobx + webpack + typescript

## 目录结构
--build        //包含webpack配置文件，用于打包
--dist         //打包之后的目标目录
--src          //源代码目录
    --application       //应用模块
    --assets       //资源
    --components       //通用组件
    --config     //配置
    --constants     //常量定义
    --hooks             //自定义hooks
    --routers             //路由配置
    --stores             //状态存储
    --utils             //工具
    index.html
    index.tsx           //入口文件

## 安装
npm install

## 运行
npm start
http://localhost:3798

### 开发环境打包
npm run dev-build

### 生产环境打包
npm run build