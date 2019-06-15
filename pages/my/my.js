// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [
      {
        id: 1,
        name: '待发货',
        jump: '/pages/order/list/list?tagNum=1',
        img: '/images/sending.png',
        num: 1
      },
      {
        id: 2,
        name: '待收货',
        jump: '/pages/order/list/list?tagNum=2',
        img: '/images/delivery.png',
        num: 1
      },
      {
        id: 3,
        name: '退换/售后',
        jump: '/pages/order/list/list?tagNum=3',
        img: '/images/service.png',
        num: 5
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx: wx.setNavigationBarTitle({ //修改标题
      title: '我的'
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