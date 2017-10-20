# 图片上传前预览

简介：经常看到某些网站会有上传图片或者上传文件的功能，上传图片的话，提交之前可以预览，看一下图片的效果。我也来做一下！

## input type="file"

[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)

- type 类型为 file 的 input 元素 用户可以选择一个或多个(如果要提交多个，需要添加 multiple属性，可以选中多个文件)元素以提交表单的方式上传到服务器上, 或者通过 Javascript 的 File API 对文件进行操作
- 该input  value值 不选文件时为空 ，选中时，为文件的路径string,若选中多个文件，值为第一个文件的路径
- 用户选择的文件信息，可以通过input dom对象的files属性来访问
	1. files为文件对象组成的数组
	2. 每个 File 对象包含了下列信息: 
			- name: 文件名.
			- lastModified: UNIX timestamp 形式的最后修改时间.
			- lastModifiedDate:  Date 形式的最后修改时间.
			- size: 文件的字节大小.
			- type: DOMString 文件的 MIME 类型.
- 通过onchange事件 监听 input的状态(是否选中文件)

## 原理

通过input.files  可以拿到已经选中的文件对象，但是要怎么访问呢

files 对象中每个对象都是 File 构造函数的实例(实际是Blob对象)， 而File 是基于Blob的
`要获取用户文件系统上文件的Blob对象，请参阅 File文档。`  官方文档是这样描述的

拿到了File对象，通过URL.createObjectURL() 方法 会创建一个DOMString,包含一个表示参数中给出的对象的URL(即选中文件的url)。这个 URL 的生命周期和创建它的窗口中的 document 绑定。

然后直接引用这个url即可

[File  官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/File)
[Blob  官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)
[URL.createObjectURL()  官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)


注：在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。当不再需要这些 URL 对象时，每个对象必须通过调用 URL.revokeObjectURL() 方法来释放。浏览器会在文档退出的时候自动释放它们，但是为了获得最佳性能和内存使用状况，你应该在安全的时机主动释放掉它们。