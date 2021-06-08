---
title: git 常用命令
date: 2015-10-19 19:28:50
updated: 2017-03-01 12:00:00
tags:
			- git
---

## 创建版本库
``` bash
git clone <url>               // 克隆远程版本库
git init                               //初始化本地版本库

```
## 修改和提交
``` bash
git status                                                         //查看状态
git diff                                                               //查看变更内容
git add .                                                           //跟踪所有改动过的文件
git add <file>                                                 //跟踪指定的文件
git add --all                                                    //提交全部
git mv <old> <new>                                    //文件改名
git rm <file>                                                   //删除文件
git rm --cached <file>                                //停止跟踪文件但不删除
git commit -m "commit message"      //提交文件
git commit --amend                                 //修改最后一次提交

```
#### 常用提交流程
``` bash
git status 
git pull -r                         
git add ABC-themes/abc/      //添加abc文件夹
git commit -m "[ABC-15] "    //提交消息
git push
```
## 查看提交历史
``` bash
git log                                                   //查看提交历史
git log -p <file>                                 //查看指定文件的提交历史
git blame <file>                                //以列表方式查看指定文件的提交历史
```
## 撤消
``` bash
git reset --hard HEAD                 
//撤消工作目录中所有示提交文件的修改内容，撤消后就找不回来了,是将工作区、暂存取和HEAD保持一致

git reset --hard                              
//放弃本地修改,是将咱暂存区和HEAD的提交保持一致

git checkout HEAD <file>          //撤消指定未提交文件的修改内容
git checkout -- .                           //删除本地所有改动           
git reflog                                          //可以查看所有分支的所有操作记录
//用git log则是看不出来被删除的commitid; git reflog包括被删除的commitid，我们就可以买后悔药，恢复到被删除的那个版本
git revert <commit>                    //撤销 某次操作
```
#### 没有PUSH之前, 取消前次commit,回到上一次提交（adbe592）
``` bash
git reflog
git reset adbe592
```
#### 撤消指定的提交, 远程不留历史记录
``` bash
git reflog
git reset --hard 37d463236f7a8
//回退到37d463236f7a8版本, 这一步之前一定要保存好文件，之后就什么都没有了

git push origin feature/ABC-99 -f //强制, push <> -f,不强推会冲突，推不上，必须强推
```

#### git revert 和 git reset的区别  
``` bash
git revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交
    * git revert HEAD                  撤销前一次 commit
    * git revert HEAD^               撤销前前一次 commit
    * git revert commit （比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。
git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，版本会递增，不影响之前提交的内容

git reset是直接删除指定的commit,远程不留历史记录.
```


## 分支与标签
``` bash
git branch                                         //显示所有本地分支
git branch -a                                    //查看本地和远程所有分支
git branch -r | grep r126　         //查看含有r126的分支
git checkout <branch/tag>       //切换到指定分支或标签
git branch <new-branch>         //创建新分支
git branch -d <branch>              //删除本地分支
git tag                                               //列出所有本地标签
git tag <tagname>                      //基于最新提交创建标签
git tag -d <tagname>                 //删除标签
```
#### 常用切换到指定分支流程
``` bash
git fetch --all
git branch -r | grep ABC　         //查看含有ABC的分支
git checkout --track origin/feature/ABC-3543
```
#### 切换到分支ABC-2:
``` bash
git stash
git fetch
git branch -D ABC-2
git checkout ABC-2
git stash pop
```

#### 指针分离develop分支
``` bash
git checkout develop　//git checkout origin/develop是远程，要切回本地：git checkout develop
```

## 合并与衍合
``` bash
git merge <branch>              //合并指定分支到当前分支（需先切换到当前分支操作）
git rebase  <branch>            //衍合指定分支到当前分支
```
#### 在support分支merge ABC-2739分支
``` bash
git checkout origin/support
git merge origin/ABC-2739
git push
```

#### git rebase 后再git merge
``` bash
git pull -r                   //rebase之前需要经master分支拉到最新
git checkout origin/dev  //切换分支到需要rebase的分支，这里是dev分支
git rebase master //有冲突就解决冲突，解决后直接git add . 再git rebase --continue即可
切换到master分支，执行git merge dev
```
#### 解决冲突, 撤下不要合并的代码:
``` bash
git stash
git log
git rebase -i HEAD~7 //合并7条 commit提交为一个提交,
//git checkout themes/abc/css/
git rebase --continue  //合并冲突，本地如果产生冲突，手动解决冲突之后，结合"git add 文件"命令一起用与修复冲突
git rebase --abort  //放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；
git stash pop
```
#### 没有PUSH之前,取消add的文件
``` bash
1.
git rebase --abort  //放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；
git reset --soft d688f04  //回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可；
git stash
git status
git pull --rebase

2.
git reset --hard HEAD~  // 是将工作区、暂存取和HEAD保持一致
git reset --soft HEAD^//取消上次commit

git status
git rebase --continue  //合并冲突，本地如果产生冲突，手动解决冲突之后，结合"git add 文件"命令一起用与修复冲突
git branch --all  //显示所有远距离和局部树枝
git rebase --abort   //放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；
git pull --rebase
```

## 远程操作
``` bash
git remote -v                                              //查看远程版本信息
git remote show <remote>                  //查看指定远程版本库信息
git remote add <remote> <url           //添加远程版本库
git fetch  <remote>                                //从远程库获取代码
git fetch -p                                                //获取被删减后的远程分支
git pull  <remote> <branch>              //下载代码及快速合并git pull -r
git push  <remote> <branch>            //上传代码及快速合并
git push  <remote> : <branch/tag-name>     //删除远程分支或标签
git push --tags                                        //上传所有标签

```
##  git版本更新（对于Ubuntu，此PPA提供最新的稳定上游Git版本）
``` bash
1. sudo add-apt-repository ppa:git-core/ppa
2. sudo apt update 
3. apt install git

```
## 本地存储
``` bash
git stash                                        //本地存储
git stash pop                             //恢复工作区的内容,删除栈中对应的stash
```
#### 拿stash里的文件,{}{1}{2}是stash名称前的带的
``` bash
git stash
git stash list 								  //本地存储列表
git stash apply stash@{0}    //恢复上次0,1,2...存储
```

## 其它
``` bash
git checkout -- .//删除本地所有不提交改动
git reset --hard //重置
git clean -df //清掉所有修改
git stash clear //清掉stash
git stash//暂存并隐藏本地未提交
git stash pop//显示暂藏

git pull = git fetch + git merge FETCH_HEAD 
git pull --rebase =  git fetch + git rebase FETCH_HEAD 

查看ssh-key: 
1. cd ~/.ssh/
2. ls
3. vim id_rsa　或　code id_rsa

ssh-keygen -t rsa -f github -C ""   //生成ssh-key
```