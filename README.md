# CSS中的一些基本理念

## CSS中的属性一定要在布局算法中才能发挥作用

### [如何理解布局算法](https://www.joshwcomeau.com/css/understanding-layout-algorithms/)深刻的阐明了这一理念,其中有一些关键的额心智模型:

1. The properties we write are inputs, like arguments being passed to a function. It's up to the layout algorithm to choose what to do with those inputs. If we want to understand CSS, we need to understand how the layout algorithms work. Knowing the properties alone is insufficient.

2. 我们需要思考布局算法通过那些属性可以改变?如果多个布局算法用于一个元素的时候发生冲突的情况下，这些算法的优先级是什么?

3. 我们需要思考每种布局算法解决什么问题?比如flexbox这种布局算法解决的额问题是: Flexbox is all about arranging a group of items in a row or column, and giving us a ridiculous amount of control over the distribution and alignment of those items.我们需要抓住关键,flexbox只对一行或者一列中的元素进行控制,主要控制分布和对齐,还可以控制元素是增长还是缩小,额外空间如何分布等。
    - 3.1 flexbox解决元素分布,主要通过flex-direction来控制是水平分布还是垂直分布,这里最关键的一点是改变了方向，本质是改变了主轴的方向
    - 3.2 In Flexbox, everything is based on the primary axis.All of the rules are structured around this primary axis, and the cross axis that runs perpendicularly.(所有规则都是围绕该主轴和垂直延伸的交叉轴构建的。)
    - 3.3 主轴元素的分布一定是以组为单位

4. 理解flexgrid为什么不能取代flexbox,grid主要解决的是什么问题?
