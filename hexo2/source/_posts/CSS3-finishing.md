---
title: 常用CSS3整理
date: 2016-05-21 10:20:40
updated: 2018-05-16 13:20:00
tags:
			- CSS3
---
## 显示几行,超出显示...（x,n要改为实际数字，ie,ff不支持省略号）
``` bash
display: block;
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
line-height: X;
max-height: X*N;
```

## 图片遮罩
#### 1. 方形的图变成圆形显示
<img src="/img/round.png" style="border: none;" alt="方形的图变成圆形" border="0" height="100" width="100"/>
``` bash
img {
  clip-path: circle(100px at center);
}
```
<!--more-->
#### 2. 文字和背景图在某个形状内显示
<img src="/img/mask.png" style="border: none;" alt="文字在图片范围内显示" border="0" height="91" width="100"/>
``` bash
.bg-mask｛
  width: 200px;
  height: 200px;
  background: url(img/orig.jpg);//背景图片
  color: red;
  -webkit-mask-box-image: url(img/mask.png);//米老鼠图形内填充，图形外是全透明；
｝
```

## body里所有的 a 不能点击的链接
``` bash
body {
  pointer-events: none;// ie9,ie10不支持.
}

```

## iPhone 设备 横屏字不要放大
``` bash
@media screen and (max-device-width: 1023px){
  body{
    -webkit-text-size-adjust:none;
    -ms-text-size-adjust:none
  }
}
```

## iPhone 设备 滚动条滚得更灵活
``` bash
html, body {
  -webkit-overflow-scrolling: touch;
}
```

## 宽高包含border\padding值
``` bash
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
```

## 打勾动画

<div class="successIcon"></div>

``` bash
.successIcon{
  display: inline-block;
  width:60px;
  height: 60px;
  background: url("/img/confirmation-tick.png") no-repeat left center;
  background-size: auto 100%;
  animation: fill 0.56s steps(13, start) forwards;
  -webkit-animation: fill 0.56s steps(13, start) forwards;
  -ms-animation: fill 0.56s steps(13, start) forwards
}
//780 = (60/170)*2210, 170是每帧图的宽，170*13(13帧)= 2210;
@keyframes fill {
  to { background-position: -780px }
}
@-webkit-keyframes fill {
  to { background-position: -780px }
}
@-ms-keyframes fill {
  to { background-position: -780px }
}

```