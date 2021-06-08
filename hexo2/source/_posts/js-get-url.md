---
title: JS获取当前页面页面URL信息
date: 2014-11-03 20:20:30
updated: 2015-06-18 16:05:00
tags:
			- JS
---

## js获取url指定参数值
``` bash
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2])
  }
  return null;
}


假设url地址是http://www.xxx.com?ProID=100&UserID=200，

可用GetQueryString("ProID")或GetQueryString("UserID")获取相应参数值。
```
<!--more-->
``` bash
function getQueryString(name, str) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = str ? str.match(reg) : window.location.search.substr(1).match(reg);
    if (r != null) {
      var res = unescape(r[2]);
      return res;
    }
    return null;
  }

 假设url地址是http://www.xxx.com?ProID=100?200，要取200:
 r = href.split('?'),
 getQueryString('ProID', r[1]);
```

## 设置或获取对象指定的文件名或路径
``` bash
url = http://www.baidu.com/baidu/postedit/46887983?wd=hei+jude&tn=monline_4_dg

window.location.pathname;
--->  "/baidu/postedit/46887983"
```

## 设置或获取整个 URL 为字符串
``` bash
url = http://www.baidu.com/baidu?wd=hei+jude&tn=monline_4_dg

window.location.href;
--->  "http://www.baidu.com/baidu?wd=hei+jude&tn=monline_4_dg"
```

## 设置或获取与 URL 关联的端口号码
``` bash
url =http://192.168.14.97:2000/analytics/profiles/
window.location.port;
--->  "2000"
```

## 设置或获取 URL 的协议部分
``` bash
url = http://www.baidu.com/baidu?wd=hei+jude&tn=monline_4_dg
window.location.protocol;
--->  "http:"
```

## 设置或获取 href 属性中在井号“#”后面的分段
``` bash
url = http://192.168.2.11/forum.php?mod=viewthread&tid=65&page=1&extra=#pid207
window.location.hash;
--->  "#pid207"
```

## 设置或获取 location 或 URL 的 hostname 和 port 号码
``` bash
url = http://192.168.14.97:2000/analytics/profiles/
window.location.host;
--->  "192.168.14.97:2000"
```

## 设置或获取 location 或 URL 的 hostname
``` bash
url = http://192.168.14.97:2000/analytics/profiles/
window.location.hostname;
--->  "192.168.14.97"
```

## 设置或获取 href 属性中跟在问号后面的部分
``` bash
url = http://www.baidu.com/baidu?wd=hei+jude&tn=monline_4_dg
window.location.search;
--->  "?wd=hei+jude&tn=monline_4_dg"

pathname.split('tn=')[1];
--->  "monline_4_dg"
```

## 获取变量的值(截取等号后面的部分)
``` bash
 var url = window.location.search;
 var loc = url.substring(url.lastIndexOf('=')+1, url.length);
```

## iframe插入页面
``` bash
window.location.replace("main.html");
```