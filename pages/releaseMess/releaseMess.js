// pages/releaseMess/releaseMess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    tradingIndex: 0,
    saleIndex: 0,
    categoryArray: ['鸭苗', '苹果', '荔枝', '鸡苗'],
    placeOrigin:['江门','佛山','珠海','揭阳','湛江'],
    unitList:['KG','M','个','只','批'],
    imageList:[],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    showAddress:false
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

  changeTabs(e) {
    let {
      id
    } = e.currentTarget.dataset;
    this.setData({
      tabIndex: id
    })
  },

  tradingMode(e) {
    let {
      id
    } = e.currentTarget.dataset;
    this.setData({
      tradingIndex: id
    })
  },

  salesStatus(e) {
    let {
      id
    } = e.currentTarget.dataset;
    this.setData({
      saleIndex: id
    })
  },

  //品类选择
  bindPickercategoryChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      categoryindex: e.detail.value
    })
  },

  //产地选择
  bindPickerPlaceChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      placeindex: e.detail.value
    })
  },

  //单位选择
  bindPickerUnitChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      unitindex: e.detail.value
    })
  },

  //地址选择器
  bindRegionChange: function (e) {
    this.setData({
      showAddress:true,
      region: e.detail.value
    })
  },



  //图片上传
  addImage(){
    let that = this;
    let {imageList} = this.data;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        imageList.push(tempFilePaths[0])
        console.log(tempFilePaths);
        that.setData({
          imageList
        })
      }
    })
  },

  delImg(e){
    let { imageList } = this.data;
    let ImgIndex = e.currentTarget.dataset.imgindex;
    console.log(ImgIndex);
    imageList.splice(ImgIndex,1);
    this.setData({
      imageList
    })
  },

  
})