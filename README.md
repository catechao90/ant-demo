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


增加nightwatch e2e 测试demo
依赖的package有：selenium-server, nightwatch, chromedriver

```
npm run start

npm run e2e

```
