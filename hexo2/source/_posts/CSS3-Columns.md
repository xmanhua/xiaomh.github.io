---
title: CSS Multi-column Layout(CSS多列布局)
date: 2018-11-15 11:56:54
tags:
			- CSS3
---

<p>CSS Columns 是一种定义了多栏布局的模块，它能够表现出将内容在列之间怎么流动的以及间隙和分割线怎么使用。浏览器兼容性: IE10,IE10+</p>More info: [CSS Columns
](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Columns
)
``` bash
. columns /* 3 30px */
. column-count /* 最理想的分栏数目 */
. column-width /* 每栏的最小宽度 */
. column-rule /* 使用方法同border */
. column-rule-width
. column-rule-style
. column-rule-color
. column-gap /* 栏目之间的水平间隙 */
. column-fill /* 定义栏目的高度是否统一 */
. column-span /* all, none */


column-count: 浏览器缩放保持设定数量的列
column-width: 浏览器缩放不能容纳足够的列，列的数量会 -1，直至单列

同时声明这两个属性时，column-count是最大列数，并且column-width是这些列的最小宽度。
columns: 120px;         /* column-width: 120px; column-count: auto */
columns: auto 120px;    /* column-width: 120px; column-count: auto */
columns: 2;             /* column-width: auto; column-count: 2 */
columns: 2 auto;        /* column-width: auto; column-count: 2 */
columns: auto;          /* column-width: auto; column-count: auto */
columns: auto auto;       /* column-width: auto; column-count: auto */
```
<!--more-->
## 三列布局(文字不间断,大标题横跨一整行):

<div class="css-columns3"><p>一个朋友和我讲的。他认识一个叫敖文，他弟弟叫敖轩。我的朋友好奇问，你弟弟为什么不叫敖武呢，这样文武双全多好呀！朋友回答，其实弟弟原来叫敖武，又一次晚上出去玩，已经到了吃饭的时间还不回家，所以妈妈就满村子的喊弟弟的名字，然后就给弟弟改名敖轩。</p><strong class="columns-title">我是大标题，横跨一整行</strong><p>一个朋友和我讲的。他认识一个叫敖文，他弟弟叫敖轩。我的朋友好奇问，你弟弟为什么不叫敖武呢，这样文武双全多好呀！朋友回答，其实弟弟原来叫敖武，又一次晚上出去玩，已经到了吃饭的时间还不回家，所以妈妈就满村子的喊弟弟的名字，然后就给弟弟改名敖轩。</p></div>
``` bash
//column-rule设置分栏的样式 使用方式同border, 当宽度不够时会消失
//column-gap设置分栏之间的水平间隙 默认为1em, font-size的值

.css-columns3 {
  columns: 3;
  column-rule: 1px solid #23a1c9;
  column-gap: 50px;
}
.css-columns3 .columns-title {
  column-span: all;//column-span有none和all两个值
  text-align: center;
  padding: .5em;
}

```

## 古诗词,竖排文字:
<div class="css-columns-vertical">明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？</div>
``` bash
.css-columns-vertical {
  margin: 0 auto;
  columns: 1em;
  width: 90%;
  column-rule: dashed 1px #ccc;
  word-wrap: break-word;
  text-align: center;
  direction: rtl;
}

```

## 九宫格
<div class="css-columns-9 css-box"><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></div>
``` bash
.css-columns-9 {
  margin: 0 auto;
  columns: 3;
  width: 200px;
  text-align: center;
  border: solid 1px #23a1c9;
  padding: 10px 10px 0 10px;
}
.css-columns-9 ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.css-columns-9 li {
  margin-bottom: 10px;
  height: 50px;
  line-height: 50px;
  background: #23a1c9;
  color: #fff;
}

```

## 多列:
<ol class="css-columns-multiple"><li>content</li><li>content</li><li>content</li><li>content</li><li>content</li><li>content</li><li>content</li></ol>
``` bash
.css-columns-multiple {
  margin: 0 auto;
  columns: 90px;
  width: 300px;
  border: solid 1px #23a1c9;
}

```