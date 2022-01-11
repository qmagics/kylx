## 什么是BFC？BFC的布局规则是什么？如何创建BFC？BFC应用？
BFC 是 Block Formatting Context 的缩写，即块格式化上下文。BFC是CSS布局的一个概念，是一个环境，里面的元素不会影响外面的元素。
布局规则：Box是CSS布局的对象和基本单位，页面是由若干个Box组成的。元素的类型和display属性，决定了这个Box的类型。不同类型的Box会参与不同的Formatting Context。
创建：浮动元素 display：inline-block position:absolute
应用: 1.分属于不同的BFC时,可以防止margin重叠 2.清除内部浮动 3.自适应多栏布局