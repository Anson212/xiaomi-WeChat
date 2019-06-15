// pages/classify/detail/detail.js
let postsData = require("../../../data/classify-data.js");
let cartList = wx.getStorageSync("cartList") || [];  //设置缓存用来带到购物车页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置轮播图参数
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    stock: 933,//库存
    boxFlag: true, //加入购物车弹框
    addButton: "加入购物车",
    num: 1, //声明一个默认的变量使input默认是1
    minusStatus: 'disabled', // 使用data数据对象设置样式名  
    list:[]
  },

  /**
 * 点击加好数量增加
 */
  bindPlus: function (e) {
    let _this = this;
    var num = this.data.num; //拿到当前在data声明的num值
    num++; //不作过多的考虑自增1
    //只有大于1的时候，才能normal状态，否则就是disabled状态
    var minusStatus = num < 1 ? "disabled" : "normal";
    //将数值与状态写回
    _this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },

  /**
 * 手动输入数量
 */
  bindManual: function (e) {
    let _this = this;
    var num = e.detail.value; // 获取手动输入的数值
    //将数值与状态写回
    _this.setData({
      num: num
    })
  },

  /**
 * 点击减号数量减少
 */
  bindMinus: function (e) {
    let _this = this;
    var num = this.data.num; //拿到当前在data声明的num值
    //判断如果大于1的时候，才能减
    if (num > 1) {
      num--;
    }
    //只有大于1的时候，才能normal状态，否则就是disabled状态
    var minusStatus = num < 1 ? "disabled" : "normal";
    //将数值与状态写回
    _this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },

  /**
 * 加入购物车功能
 */
  toAddCart: function (e) {
    let _this = this;
    let testProduct = this.data.cartProduct; //拿到加载过来的数据
    testProduct.num = this.data.num; //拿到输入框的数值
    let flag = 0; //声明一个变量来做判断
    for (let i = 0; i < cartList.length; i++) { //循环当前拿到的缓存数据
      if (cartList[i].proId == testProduct.proId) {//缓存中的id等于当前的id
        cartList[i].num = parseInt(cartList[i].num) + parseInt(testProduct.num)
        flag = 1;

      }
    }
    //如果flag当前是等于0，在缓存数组中插入当前的数据
    flag == 0 ? cartList.push(testProduct) : "";
    console.log(cartList)
    _this.setData({
      cartNum: cartList.length
    })
    wx.setStorageSync("cartList", cartList); //把缓存同步到购物车列表页面
    wx.showToast({// 设置提示框
      title: "已加入购物车",
      icon: "success",
      duration: 2000
    })

    _this.addHide(); //把提示框隐藏

  },

  /**
 * 立即购买功能
 */
  toPay: function (e) {
    let _this = this;
    let testProduct = this.data.cartProduct; //拿到加载过来的数据
    testProduct.num = this.data.num; //拿到输入框的数值
    let payList = []; //声明一个数组来存放当前要购买的数据
    payList.push(testProduct);//把当前的数据存放到数组里
    wx.setStorageSync("payList", payList);//设置缓存
    wx.navigateTo({
      url: "/pages/order/pay/pay",
    })
  },


  /**
 * 点击加入购物车显示弹框
 */
  addCart: function (e) {
    this.setData({
      boxFlag: false,
      addButton: "加入购物车"
    })
  },
  /**
 * 立即购买按钮
 */
  addBuy: function (e) {
    this.setData({
      boxFlag: false,
      addButton: "立即购买"
    })
  },

  /**
   * 点击模态层把弹框隐藏
   */
  addHide: function (e) {
    this.setData({
      boxFlag: true,
    })
  },
  /**
 * 购物车图标跳转
 */
  toCart: function (e) {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },










  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.setNavigationBarTitle({ //修改页面标题
      title: '商品详情',
    });

     options.child_id = options.child_id || 682;
     options.child_title = options.child_title || 689;
    
    //获取产品列表
    var proListy = postsData.postList;
    var proId;//商品id
    //获取缓存
    // let proListy = wx.getStorageSync("postsData.postList");
    for (let i = 0; i < proListy.length; i++) {
      for (let j = 0; j < proListy[i].children.length;j++){
        if (proListy[i].children[j].name   == options.child_title){
          proId = proListy[i].children[j];
        }
      }
    }
    let productItem = proId;
    console.log(productItem)
    
    //获取商品输出的参数
    let cartProduct = {
      proId: productItem.child_id,//拿到当前的id
      title: productItem.name, //拿到标题
      price: productItem.CurrentPrice, //拿到价格
      Product:productItem.ProductDescLong, //商品概述
      num: parseInt(this.data.num), //自定义的数据
      parameter: productItem.parameter, //商品详情参数
      img: productItem.ProductPicSrcImg, //图片
      jump: '/pages/classify/detail/detail?child_id=' + productItem.child_id + '&child_title=' + productItem.name, //跳转的路径
    }
    // console.log(productItem)

    _this.setData({
      proId: productItem.child_id, // 当前的id
      proListArray: productItem, // 缓存中的数据
      cartProduct: cartProduct,//拿到当前整合的数据
      imgUrls: productItem.swiper, //轮播图数据
      parameter: productItem.parameter, //商品详情参数
      ProductDescLong: productItem.ProductDescLong //商品概述
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
    let _this = this;
    cartList = wx.getStorageSync('cartList') || [];  //页面显示的时候显示缓存
    _this.setData({
      cartNum: cartList.length
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