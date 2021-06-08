---
title: hexo-world
date: 2019-03-01
updated: 2020-04-19
tags:
			- hexo
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start
``` bash
npm install 或：npm install -g hexo  //全局安装hexo
hexo server  //启动服务器
//打开浏览器, 在地址栏输入http://localhost:4000（如果打不开，提示：localhost 意外终止了连接，
//电脑端口被占用了，hexo server -p 5000，换成5000端口，果断可以访问 http://localhost:5000）
```
More info: [Server](https://hexo.io/docs/server.html)


## 部署网站需要的配置
``` bash
添加在_config.yml最后面:
deploy:
  type:
git repo: https://xmh.com/my/my.io.git/  //远程文件
branch: master  //远程分支
```
## 安装部署使用到的git插件.
``` bash
npm install hexo-deployer-git --save
```


## 新建一篇文章
``` bash
hexo new "My New Post"
hexo new post CSS-ie6
hexo new page CSS3-Grid.md
```
## 编辑模板
``` bash
路径:hexo\source\_posts
模板:例CSS-ie6.md
```
More info: [Writing](https://hexo.io/docs/writing.html)

## 发表草稿
``` bash
hexo publish [layout] <filename>
```
## 生成静态文件
``` bash
hexo g
```
More info: [Generating](https://hexo.io/docs/generating.html)

## 部署网站

``` bash
hexo d
//如果在部署出现错误信息如果下: ERROR Deployer not found: git
//需要安装git插件: npm install hexo-deployer-git --save
//进行自动部署网站, 注意部署前需要重新生成网站hexo g, 每一次修改后都需要重新生成网站
```
More info: [Deployment](https://hexo.io/docs/deployment.html)

## 清除缓存文件
``` bash
hexo clean
```