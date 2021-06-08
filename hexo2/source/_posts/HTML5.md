---
title: HTML5整理
date: 2017-05-23 15:20:30
updated: 2017-09-16 13:05:00
tags:
			- HTML5
---

## 微信 H5 的开发过程中遇到的一些坑
#### 1. 页面滚动不顺畅,在ios版的微信里会出现问题，解决办法给要滚动区域的元素加上这个属性：
``` bash
-webkit-overflow-scrolling: touch;
```
#### 2. ios版会把页面中的一串数字识别成电话然后触摸会调用系统不打电话，解决办法加上meta
``` bash
< meta content="telephone=no,email=no" name="format-detection" />
```
<!--more-->
#### 3. 在一些文字过多的地方Android版微信会把文字变大而ios则不会，这样会导致排版错乱页面变得很丑…
``` bash
解决的办法是给包裹文字的元素加上:
display: inline-block;
```
#### 4. 点击元素产生背景加上这个:
``` bash
-webkit-tap-highlight-color: rgba(0,0,0,0);
```
#### 5. click的300ms延迟
``` bash
要么禁止页面的缩放，要么如果使用了zepto，则用tap代替click，要么使用fastclick。
```
