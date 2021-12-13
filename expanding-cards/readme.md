

# 知识点  CSS

## **box-sizing: border-box的作用**

要想清楚这个属性的作用，首先要理解盒子模型，盒子模型是指：

外边距（margin）+ border（边框） + 内边距（padding）+ content（内容），

加了box-sizing: border-box属性，padding和border的值就不会在影响元素的宽高，相当于把padding和border的值都算在content里，

## flex布局

https://xluos.github.io/demo/flexbox/   Flexbox演示站

### 一、Flex布局是什么？

Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

### 二、基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

### 三、容器的属性

#### 3.1 justify-content属性

justify-content属性定义了项目在主轴上的对齐方式。

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

> - flex-start（默认值）：左对齐
> - flex-end：右对齐
> - center： 居中
> - space-between：两端对齐，项目之间的间隔都相等。
> - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

#### 3.2 align-items属性

align-items属性定义项目在交叉轴上如何对齐。

## background-size: cover;

cover缩放背景图片以**完全覆盖背景区**，可能背景图片部分看不见。和 `contain` 值相反，`cover` 值尽可能大的缩放背景图像并**保持图像的宽高比例**（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。

## background-position

`background-position` 为每一个背景图片设置初始位置。 这个位置是相对于由 [`background-origin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin) 定义的位置图层的。关键字 `center`，用来居中背景图片。

## opacity

opacity属性指定了一个元素的**不透明度**。换言之，opacity属性指定了一个元素后面的背景的被覆盖程度。

# 知识点 JS

## Document.querySelectorAll

返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList) 。`NodeList` **不是一个数组**，是一个类似数组的对象(*Like Array Object*)。虽然 `NodeList` 不是一个数组，但是可以使用 `forEach()` 来迭代。你还可以使用 [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 将其转换为数组。

## Array.prototype.forEach()

`**forEach()**` 方法对数组的每个元素执行一次给定的函数。

## HTML DOM classList 属性

classList 属性返回元素的类名，作为 DOMTokenList 对象。

该属性用于在元素中添加，移除及切换 CSS 类。

classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

