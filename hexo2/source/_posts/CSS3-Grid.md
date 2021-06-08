---
title: CSS3 Grid 布局
date: 2017-12-5 19:56:54
tags:
			- CSS3
---

## 1、HTML 结构
<p>我们需要的第一件事是一点 HTML 。 一个网格容器（将变成一个网格元素）和网格项（header, menu, content, footer）。</p>[浏览器兼容性查询
](https://caniuse.com/#feat=css-grid)

``` bash
<div class="container">
  <div class="header">HEADER</div>
  <div class="menu">MENU</div>
  <div class="content">CONTENT</div>
  <div class="footer">FOOTER</div>
</div>

```
<!--more-->

## 2、设置基本的 CSS
<p>那么我们需要在 container 元素设置 display: grid; ，将其设置为网格容器，并指定我们需要多少行和列。这是基本的CSS：</p>

``` bash
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px 350px 50px;
  grid-gap: 5px;
}

```

<p>以上代码的意思是：使用 grid-template-columns 属性创建一个 12 列的网格，每个列都是一个单位宽度（总宽度的 1/12 ）。（愚人码头注：其中， repeat(12, 1fr) 意思是 12 个重复的 1fr 值。 fr 是网格容器剩余空间的等分单位。）使用 grid-template-rows 属性创建 3 行，第一行高度是 50px ，第二行高度是 350px 和第三行高度是 50px。最后，使用 grid-gap 属性在网格中的网格项之间添加一个间隙。</p>


## 3、添加 grid-template-areas
<p>这个属性被称为网格区域，也叫模板区域，能够让我们轻松地进行布局实验。
要将它添加到网格中，我们只需给网格容器加一个 grid-template-areas 属性即可。 语法可能有点奇怪，因为它不像其他的 CSS 语法。例如：</p>

``` bash
.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px 350px 50px;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "m m c c c c c c c c c c"
    "f f f f f f f f f f f f";
}

```
<p>grid-template-areas 属性背后的逻辑是你在代码中创建的网格可视化表示。正如你所看到的，它有 3 行 12 列，和我们在 grid-template-columns 和 grid-template-rows 中定义的正好呼应。

每行代表一行，用网格术语来说是 网格轨道(Grid Track) ，每个字符（ h，m，c，f）代表一个网格单元格。愚人码头注：其实是 网格区域(Grid Area) 名称，你可以使用任意名称。

四个字母中的每一个现在都形成一个矩形 grid-area 。

你可能已经猜到，我选择了字符 h，m，c，f，是因为他们是 header, menu, content 和 footer 的首字母。 当然，我可以把它们叫做任何想要的名称，但是使用他们所描述的东西的第一个字符更加容易让人理解。</p>


## 4、给网格项设定网格区域名称
<p>现在我们需要将这些字符与网格中的网格项建立对应的连接。 要做到这一点，我们将在网格项使用 grid-area 属性：</p>

``` bash
.header {
    grid-area: h;
}
.menu {
    grid-area: m;
}
.content {
    grid-area: c;
}
.footer {
   grid-area: f;
}
```

以下是完整的布局效果：
<div class="grid-box"><div class="container"><div class="header">HEADER</div><div class="menu">MENU</div><div class="contents">CONTENT</div><div class="footer">FOOTER</div></div></div>


## 5、尝试其他布局
<p>现在，我们开始讨论 Grid(网格) 布局 特性的精妙之处，因为我们可以很容易地对布局进行修改尝试。只需修改 grid-template-areas 属性的字符即可。举个例子，把 menu 移到右边：</p>

``` bash
.container2 {
  grid-template-areas:
    "h h h h h h h h h h h h"
    "c c c c c c c c c c m m"
    "f f f f f f f f f f f f";
}
```

修改后的布局效果：
<div class="grid-box"><div class="container container2"><div class="header">HEADER</div><div class="menu">MENU</div><div class="contents">CONTENT</div><div class="footer">FOOTER</div></div></div>

## 6、我们可以使用点 . 来创建空白的网格单元格。

``` bash
.container3 {
  grid-template-areas:
    ". h h h h h h h h h h ."
    "c c c c c c c c c c m m"
    ". f f f f f f f f f f .";
}
```

修改的布局效果看起来是这样的：
<div class="grid-box"><div class="container container3"><div class="header">HEADER</div><div class="menu">MENU</div><div class="contents">CONTENT</div><div class="footer">FOOTER</div></div></div>

## 7、添加响应式布局

``` bash
@media screen and (max-width: 640px) {
  .container {
    grid-template-areas:
      "m m m m m m h h h h h h"
      "c c c c c c c c c c c c"
      "f f f f f f f f f f f f";
  }
}
```

<p>请记住，所有这些更改都是使用纯 CSS 完成的，不需要修改 HTML 。 无论 div 标签如何在 HTML 中是怎么样的顺序结构，我们都可以随意转换。（愚人码头注：这点与 flexbox 类似，网格项（grid items）的源顺序无关紧要。你的 CSS 可以以任何顺序放置它们，这使得使用 媒体查询（media queries）重新排列网格变得非常容易。）
这被称为结构和表现分离， Grid(网格) 布局真正做到了这点，对于 CSS 来说是一个巨大的进步。
它允许 HTML 成为它想要的样子: 作为内容的标记。HTML 结构不再受限于样式表现，比如不要为了实现某种布局而多次嵌套，现在这些都可以让 CSS 来完成。
如果你错过了 Grid(网格) 布局的最简入门，请阅读：5分钟学会 CSS Grid 布局 。 了解更多请阅读：CSS Grid 布局完全指南(图解 Grid 详细教程)，让你体会 Grid 布局真正的强大和灵活。</p>