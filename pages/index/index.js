Page({
  data: {
    imageList: [
      "../../images/banner.png",
      "../../images/banner2.png"
    ],
    newsList:[
      {
        title:'跌多涨少 这些菜今天价格又跌了',
        date:'2021-2-2',
        watchNum:199,
        imageUrl:'../../images/动态1.png'
      },
      {
        title:'跌多涨少 这些菜今天价格又跌了',
        date:'2021-2-2',
        watchNum:199,
        imageUrl:'../../images/动态2.png'
      },
      {
        title:'跌多涨少 这些菜今天价格又跌了',
        date:'2021-2-2',
        watchNum:199,
        imageUrl:'../../images/动态3.png'
      },
      
    ],
  },

  onLoad() {
   
  },

  /**
   * 跳转
   */
  todayPrice(){
    wx.navigateTo({
      url: '../todayPrice/todayPrice',
    })
  },
  toHistoryPrice(){
    wx.navigateTo({
      url: '../historyPrice/historyPrice',
    })
  },
  toBusinssStyle(){
    wx.navigateTo({
      url: '../memberStyle/memberStyle',
    })
  },

  toPayMoney(){
    wx.navigateTo({
      url: '../payMoney/payMoney',
    })
  }
})
