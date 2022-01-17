## 什么是BFC？BFC的布局规则是什么？如何创建BFC？BFC应用？
BFC 是 Block Formatting Context 的缩写，即块格式化上下文。BFC是CSS布局的一个概念，是一个环境，里面的元素不会影响外面的元素。
布局规则：Box是CSS布局的对象和基本单位，页面是由若干个Box组成的。元素的类型和display属性，决定了这个Box的类型。不同类型的Box会参与不同的Formatting Context。
创建：浮动元素 display：inline-block position:absolute
应用: 1.分属于不同的BFC时,可以防止margin重叠 2.清除内部浮动 3.自适应多栏布局

## 相邻的两个inline-block节点出现间隔的原因以及解决方法
产生间隔的原因：
元素被当成行内元素排版的时候，原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。