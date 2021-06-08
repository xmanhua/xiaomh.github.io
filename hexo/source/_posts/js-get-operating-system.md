---
title: js判断设备
date: 2015-05-03 15:20:30
updated: 2017-03-16 15:05:00
tags:
			- JS
---

## 判断设备类型
``` bash
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  if(userAgent.match(/SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i))  {
    return 'samsung';
  } else if (userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    ver = parseInt(ver[1], 10);
    if(ver < 10){
      return 'ios ios9-below';
    } else {
      return 'ios';
    }
  } else if (userAgent.match(/iPad/i)) {
    ver = parseInt(ver[1], 10);
    if(ver < 10){
      return 'ios ipad ios9-below';
    }else {
      return 'ios ipad';
    }
  }
  else if (userAgent.match(/Android/i)) {
    return 'android';
  } else if (userAgent.match(/FIREFOX/i)) {
    return 'firefox no-touch';
  }else if (/MSIE 9/i.test(userAgent)) {
    return 'ie9 no-touch';
  }else {
    return 'unknown no-touch';
  }
}

navigator.sayswho= (function(){
  var ua= navigator.userAgent, tem,
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  var str = M.join(' ') ;
  str = str.split(' ');
  if( str[0] == 'Safari'  &&  str[1] < 10) {
    return 'safari9-below';
  }
});
```
<!--more-->
``` bash
$(function(){
  $('body').addClass(getMobileOperatingSystem()).addClass(navigator.sayswho());

  //如果body有ios,同时屏幕宽度小于768px,就是苹果手机;
  if($('body').hasClass('ios') && $(window).width() < 768) {
    ...
  }
});
```