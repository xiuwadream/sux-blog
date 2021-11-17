---
title: 记一道偶遇的面试题以及对框架的思考
author: Su4X
tags: [面试 js]
---

在某个编程博主评论区看到一条面试题，不使用mvc框架实现一个todo应用。

比较感兴趣，就写了写了，用原生的js实现类似react的思路（声明一个数据，根据数据进行render，修改数据后，显式的set，引发重新render，产生新页面），写得比较啰嗦，js包空行有小100行。

效果如下：

<iframe height="300" style={{width: '100%'}} scrolling="no" title="vanillaTodo" src="https://codepen.io/xiuwadream/embed/abyPwyd?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xiuwadream/pen/abyPwyd">
  vanillaTodo</a> by xiuwadream (<a href="https://codepen.io/xiuwadream">@xiuwadream</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

写完这个demo我也明白了为什么前端框架都会写一个todo来做演示，一个todo，包含了常用的“增删改查”：

増：新增一个todo

改：todo的完成状态，todo的内容

删：删除一个todo

查：主要是**如何渲染数据**（空状态，不同的过滤条件等）

DOM操作在我这次写这个todo时占了很大的一部份，写起来挺烦人的，所以我觉得框架在界面层次（一般来说框架还包含整个前端开发流程）给到我们的帮助就是简化了渲染的部分，让我们更关心于数据和逻辑，界面渲染通过一些特殊的语法简单标记好，然后框架帮我们弄完就好了，而且还会帮我们在性能上做优化之类的，可以说帮助很大了。