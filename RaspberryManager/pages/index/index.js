// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * canvas画圆弧
   */
  draw: function (id, current, sum, color) {
    var width = (wx.getSystemInfoSync().screenWidth / 750) * 200;
    var point = width / 2;
    var r = (width / 2) - 10;
    // 页面渲染完成  
    var cxt_arc = wx.createCanvasContext(id);//创建并返回绘图上下文context对象。  
    cxt_arc.setLineWidth(10);
    cxt_arc.setStrokeStyle('#3e3e47');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径  
    var width = (wx.getSystemInfoSync() / 750) * 650;
    cxt_arc.arc(point, point, r, 0, 2 * Math.PI, false);//设置一个原点(106,106)，半径为100的圆的路径到当前路径  
    cxt_arc.stroke();//对当前路径进行描边  

    cxt_arc.setLineWidth(10);
    cxt_arc.setStrokeStyle(color);
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径  
    var process = (current * (2 / sum));
    cxt_arc.arc(point, point, r, -Math.PI * 1 / 2, Math.PI * (process - 0.5), false);
    cxt_arc.stroke();//对当前路径进行描边  

    cxt_arc.draw();
  },

  /**
   * 从树莓派那里获取相应的数据
   */
   getData:function(){
     var that=this;
     wx.showLoading({
       title: '正在刷新',
     })
     wx.request({
       url: '',
       success:function(res){
         console.log(res);
         that.draw('canvasArc1', res.data.temp, 100, '#debc42');
         that.draw('canvasArc2', res.data.ram[1], res.data.ram[0], '#9fdd53');
         that.draw('canvasArc3', res.data.disk[1], res.data.disk[0], '#debc42');
         wx.hideLoading();
         wx.stopPullDownRefresh();
       }
     })
   }
})