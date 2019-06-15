// pages/order/list/list.js
let orderList = [
  {
    id: 1,
    imgSrc: '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    title: '小米6 变焦双摄',
    price: 2299,
    num: 2
  }, {
    id: 2,
    imgSrc: '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    title: '小米6 变焦双摄',
    price: 2299,
    num: 1
  }, {
    id: 3,
    imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792',
    title: '红米Note 5 AI双摄',
    price: 1399,
    num: 1
  }
];
let wdelivery = [
  {
    id: 1,
    imgSrc: '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    title: '小米6 变焦双摄',
    price: 2299,
    num: 2
  }
];
let wreceive = [
  {
    id: 2,
    imgSrc: '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    title: '小米6 变焦双摄',
    price: 2299,
    num: 1
  }
];
let compelete = [
  {
    id: 3,
    imgSrc: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792',
    title: '红米Note 5 AI双摄',
    price: 1399,
    num: 1
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {

  }, 

  //全部
  all: function () {
    this.setData({
      tagNum: 0,
      orderList: orderList
    })
  },
  //待发货
  wdelivery: function () {
    this.setData({
      tagNum: 1,
      orderList: orderList
    })
  },
  //待收货
  wreceive: function () {
    this.setData({
      tagNum: 2,
      orderList: wreceive
    })
  },
  //已完成
  compelete: function () {
    this.setData({
      tagNum: 3,
      orderList: compelete
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //修改标题
    wx.setNavigationBarTitle({
      title: "我的订单",
    })
    let setOrderList;
    switch (options.tagNum) {
      case "0":
        setOrderList = orderList;
        break;
      case '1':
        setOrderList = orderList;
        break;
      case '2':
        setOrderList = orderList;
        break;
      case '3':
        setOrderList = orderList;
        break;
      default:
        setOrderList = orderList;
        break;
    }
    this.setData({
      orderList: setOrderList
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