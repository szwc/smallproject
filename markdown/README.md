# Practice markdow

## 加粗
**hehe**
要加粗的文字左右分别用两个*号包起来

## 斜体
*hehe*
要倾斜的文字左右分别用一个*号包起来

## 斜体加粗
***hehehe***
要倾斜和加粗的文字左右分别用三个*号包起来   ***文字***

## 删除线
~~呵呵~~
要加删除线的文字左右分别用两个~~号包起来

## 引用
在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>> n个...
> 引用 呵呵

## 分割线
三个或者三个以上的 - 或者 * 都可以。
****

----
over

## 图片

`
![图片alt](图片地址 ''图片title'')
`

![银tama](https://tse2-mm.cn.bing.net/th?id=OIP.ZmC3WhuAM9bgpvWC8gATlgHaEK&w=268&h=160&c=7&o=5&pid=1.7 "hhehe")

## 超链接

语法：

`[超链接名](超链接地址 "超链接title")	title可加可不加`
[Bing](https://cn.bing.com "Bing")

markdown 不支持在新标签页打开 ，可用a标签代替

`
<a href="https://cn.bing.com" target="_blank">bing</a>
`

<a href="https://cn.bing.com" target="_blank">bing</a>

##　列表

1.无序列表

语法：
无序列表用 - + * 任何一种都可以

```
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```
效果如下：

- 列表内容
- 列表内容
- 列表内容


2.有序列表
```
1.列表内容
2.列表内容
3.列表内容
```
效果如下

1.列表内容
2.列表内容
3.列表内容

3.列表嵌套
**上一级和下一级之间敲三个空格即可**
- 呵呵
   。呵呵
- no呵呵
   1.henidaye
## 表格
语法：

```
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

效果如下：

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

## 代码
语法：
单行代码：代码之间分别用一个反引号包起来
```
`代码内容`
```
代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行
```
  代码...
  代码...
  代码...
```
示例：

单行代码

`create database hero;`

代码块

```
    function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
```
##　流程图
```
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&``` ```
效果如下：
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```



