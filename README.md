# 项目说明
练手项目 看了微信官方文档语法和vue.js有点相似，正好学过vue 也用vue写过一个商城项目，就用小程序写个商城，一般来说学过vue.js写个小程序那是很简单的，小程序和vue.js无非就是路由跳转、传参、传数据！    
另外：微信小程序商城，长期维护版本更新

# 目录结构
- data —— 存放本地数据
- images —— 图片
- pages —— 项目页面文件

# 项目截图

![image](C:\Users\123\Desktop\xiaomi-WeChat\images\GIF.gif)![image](C:\Users\123\Desktop\xiaomi-WeChat\images\shouye.png)

![image](C:\Users\123\Desktop\xiaomi-WeChat\images\224342.png)![image](C:\Users\123\Desktop\xiaomi-WeChat\images\fafa.png)

![image](C:\Users\123\Desktop\xiaomi-WeChat\images\jjaa.png)![image](C:\Users\123\Desktop\xiaomi-WeChat\images\ghgsdgs.png)

# 购物车功能

```javascript
// pages/products/detail/detail.js
let postsData = require("../../../data/home-data.js");
let cartList  = wx.getStorageSync("cartList") || [];  
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
    boxFlag:true, //加入购物车弹框
    addButton:"加入购物车",
    num:1, //声明一个默认的变量使input默认是1
    minusStatus: 'disabled' // 使用data数据对象设置样式名  
  },
  /**
   * 点击加好数量增加
   */
  bindPlus:function(e){
    let _this = this;
    var num = this.data.num; 
    num++; //不作过多的考虑自增1
    var minusStatus = num < 1 ? "disabled" : "normal"; 
    _this.setData({
      num:num,
      minusStatus: minusStatus
    })
  },
  /**
   * 手动输入数量
   */
  bindManual:function(e){
    let _this = this;
    var num = e.detail.value;
    _this.setData({
      num: num
    })
  },
  /**
   * 点击减号数量减少
   */
  bindMinus:function(e){
    let _this = this;
    var num = this.data.num; 
    if(num>1){
      num--;
    }
    var minusStatus = num < 1 ? "disabled" : "normal";
    _this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  /**
   * 加入购物车功能
   */
  toAddCart:function(e){
    let _this = this;
    let testProduct  = this.data.cartProduct; 
    testProduct.num = this.data.num;
    let flag = 0; 
    for(let i=0;i<cartList.length;i++){ 
      if(cartList[i].proId == testProduct.proId){
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
      duration:2000
    })
    _this.addHide(); //把提示框隐藏
  },
  /**
   * 立即购买功能
   */
  toPay:function(e){
    let _this = this;
    let testProduct = this.data.cartProduct; //拿到加载过来的数据
    testProduct.num = this.data.num; //拿到输入框的数值
    let payList = []; 
    payList.push(testProduct);
    wx.setStorageSync("payList", payList);//设置缓存
    wx.navigateTo({
      url: "/pages/order/pay/pay",
    })
  },
  /**
   * 点击加入购物车显示弹框
   */
  addCart:function(e){
    this.setData({
      boxFlag: false,
      addButton: "加入购物车"
    })
  },

  /**
   * 立即购买按钮
   */
  addBuy:function(e){
    this.setData({
      boxFlag:false,
      addButton:"立即购买"
    })
  },

  /**
   * 点击模态层把弹框隐藏
   */
  addHide:function(e){
    this.setData({
      boxFlag: true,
    })
  },
  /**
   * 购物车图标跳转
   */
  toCart:function(e){
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
    options.goods_id = options.goods_id || 682;

    //获取产品列表
    var proId;//商品id
    //获取缓存
    let proList = wx.getStorageSync("postsData.postList");
    let planList = wx.getStorageSync("postsData.plantingList");
    for (let i = 0; i < proList.length;i++){
      if (proList[i].goods_id == options.goods_id) {
           proId = i; //如果相等就赋值给proId1
      }
    }
    let productItem = proList[proId];
    console.log(productItem)
    //获取商品输出的参数
    let cartProduct = {
      proId: productItem.goods_id,
      title: productItem.ProductName,
      price: productItem.CurrentPrice,
      num: parseInt(this.data.num),
      img: productItem.ProductPicSrcImg,
      jump: '/pages/products/detail/detail?goods_id=' + productItem.goods_id,
    }
    //渲染数据
    _this.setData({
      proId: proId,
      proListArray: proList,
      cartProduct: cartProduct,
      imgUrls: productItem.swiper,
      parameter: productItem.parameter,
      ProductDescLong: productItem.ProductDescLong
    })

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this = this;
    cartList = wx.getStorageSync('cartList') || [];  //页面显示的时候显示缓存
    _this.setData({
      cartNum:cartList.length
    })
  },
})
```

## 最后
数据均来自小米商城官网 如有侵权请请联系删除 ！！！   这个小项目做的有点粗糙、各位将就看看吧！![image](C:\Users\123\Desktop\xiaomi-WeChat\images\123.png)![image](C:\Users\123\Desktop\xiaomi-WeChat\images\123.png)![image](C:\Users\123\Desktop\xiaomi-WeChat\images\123.png)