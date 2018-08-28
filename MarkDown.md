# MarkDown 基本的写法
#### 2018.8.28

 ## 一个#表示一级标题，最多6个，表示6级标题
## 有序列表
1. First
   1. First
2. Second
3. Third

## 无序列表(* + 1 都可以)
* a
* b
* c
+ d
+ d
- e
- e

## 引用 >代表引用
> * 毛主席曾经说过......
> * 习近平曾经说过......
> * like this.....



## 分隔线(* - _ 三个符号至少三个以上就可以画出一条分割线)
---
***
___


## 链接
* 行内式:  []里放链接的文字，后跟着一个小括号，里面填地址
    *  [本篇md写法的引用](https://www.cnblogs.com/liugang-vip/p/6337580.html)
* 参数式   先定义链接，再将参数放到别处引用
    * [本篇md写法的引用]:https://www.cnblogs.com/liugang-vip/p/6337580.html
    * 这里演示一下参数是的写法[本篇md写法的引用] 


## 图片
* 行内式 格式和链接基本相同，唯一不同的是，行内式，需要多添加一个!号
    * ![这里是图片](https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48)
* 参数式
    * [这里是图片]:https://cdn2.jianshu.io/assets/default_avatar/4-3397163ecdb3855a0a4139c34a695885.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48
    * 图片放到![这里是图片]文字中间


## 代码框
* 单行 ``
    * `sdsd`
* 多行  ```
    ``` 这里可以写注释
    function void Test()
    {

    }
    ```
* 多行 ~~~
   ~~~
   function void Test()
   {

   }
   ~~~
## 删除线
* ~~删掉我~~

## 换行 使用br
速度<br>
换行测试<br>