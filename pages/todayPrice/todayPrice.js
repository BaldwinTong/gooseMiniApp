// pages/todayPrice/todayPrice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[{
      id:1,
      proName:'马冈鹅苗',
      company:'双',
      price:'26.00',
      range:'02.00',
      symbol:'-',
    },{
      id:2,
      proName:'小白菜',
      company:'kg',
      price:'26.00',
      range:'02.00',
      symbol:'+',
    },{
      id:3,
      proName:'油菜',
      company:'kg',
      price:'5.50',
      range:'00.90',
      symbol:'+',
    },{
      id:4,
      proName:'西兰花',
      company:'kg',
      price:'4.00',
      range:'00.70',
      symbol:'+',
    },{
      id:5,
      proName:'大头菜',
      company:'kg',
      price:'2.00',
      range:'00.80',
      symbol:'-',
    },{
      id:6,
      proName:'排骨',
      company:'kg',
      price:'25.00',
      range:'03.00',
      symbol:'+',
    },{
      id:7,
      proName:'鲜牛肉',
      company:'kg',
      price:'48.00',
      range:'01.00',
      symbol:'-',
    },{
      id:8,
      proName:'大白菜',
      company:'kg',
      price:'2.00',
      range:'00.50',
      symbol:'+',
    },{
      id:9,
      proName:'花生',
      company:'kg',
      price:'3.00',
      range:'01.00',
      symbol:'-',
    },{
      id:10,
      proName:'草鱼',
      company:'kg',
      price:'9.00',
      range:'00.60',
      symbol:'+',
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  bindSearch(){
    wx.showToast({
      title: '暂无数据',
      icon:'none',
      duration:1500
    })
  }
})