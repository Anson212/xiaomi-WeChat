// pages/order/pay/pay.js
let orderList; //声明一个变量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData: null
  },
  //收货地址
  toAddress: function (e) {
    var _this = this;
    wx: wx.chooseAddress({
      success: function (res) {
        console.log(res)
        //把地址显示在页面上
        _this.setData({
          addressData: {
            userName: res.userName,//收货人姓名
            postalCode: res.postalCode,//邮编
            provinceName: res.provinceName,//国标收货地址第一级地址
            cityName: res.cityName,//国标收货地址第一级地址
            countyName: res.countyName,//国标收货地址第一级地址
            detailInfo: res.detailInfo,//	详细收货地址信息
            nationalCode: res.nationalCode,//收货地址国家码
            telNumber: res.telNumber  //	收货人手机号码
          }
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //修改当前的标题
    wx.setNavigationBarTitle({
      title: '确认购买',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    orderList = wx.getStorageSync('payList') || []; //获取购物车中定义的缓存
    this.setData({
      orderList: orderList  // 把数据渲染到页面上
    })

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

  }
})