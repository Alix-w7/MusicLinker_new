//app.js
App({

  globalData: {
    userInfo: null,
    server_base: "https://music-link.caoyu.online",
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
  },


})
