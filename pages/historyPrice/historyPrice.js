// pages/todayPrice/todayPrice.js
let utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      id: 1,
      proName: '马岗鹅苗',
      company: '双',
      price: '26.00',
      range: '02.00',
      symbol: '-',
      type: 'down'
    }, {
      id: 2,
      proName: '小白菜',
      company: 'kg',
      price: '26.00',
      range: '02.00',
      symbol: '+',
      type: 'rise'
    }, {
      id: 3,
      proName: '油菜',
      company: 'kg',
      price: '5.50',
      range: '00.90',
      symbol: '+',
      type: 'rise'
    }, {
      id: 4,
      proName: '西兰花',
      company: 'kg',
      price: '4.00',
      range: '00.70',
      symbol: '+',
      type: 'rise'
    }, {
      id: 5,
      proName: '大头菜',
      company: 'kg',
      price: '2.00',
      range: '00.80',
      symbol: '-',
      type: 'down'
    }, {
      id: 6,
      proName: '排骨',
      company: 'kg',
      price: '25.00',
      range: '03.00',
      symbol: '+',
      type: 'rise'
    }, {
      id: 7,
      proName: '鲜牛肉',
      company: 'kg',
      price: '48.00',
      range: '01.00',
      symbol: '-',
      type: 'down'
    }, {
      id: 8,
      proName: '大白菜',
      company: 'kg',
      price: '2.00',
      range: '00.50',
      symbol: '+',
      type: 'rise'
    }, {
      id: 9,
      proName: '花生',
      company: 'kg',
      price: '3.00',
      range: '01.00',
      symbol: '-',
      type: 'down'
    }, {
      id: 10,
      proName: '草鱼',
      company: 'kg',
      price: '9.00',
      range: '',
      symbol: '-',
      type: 'none'
    }, ],
    dateList: [{
      id: 0,
      dayC: '日',
      dayN: '4',
    }, {
      id: 1,
      dayC: '一',
      dayN: '5',
    }, {
      id: 2,
      dayC: '二',
      dayN: '6',
    }, {
      id: 3,
      dayC: '三',
      dayN: '7',
    }, {
      id: 4,
      dayC: '四',
      dayN: '8',
    }, {
      id: 5,
      dayC: '五',
      dayN: '9',
    }, {
      id: 6,
      dayC: '六',
      dayN: '10',
    }],

    // weekDays: ['日','一','二','三','四','五','六',],
    // days:[],
    choseDate: 16,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate()
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

  getDate() {
    let that = this;
    let date = new Date();
    let weekDay = date.getDay();
    let day = date.getDate();

    switch (weekDay) {
      case 0:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
          item.dayN = day;
        })
        break;
      case 1:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
        })
        break;
      case 2:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
        })
        break;
      case 3:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
        })
        break;
      case 4:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          };
          item.dayN = day;
        })
        break;
      case 5:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
        })
        break;
      case 6:
        that.data.dateList.forEach(item => {
          if (item.id == weekDay) {
            that.setData({
              choseDate: item.id
            })
          }
        })
    }



  },

  clickActive(e) {
    let that = this;
    let day = e.currentTarget.dataset.id;
    this.data.dateList.forEach((item, i) => {
      console.log(e, item.id);
      if (item.id == day) {
        that.setData({
          choseDate: day
        })
      }
    })
  }

})