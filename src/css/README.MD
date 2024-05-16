## CSS RESET 说明
#### 为什么要使用重置盒子模型？
1. 可以参考这篇文章，https://www.joshwcomeau.com/css/custom-css-reset/
    - 这里使用了一个例子来说明默认的box-sizing: content-box 与修改以后的box-sizing:border-box的区别
    - 这里的content-width是156px似乎与调试时候显示的宽度196px不一致,因此一个合理的猜测是调试的宽度是包括内边距padding的40px的
    - 如果想兼容以前的box-sizing可以采用零一种写法 html 元素设置box-sizing:border-box,其他元素继承，然后设置一个legacy的类覆盖掉继承的值就可以啦

2. CSS需要掌握的基础知识包括
    - css选择器
        basic (元素和类)
        advanced (id和属性)
        combined (后代和child)
        伪类和伪元素
        分组和多选择
    - css布局和属性
        重点掌握布局算法
        常用的一些经典属性的使用技巧
    - css动画
        transition属性
        @keyframes
    - css图片的关键属性
        background-position
        background-size
        background-origin
    - css 渐变和滤镜
    - css 常见的hacker