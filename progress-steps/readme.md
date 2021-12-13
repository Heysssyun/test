## CSS部分知识点

### justify-content

**`justify-content`** 属性定义了浏览器之间，如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间

```
justify-content: space-between;  /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放                                    置于终点 */
justify-content: space-around;  /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
justify-content: space-evenly;  /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */
justify-content: stretch;       /* 均匀排列每个元素
                                   'auto'-sized 的元素会被拉伸                                    以适应容器的大小 */
```

### transform

transform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。

```
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
```

### 伪类

CSS **伪类** 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，[`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。

#### :focus

CSS[伪类](https://developer.mozilla.org/en-US/CSS/Pseudo-classes) `:focus`表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的 “tab” 键选择它时会被触发。

#### :active

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) **`:active`** [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。

#### :disabled

`:disabled` CSS [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态（enabled state），在启用状态下，元素可以被激活或获取焦点。

#### :root

在声明全局 [CSS 变量](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)时 **`:root`** 会很有用：

### content

CSS的 `content` CSS 属性用于在元素的  [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before) 和 [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after) 伪元素中插入内容。使用`content` 属性插入的内容都是匿名的可替换元素，不要忘记加

## JS部分知识点

### 比较 var 和 let 关键字的作用域

使用 `var` 关键字声明变量时，它是全局声明的，如果在函数内部声明则是局部声明的。

`let` 关键字的行为类似，但有一些额外的功能。 在代码块、语句或表达式中使用 `let` 关键字声明变量时，其作用域仅限于该代码块、语句或表达式。

### Array.prototype.forEach()

`**forEach()**` 方法对数组的每个元素执行一次给定的函数。

```
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

```
callback
```

为数组中每个元素执行的函数，该函数接收一至三个参数：

- `currentValue`

  数组中正在处理的当前元素。

- `index` 可选

  数组中正在处理的当前元素的索引。

- `array` 可选

  `forEach()` 方法正在操作的数组。

 `thisArg` 可选

可选参数。当执行回调函数 `callback` 时，用作 `this` 的值。

