---
title: IE6 CSS
date: 2012-01-19 10:28:40
updated: 2012-02-01 12:00:00
tags:
			- CSS2
---

## IE6 高度等于外围的高度
``` bash
height=#bpic的高度：height:expression(document.getElementById('bpic').offsetHeight+"px");
height=body的高度：height:expression(document.body.offsetHeight+ "px");
```
## IE6 图片最大宽度
``` bash
max-width:695px;
_width: expression(this.width > 695 ? 695 : true);
```
## IE6 图片最小高度166px
``` bash
min-height:166px;
_height:expression((document.documentElement.clientHeight||document.body.clientHeight)>166?"166px":"");
```
<!--more-->
## IE6 高度=外围ID的高度(id="case")
``` bash
height:100%;
_height:expression(document.getElementById('case').offsetHeight+'px');
```

## IE6 背景透明 png24
``` bash
.qq {
  background:url(../images/pic/top.png) no-repeat;
  _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://img0.bdstatic.com/static/widget/common/top/images/to-top_6744d50c0e.png');//ie6
  _background:0 //ie6
}
```
## IE6 最小宽度
``` bash
.wrapper {
  min-width:500px;
  _width:expression((document.documentElement.clientWidth||document.body.clientWidth) < 500 ? "500px": "auto"); //ie6
}
```
## IE6 position:fixed
``` bash
.gotop {
  position:fixed;
  z-index:100;
  top:10px;
  right: 0px;
  _position:absolute;//ie6
  _top:auto;//ie6
  _top:expression(eval(document.documentElement.scrollTop)+10);//ie6
}

*html {
  background-image:url(about:blank);//ie6
  background-attachment:fixed;//ie6
}

```

## IE6 fixed bottom的高度
``` bash
.qq {
  position:fixed;
  right:5px;
  bottom:100px;
  _position:absolute;//ie6
  _bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||100))); //ie6
}

*html {
  _background-image:url(about:blank);
  _background-attachment:scroll
}
```