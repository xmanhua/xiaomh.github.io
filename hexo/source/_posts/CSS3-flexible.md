---
title: CSS3 Flexible Box (Flex 布局)
date: 2016-11-14 13:53:12
tags:
			- CSS3
---

## 一、Flex布局是什么？
<p>Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。Flex是一组规则，用于在父容器中自动扩展多列和多行。</p><div class="flex-box css-box"><ul class="flexible-flex"><li>1111 1111 1111 1111 1111 1111</li><li>2</li><li>3</li><li>4</li><li>5</li></ul><ul class="flexible-inline-flex"><li>1</li><li>222 222</li><li>3</li><li>4</li><li>5</li></ul></div><p></p>

``` bash
//任何一个容器都可以指定为Flex布局。
.flexible-flex {
  display: flex;//父级设置该属性,任何一个容器都可以指定为Flex布局;
  display: -webkit-flex; /* Safari */
}

.flexible-inline-flex {
  display: inline-flex;//父级设置该属性,行内元素
}

```
<!--more-->
## 二、浏览器兼容性

<img src="/img/flexible.jpg" alt="浏览器兼容性" width="70%"/>

## 三、基本概念
<p>采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。</p><img src="/img/flex.png" alt="flex"  width="80%"/>
<p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</p>

## 四、容器的属性

``` bash
flex-direction

flex-wrap

flex-flow

justify-content

align-items

align-content

```

### 1. flex-direction方向
<p>设置主轴对齐方式  默认 row  x轴从左到右, flex-direction: row, row-reverse, column, column-reverse</p><div class="flex flex-box css-box"><ul class="row flexible-flex "><li>row-1</li><li>row-2</li><li>row-3</li></ul><ul class="flexible-flex row-reverse"><li>row-reverse-1</li><li>row-reverse-2</li><li>row-reverse-3</li></ul><ul class="flexible-flex column"><li>column-1</li><li>column-2</li><li>column-3</li></ul><ul class="flexible-flex column-reverse"><li>column-reverse-1</li><li>column-reverse-2</li><li>column-reverse-3</li></ul></div><div class="clear"></div><p></p>

``` bash
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}

ul {
  display: flex;
}
ul.row {
  flex-direction: row;//默认值：主轴为水平方向，起点在左端。
}
ul.row-reverse {
  flex-direction: row-reverse;//主轴为水平方向，起点在右端。
}
ul.column {
  flex-direction: column;//主轴为垂直方向，起点在上沿
}
ul.column-reverse {
  flex-direction: column-reverse;主轴为垂直方向，起点在下沿。
}

```

### 2. flex-wrap
<p>子元素换行的方式,默认nowrap,x轴从左到右,x轴的方向决定了新行堆叠的方向</p><div class="flex-box css-box"><div class="flex-wrap"><p>1. flex-wrap: nowrap</p><ul class="nowrap flexible-flex "><li>a</li><li>b</li><li>c</li><li>d</li></ul></div><div class="flex-wrap"><p>2. flex-wrap: wrap</p><ul class="wrap flexible-flex "><li>a</li><li>b</li><li>c</li><li>d</li></ul></div><div class="flex-wrap"><p>3. flex-wrap: wrap-reverse</p><ul class="wrap-reverse flexible-flex "><li>a</li><li>b</li><li>c</li><li>d</li></ul></div></div><p class="clear"></p>

``` bash
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

.flex-wrap ul {
  display: flex;
}
.flex-wrap li {
  width: 100px;
  height: 50px;
}
.flex-wrap .nowrap {
  flex-wrap: nowrap;//1. 默认不换行,可以不写;
}
.flex-wrap .wrap {
  flex-wrap: wrap;//2. 换行，第一行在上方
}
.flex-wrap .wrap-reverse {
  flex-wrap: wrap-reverse;//3. 换行，第一行在下方。
}
```


### 3. flex-flow行排,竖排 && 次序: order示例

