## 项目介绍

本项目是以 MonoRepo 形式组织的 React 项目 Demo，使用 Lerna 进行管理

## 特点

1. 项目的各个组成部分拆分为独立的子模块，模块间的引用使用 npm 包的形式
2. 入口模块（app）和各功能模块（如 template）均由 create-react-app 创建，可以独立的进行开发、测试、编译、发布
3. 在入口模块中，各功能模块作为一个与路由关联的组件使用，形成模块间的树状层级结构

## npm 脚本

1. `install`后会触发`postinstall`钩子，完成 lerna 的初始化过程，让子模块在 node_modules 中形成`symlink`
2. 第一次运行`start`命令前，请执行`build:type`命令，让各功能模块和基础模块完成编译工作
3. 在功能模块中启动 devServer 时，若基础模块发生变更，需要对对应基础模块执行`build`以更新依赖
