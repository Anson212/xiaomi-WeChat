let postsData = require("../../data/home-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义轮播图参数
    indicatorDots: false, 
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },
  toProDetail:function(e){
    var goods_id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/products/detail/detail?goods_id=' + goods_id
    })
  },
  plantingDetail: function (e) {
    var planting_id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/products/detail/detail?planting_id=' + planting_id
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //设置缓存
    wx.setStorageSync('postsData.postList', postsData.postList);

    _this.setData({
      proList: postsData.postList, //商品数据
      classList: postsData.classList,  //商品类别
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