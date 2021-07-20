Page({
  data: {
    demoData:'555555555',
    showPopup:false,
    imageList: [
      "../../images/banner.png",
      "../../images/banner2.png"
    ],
    newsList:[
      {
        title:'开平马冈鹅鹅苗',
        date:'2021-2-2',
        UrgentSale:true,
        saleNum:1859,
        stock:9000,
        price:'699.00',
        watchNum:269,
        imageUrl:'https://img2.baidu.com/it/u=198033356,3133871595&fm=224&fmt=auto&gp=0.jpg',

      },
      {
        title:'农家新鲜西红柿',
        date:'2021-2-2',
        UrgentSale:false,
        saleNum:1691,
        stock:600,
        price:'99.99',
        watchNum:745,
        imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.fht360.com%2Fcontent%2Fimage%2F20161105%2F5c9a153cd7b045afb98c0809780675cd.png&refer=http%3A%2F%2Fimg.fht360.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629359018&t=fbb774abc7c420f3256ea380452e2c55'
      },
      {
        title:'当季水果新鲜现摘龙眼',
        date:'2021-2-2',
        UrgentSale:true,
        price:'199.98',
        saleNum:1998,
        stock:8000,
        watchNum:500,
        imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170604%2F2f0dc59d38804f5c9984d2c293efa71a_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629359688&t=7d5d49c8b9c405fd50875799e60f6f7d'
      },
      {
        title:'新鲜桃子在线采摘',
        date:'2021-2-2',
        UrgentSale:true,
        price:'288.58',
        saleNum:6852,
        stock:5874,
        watchNum:500,
        imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20171223%2Fe212611de1764ec5b98d23c7b643405e.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629359705&t=fcb550eab5b95ce2af2617ea8e2308c4'
      },
      {
        title:'荔枝大便买',
        date:'2021-2-2',
        UrgentSale:true,
        price:'6.00',
        saleNum:28554,
        stock:66699,
        watchNum:500,
        imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fguifun.oss-cn-hangzhou.aliyuncs.com%2Fupfiles%2Fupload%2F2016%2F07%2F1467367220127524.png_thumb.png&refer=http%3A%2F%2Fguifun.oss-cn-hangzhou.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629359720&t=674247a716a6e659f02234cea7ac5624'
      },
      {
        title:'无籽大西瓜',
        date:'2021-2-2',
        UrgentSale:true,
        price:'88.88',
        saleNum:955,
        stock:7688,
        watchNum:500,
        imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.deskcity.org%2Fpic_360%2Fd1%2Fcd%2F22%2Fd1cd22596ce736f1e39d17c360c87f92.jpg&refer=http%3A%2F%2Fup.deskcity.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629359742&t=363242cb7fc5470b99e52b783687e95c'
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
  },

  toPersonalReg(){
    this.onClose();
    wx.navigateTo({
      url: '../personalRegister/personalRegister',
    })
  },

  toBusinessReg(){
    this.onClose();
    wx.navigateTo({
      url: '../enterpriseRegister/enterpriseRegister',
    })
  },

  toReleaseMess(){
    wx.navigateTo({
      url: '../releaseMess/releaseMess',
    })
  },

  


  onClose() {
    this.setData({ showPopup: false });
  },

  toregister(){
    this.setData({showPopup:true})
  },

  toCloudClass(){
    wx.showToast({
      title: '敬请期待！',
      icon:'none',
      duration:1500
    })
  },



  changessss(event) {
    console.log(event.detail)
    // { name: '李四' }
  }
})
