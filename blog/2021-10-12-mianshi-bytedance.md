---
title: 字节跳动前端面试题三则
author: Su4X
tags: [面试, css, 异步, 函数式]
---

今天面了一下字节，直接被吊打，题题难顶，但下来后好好思考，感觉也没那么难。还是基础不牢，还有就是紧张了脑子转不动了，记录一下三道题的解法。

<!--truncate-->

### 一个DOM元素纯CSS实现开关

要求：

1. 要有动画过渡
2. 只使用一个DOM元素（伪元素不算）
3. 父元素宽度未知，自适应父元素宽度 （这条可以暂时不实现）

> 参考：[利用一个dom元素实现css开关效果](https://blog.csdn.net/weixin_43662436/article/details/104004722)

主要还是利用css的一些状态选择器来进行开关状态的切换，参考的前辈用的是hover，但hover的开关效果没那么理想，鼠标移开就恢复不太够味，那什么东西能通过点击切换状态呢？没错，就是 checkbox（radio应该也可以）。话不多说，直接先上代码。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>css开关效果</title>
</head>
<style type="text/css">
    .switch {
        position: relative;
        width: 50px;
        height: 20px;
    }
    .switch::before{
        content: " "; /*注意设置content不然没效果*/
	    display: inline-block;
	    width: 100%;
	    height: 100%;
	    background: gray;
        transition: background-color .8s;
	}
    .switch:checked::before{
	    background: green;
	}
    .switch::after {
        content: " ";
        display: inline-block;
	    width: 40%;
	    height: 80%;
	    background: white;
	    position: absolute;
        top: 10%;
        left: 5%;
        transition: left .8s;
    }
    .switch:checked:after {
        left: 55%;
    }
</style>
<body>
<input class="switch" type="checkbox">
</body>
</html>
```

**解释：**首先，给出checkbox的范围（width改成100%应该也没问题），checkbox主要承担点击切换状态的功能，通过伪选择器:check来对开关进行样式控制。其中`before`生成了开关的底色（会盖住默认的checkbox控件），`after`用来显示开关的滑块，设置为绝对定位通过设置不同的`left`来表示开关，再对left设置`transition`即可

### 经典的Promise输出顺序

在面试官小姐姐的反复提醒下做对了。

```javascript
let p =[];
(function(){
    setTimeout(()=>console.log('timeout 0'))
    let i=0
    for(;i<3;i++){
        p[i] = function(){
            return new Promise(function(resolve){
                console.log(`promise ${i}`)
                resolve(`promise ${i * i}`)
            })
        }
    }
})()

async function b(){
    console.log('async -1')
}

function a(){
    console.log(`async ${p.length}`)
    return async function(){
        console.log(`async ${p.length}`)
        await b()
        console.log('async -2')
    }
}

p.push(a())
p[1]().then(console.log)
p[3]()
```

**输出：**

async 3 // 函数`a`执行，输出此时`p.length`是3，然后将一个函数推入数组

promise 3 // `p`数组中[1]的函数执行，生成Promise，执行构造参数中的函数，由于此时闭包中的`i`已经增长到3了，所以是3

async 4 // `p`数组中[3]的函数执行，执行第一句输出`p.length`是4，await异步函数`b`

async -1 // 函数`b`中的输出，然后后续部分作为新的Promise进入微任务队列，主脚本执行完毕。

promise 9 // 微任务队列中第一项执行，即p[1]的resolve()，执行了then中的输出函数

async -2 // 函数`a`的后续部分形成的promise执行，

timeout 0 // 最开始立即执行函数中的计时器，一般这种题都是最后输出的



### 柯里化的Add函数

要求实现一个add函数，满足如下调用方式：

add(1,2,3).sumOf()

add(1)(2,3).sumOf()

add(1)(2)(3).sumOf()

> 参考[详解JS函数柯里化 - 简书 ](https://www.jianshu.com/p/2975c25e4d71)

#### 实现方法1

利用函数闭包，储存中间值，后续调用的函数其实是另一个函数。

```javascript
function add(){
    //第一次执行，获取参数数组
    let _args = Array.prototype.slice.call(arguments)
    //后续执行的新函数
    let _adder = function(){
        _args.push(...arguments)
        return _adder
    }
    //提供sumOf表示终止，求值
    _adder.sumOf = function(){
        return _args.reduce((sum, num)=>sum + num)
    }

    return _adder
}
console.log(add(2)(3)(4).sumOf()) // 9
```

#### 实现方法2

我当时的思路，利用函数的原型对象存储中间值，但没写好，寄。

```javascript
function add2(...args){
    let _val = "_curryAdd"
    let _proto = add2.prototype
    _proto[_val] = [... _proto[_val] ?? [], ...args]

    add2.sumOf=()=>{
        let sum = _proto[_val].reduce((sum, num)=>sum + num)
        delete _proto[_val]
        return sum
    }
    return add2
}

console.log(add2(1)(2)(3,4).sumOf()) // 10
```

