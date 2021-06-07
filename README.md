# hexo

#cd hexo

#$ npm install 或：npm install -g hexo  全局安装hexo    在git bash下执行
#$ hexo server
#3. 打开浏览器, 在地址栏输入http://localhost:4000
（如果打不开，提示：localhost 意外终止了连接，电脑端口被占用了，hexo server -p 5000，换成5000端口，果断可以访问 http://localhost:5000）

#4.修改_config.yml
添加在最后面:
deploy:
  type:
git repo: https://github.com/xmanhua/xmh-blog.io.git/public
branch: master

#5. 安装部署使用到的git插件.
$ npm install hexo-deployer-git --save

#6. 进行生成网站
$ hexo g

#7. 进行自动部署网站, 注意部署前需要重新生成网站, 每一次修改后都需要重新生成网站并进行部署, 生成网站前第6步.
$ hexo d
#如果在部署出现错误信息如果下: 请参考第5步, 需要安装git插件
ERROR Deployer not found: git

===========================================================================================================================


#一.命令:
#1.新建一篇文章:
hexo new [layout] <title>:
hexo new post CSS-ie6
hexo new page CSS3-Grid.md

编辑模板:
路径:hexo\source\_posts
模板:例CSS-ie6.md

#2.生成静态文件:
hexo g

#3.发表草稿:
$ hexo publish [layout] <filename>

#4.启动服务器。默认情况下，访问网址为： http://localhost:4000/
hexo server

#5.部署网站:
hexo d

#6.清除缓存文件":
hexo clean

