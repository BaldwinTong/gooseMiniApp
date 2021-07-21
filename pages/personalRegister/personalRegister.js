// pages/personalRegister/personalRegister.js
import { countDown,formatTime } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendMess:false,
    time:60,
    IDFont:'../../images/idFront.png',
    IDBlack:'../../images/idBack.png',
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

  scan() {
    this.camera()
  },

  takeFront(){
    let that = this;
    let { IDFont } = this.data
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        IDFont = res.tempFilePaths[0];
        that.setData({
          IDFont
        })
      }
    })
    
  },
  
  takeBack(){
    let that = this;
    let { IDBlack } = this.data
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        IDBlack = res.tempFilePaths[0];
        that.setData({
          IDBlack
        })
      }
    })
  },
  

  getCode(){
    let that = this;
    let { time } = this.data
    this.setData({
      sendMess:true
    })

   let interval =  setInterval(()=>{
      time = countDown(time)
      that.setData({
        time
      })
      if(time == 0){
        clearInterval(interval);
        that.setData({
          sendMess:false
        })
      }
    },1000)
  
  },

 

})