<p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><div class="order flex-box css-box"><p>1. 从左到右行排: flex-flow: row nowrap</p><ul class="flexible-flex"><li>a</li><li>b</li><li>c</li></ul></div><div class="order flex-box css-box"><p>2. 竖排: flex-flow: column, order改变排序</p><ul class="flexible-flex column"><li>a</li><li>b</li><li>c</li></ul></div><div class="order flex-box css-box"><p>3. 右到左: flex-flow:column wrap-reverse;</p><ul class="wrap-reverse flexible-flex"><li>a</li><li>b</li><li>c</li></ul></div><div class="clear"></div><p></p>

``` bash
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}

ul{
  display: flex;
  //flex-flow: row nowrap;1. 默认就是从左到右,可以不写;
}

ul.column{
  flex-flow: column;//2. 竖排
}

ul.column li:nth-child(2) {
  order: 1;
}

ul.column li:nth-child(3) {
  order: -1;
}

ul.wrap-reverse{
  flex-flow: column wrap-reverse;//3. 从右到左
  height: 50px;
}

```

### 4. justify-content示例：
<p>justify-content属性定义了项目在主轴上的对齐方式。</p><div class="justify-content-box flex-box css-box"><div class="justify-content"><p>1. flex-start</p><ul class="flex-start flexible-flex "><li>a</li><li>b</li><li>c</li></ul></div><div class="justify-content"><p>2. flex-end</p><ul class="flex-end flexible-flex "><li>a</li><li>b</li><li>c</li></ul></div><div class="justify-content"><p>3. center</p><ul class="center flexible-flex "><li>a</li><li>b</li><li>c</li></ul></div><div class="justify-content"><p>4. space-between</p><ul class="space-between flexible-flex "><li>a</li><li>b</li><li>c</li></ul></div><div class="justify-content"><p>5. space-around</p><ul class="space-around flexible-flex "><li>a</li><li>b</li><li>c</li></ul></div></div><div class="clear"></div><p></p>

``` bash
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}

ul{
  display:flex;
}
.flex-start{
  justify-content: flex-start;//默认值：左对齐
}
.flex-end{
  justify-content: flex-end;//右对齐
}
.center {
  justify-content: center;//居中
}
.space-between {
  justify-content:space-between; //两端对齐，项目之间的间隔都相等。
}
.space-around {
  justify-content:space-around;//每个项目两侧的间隔相等。
  //所以，项目之间的间隔比项目与边框的间隔大一倍
}

```


### 5. align-items属性

<p>align-items属性定义项目在交叉轴上如何对齐。</p>

``` bash
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

//它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

```
<img src="/img/align-items.png" alt="align-items" width="70%"/>

### 6. align-content属性
<p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p>

``` bash
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

//该属性可能取6个值。
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。

```

<img src="/img/align-items.png" alt="align-items" width="60%"/>


## 五、项目的属性

``` bash
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```

### 1. order属性
<p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><div class="order flex-box css-box"><ul class="flexible-flex column"><li>a</li><li>b</li><li>c</li></ul></div><p class="clear"></p>
``` bash
.item {
  order: <integer>;
}

ul.column li:nth-child(2) {
  order: 1;
}

ul.column li:nth-child(3) {
  order: -1;
}
```
<p class="clear"></p>

### 2. flex-grow属性

<p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p>

``` bash
.item {
  flex-grow: <number>; /* default 0 */
}
```

<img src="/img/flex-grow.png" alt="flex-grow" width="60%"/>


### 3. flex-shrink属性
<p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>

``` bash
.item {
  flex-shrink: <number>; /* default 1 */
}
```
<img src="/img/flex-shrink.jpg" alt="flex-grow" width="80%"/>
<p class="clear"></p>

### 4. flex-basis属性

<p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p>

``` bash
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
<p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p>


### 5. flex属性
<p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p>

``` bash
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

<p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p>



### 6. align-self属性
<p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p>

``` bash
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

<img src="/img/align-self.png" alt="align-self" width="80%"/>
<p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p>
More info: [www.runoob.com
](https://www.runoob.com/w3cnote/flex-grammar.html)

