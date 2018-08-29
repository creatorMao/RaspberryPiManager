# RaspberryPiManager
## 树莓派管理工具（微信小程序）

* <img src="https://github.com/creatorMao/RaspberryPiManager/raw/master/Design/1.jpg"  height="50%" width="50%">
* 实现原理不是通过ssh访问,而是在树莓派中搭建一个flask web程序,该程序接受来自微信小程序中的请求，然后通过flask调用对应的系统函数，实现的(查看cpu温度，内存，空间，开机时间等....)。
* flask的程序源码 [flask源码](https://github.com/creatorMao/RaspberryPiManager/blob/master/web/test.py)
* 微信小程序不会上架，仅供学习使用。

