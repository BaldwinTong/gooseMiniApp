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
        watchNum:269,
        imageUrl:'../../images/01.png'
      },
      {
        title:'定了！明年就种“它们”！春节期间这些菜价格高、走货快!',
        date:'2021-2-2',
        watchNum:745,
        imageUrl:'../../images/02.png'
      },
      {
        title:'鹅苗养多少天可以放养？鹅苗什么时候养最好?如何养殖鹅苗？',
        date:'2021-2-2',
        watchNum:500,
        imageUrl:'../../images/03.png'
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
