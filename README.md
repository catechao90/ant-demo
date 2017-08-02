# 基于create-react-app产生的ant-design的项目，支持e2e test（使用的是nightwatch）

dev：
```
$ git clone https://github.com/catezhao1985/ant-demo.git 
$ cd ant-demo
$ yarn
$ yarn start
```

prod：
```
$ yarn build
```

  - 支持 post&get mock data
  - 支持theme自定义
  - 封装了fetch方法

mock data存放路径：

![](http://catezhao1985.github.io/ant-demo1.png)


ant design theme 修改

![](http://catezhao1985.github.io/ant-demo2.png)


use nightwatch 因为是win的机器，所以nightwatch只能安装成全局的

```
npm install -g nightwatch

npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start

npm run start

npm run e2e

```