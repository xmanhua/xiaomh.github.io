---
title: JS设置获取cookie
date: 2015-11-03 20:28:30
updated: 2015-07-16 16:05:00
tags:
			- JS
---

## js获取url指定参数值
``` bash
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
```
<!--more-->
``` bash
//使用
  $("a").click(function () {
    var external_url = $(this).attr('href');
    external_url = $.trim(external_url);
    var cookieSelect = "external-url=" + external_url;
    document.cookie = cookieSelect;//设置cookie
  });

var external_url = getCookie("external-url");//获取cookie
```

