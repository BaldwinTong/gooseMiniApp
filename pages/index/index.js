Page({
  data: {
    imageList: [
      "../../images/banner.png",
      "../../images/banner2.png"
    ],
    newsList:[
      {
        title:'养马岗鹅赚钱吗？马岗鹅养殖前景如何？',
        date:'2021-2-2',
        watchNum:269,
        imageUrl:'https://img2.baidu.com/it/u=198033356,3133871595&fm=224&fmt=auto&gp=0.jpg'
      },
      {
        title:'7月5日马岗鹅价格：鹅苗涨价！地销鹅跌价！',
        date:'2021-2-2',
        watchNum:745,
        imageUrl:'https://img1.baidu.com/it/u=708253835,1600959509&fm=26&fmt=auto&gp=0.jpg'
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
