// pages/payMoney/payMoney.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:1,
    dataList:{
      notPay:[{
        rentDate:'四月份租金',
        rent:5000,
        idNum:10086,
        endDate:'2021/5/5'
      },{
        rentDate:'五月份租金',
        rent:5000,
        idNum:10000,
        endDate:'2021/5/5'
      },{
        rentDate:'六月份租金',
        rent:5000,
        idNum:10010,
        endDate:'2021/5/5'
      }],
      paid:[{
        rentDate:'一月份租金',
        rent:5000,
        idNum:10086,
        endDate:'2021/5/5'
      },{
        rentDate:'二月份租金',
        rent:5000,
        idNum:10000,
        endDate:'2021/5/5'
      },{
        rentDate:'三月份租金',
        rent:5000,
        idNum:10010,
        endDate:'2021/5/5'
      }],
    }
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
  changeTab(e){
    this.setData({
      tab:e.currentTarget.dataset.tabid
    })
  },

  payfor(){
    wx.showToast({
      title: '支付失败！',
      icon:'none',
      duration:1500
    })
  }

  
})