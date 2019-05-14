---
layout:     post
title:      Wechat Mini-program modal animations
date:       2019-05-14 19:49:27 +0800
author:     Leo
categories: Learn
tags:       Misc
---
**WXML**

```html
<!-- custom modal -->
<view bindtap='fadeInDlg'  style='display:flex;justify-content: center;'><text>click</text></view>
<view class="mask" bindtap='fadeOutDlg' animation="{{animationBgData}}" catchtouchmove="preventTouchMove" wx:if="{{showModalDlg}}"></view>
<view class="modalDlg" animation="{{animationData}}" wx:if="{{showModalDlg}}">
    <text>acquire authorization</text>
    <text>not authorized, acquire now?</text>
    <view>
    <button bindtap="modelCancel">cancel</button>
    <button bindtap="modelC">confirm</button>
    </view>
</view>
```

**WXSS**

```css
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    z-index: 9000;
    opacity: 0;
}
.modalDlg{
    width: 580rpx;
    height: 400rpx;
    position: fixed;
    top: 60%;
    left: 0;
    z-index: 9999;
    margin: -370rpx 85rpx;
    background-color: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    
}
.modalDlg>text{
  font-size:30rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.modalDlg>text:first-child{
  height:80rpx;
  font-weight: 700;
  width:100%;
  border-bottom: 1rpx solid #CCC;
}
.modalDlg>text:nth-child(2){
  height:100rpx;
  margin:0 40rpx;
}
.modalDlg>view{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.modalDlg>view>button{
  width:290rpx;
  height:80rpx;
  font-size: 30rpx;
  border-radius: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1rpx solid #CCC;
}
.modalDlg>view>button:first-child{
  border-right:1rpx solid #CCC;
}
.modalDlg>view>button::after {
  border-radius: 0;
}
```

**JS**

```js
Page({

  data: {
    showModalDlg: false
  },
  onLoad: function() {

  },
  fadeInDlg:function(){
    this.setData({
      showModalDlg:true
    })

    var animation = wx.createAnimation({
      duration:0,
      timingFunction:'step-start',
    })
    animation.opacity(0).scale(0.8,0.8).step();
    this.setData({
      animationData: animation.export()
    })
    animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    animation.opacity(1).scale(1,1).step()
    this.setData({
      animationData:animation.export()
    })

    var animationBg = wx.createAnimation({
      duration: 200,
      timingFunction: 'step-start',
    })
    animationBg.opacity(0).step()
    animationBg = wx.createAnimation({
      duration:500,
      timingFunction:'ease',
    })
    animationBg.opacity(0.5).step()
    this.setData({
      animationBgData:animationBg.export()
    })
  },
  fadeOutDlg:function(){
    var _this = this
    var animation = wx.createAnimation({
      duration:200,
      timingFunction:'ease',
    })
    animation.opacity(0).scale(0.8, 0.8).step();
    this.setData({
      animationData:animation.export()
    })

    var animationBg = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    animationBg.opacity(0).step()
    this.setData({
      animationBgData: animationBg.export()
    })

    setTimeout(function(){
      this.setData({
        showModalDlg: false
      })
    }.bind(this),200)
  },

  preventTouchMove: function() {
    // events bubbling prevention
  },
})
```

