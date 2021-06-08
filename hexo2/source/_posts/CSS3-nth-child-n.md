---
title: CSS3选择器nth-child(n)实现隔几行选择元素
date: 2015-11-27 16:40:24
updated: 2015-11-27 15:00:00
tags:
			- CSS3
---

<p>nth-child(n)，n 可以是数字、关键词或公式。选择器匹配属于其父元素的第N个子元素，不论元素的类型。</p>
##  一行显示4个，第4个的倍数+1另起一行:
``` bash
li:nth-child(4n+1){
  clear: both ;
}
```
## 序号写法
##### 把第3个LI的背景设为橙色:
``` bash
li:nth-child(3){
  background:orange;
}
```
<!--more-->
## 倍数写法
##### 把第3、第6、第9…、所有3的倍数的LI的背景设为橙色:
``` bash
li:nth-child(3n){
  background:orange;
}
```

## 倍数分组匹配：
##### (1). 匹配第1、第4、第7、…、每3个为一组的第1个LI
``` bash
li:nth-child(3n+1){
  background:orange;
}
```
##### (2). 匹配第5、第8、第11、…、从第5个开始每3个为一组的第1个LI
``` bash
li:nth-child(3n+5){
  background:orange;
}
```
##### (3). 匹配第5-1=4、第10-1=9、…、第5的倍数减1个LI
``` bash
li:nth-child(5n-1){
  background:orange;
}
```