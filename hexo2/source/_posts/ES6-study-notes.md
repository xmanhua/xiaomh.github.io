---
title: ES6 学习笔记
date: 2018-05-19 13:28:50
updated: 2018-09-01 12:00:00
tags:
			- ES6
---


## promise
promise: 承诺，许诺
作用： 解决异步问题 (例如:用户登录->获取用户信息)
传统方式，大部分用回调函数，事件
<!--more-->
``` bash
let a = 10;
let promise = new Promise(function(resolve,reject) {
  //resolve 成功调用
  //reject 失败调用
  if(a == 0){
    resolve('成功');
  }else{
    reject('失败');
  }
});

//1. promise.then(success,fail);
promise.then(res=>{
  console.log(res);
},err=>{
  console.log(err);
});

//fail的另一种方式
promise.catch(err=>{
  console.log(err);
})

//2.将现有的东西,转成一个promise对象,resolve成功状态;
// reject用法与resolve一样,一个成功状态,一个失败状态
Promise.resolve('aa');
等价于:
new Promise(resolve=>{
  resolve('aa')
})

Promise.reject('aa');
等价于:
new Promise(reject=>{
  reject('aa')
})


//3.promise.all([p1,p2,p3]);把promise打包,扔到一个数组里面,打包完还是一个promise对象.
// 必须确保,所有的promise对象,都是resolve状态,有一个reject就不行,必须都是成功状态.
let p1 = Promise.resolve('aa');
let p2 = Promise.reject('bb');//all对应: let p2 = Promise.resolve('bb');
let p3 = Promise.resolve('cc');
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res);
  let[res1, res2, res3] = res;
  console.log(res1, res2, res3);
})

//4. promise.race([p1,p2,p3]):只要有一个成功状态,就返回
Promise.race([p1,p2,p3]).then(res=>{
  console.log(res);
})

```
More info: [promise](https://study.163.com/course/courseLearn.htm?courseId=1005211046#/learn/video?lessonId=1051996664&courseId=1005211046)

## 模块化
``` bash

```

## Quick Start

``` bash

```

## Quick Start

``` bash

```

## Quick Start

``` bash

```

## Quick Start

``` bash

```
## Quick Start

``` bash

```

## Quick Start

``` bash

```

## Quick Start

``` bash

```

## Quick Start

``` bash

```

More info: [Server](https://hexo.io/docs/server.html)

