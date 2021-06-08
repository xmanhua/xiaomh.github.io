---
title: 常用的CSS2整理
date: 2013-03-19 11:23:40
updated: 2014-05-11 14:10:00
tags:
      - CSS2
---
## 一、上下左右居中
``` bash
.box {
  display: table;
  table-layout: fixed; //ie
  width: 100%;
  height: 100%;
  text-align:center;
}
.box div {
  display: table-cell;
  vertical-align: middle;
}
```

## 二、换行
#### 1. 强制不换行
``` bash
div{
  white-space:nowrap;
}
```
#### 2. 自动换行
``` bash
div{
  word-wrap: break-word;
  word-break: normal;
}
```
#### 3. 强制英文单词断行
``` bash
div{
  word-break:break-all;
}
```
<!--more-->
## 三、CSS文字效果
``` bash
1. 文字一行显示，超出宽度用省略号代替:
div {
  overflow:hidden;
  display:inline-block;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:130px;
}

2. 小写的字变成大写,大写的字放大: font-variant: small-caps;

3. 字斜的: font-style: italic;

4. 首字母大写: text-transform:capitalize;

5. 全大写: text-transform : uppercase;

6. 全小写: text-transform:lowercase;

7. 字上划线: text-decoration:overline;

8. 字中划线: text-decoration:line-through;

9. 字下划线: text-decoration:underline;
```

## 四、.cur图片替换鼠标默认指针
``` bash
.box {
  position:relative;
}
.box a {
  position:absolute;
  left:0px;
  height:50%;
  width:100%;
  background: url(_blank);
}
.box a.previous {
  top:0;
  cursor:url(images/pic/mouseup_is.cur),auto;
}
.box a.next {
  bottom:0;
  cursor:url(images/pic/mousedown_is.cur),auto;
}
```

## 五、div加滚动条显示内容
``` bash
div{
  overflow-y: auto;
  overflow: auto;
  width: 400px;
  height: 200px;
}

滚动条加颜色：
div {
  scrollbar-arrow-color: #fff;
  scrollbar-face-color: #2073c1;
  scrollbar-darkshadow-color: #2073c1;
  scrollbar-highlight-color: #CDCDCD;
  scrollbar-shadow-color: #CDCDCD;
  scrollbar-track-color: #CDCDCD;
  scrollbar-3dlight-color: #2073c1;
}
```
## 六、高度等于外围的高度
#### 1. height=#div-id的高度：
``` bash
height:expression(document.getElementById('div-id').offsetHeight+"px");
```
#### 2. height=body的高度：
``` bash
height:expression(document.body.offsetHeight+ "px");
```

## 七、鼠标经过有链接的图片改变透明度
``` bash
a:hover img{
  -moz-opacity: 0.85;
  opacity: 0.85;filter:
  Alpha(Opacity=85);
}
```
