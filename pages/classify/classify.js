// pages/classify/classify.js
let postsData = require("../../data/classify-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1, //点击按钮高亮
    curIndex: 0, //定义判断是否有数据输出
    proList:[]
  },

  //事件处理函数 
  switchRightTab:function(e){
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index 
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  toProDetail:function(e){
    var child_id = e.currentTarget.dataset.id;
    var child_title = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/classify/detail/detail?child_id=' + child_id + '&child_title=' + child_title
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    //设置缓存
    // wx.setStorageSync('postsData.postList', postsData.postList);
    _this.setData({
      proList: postsData.postList //商品数据
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})