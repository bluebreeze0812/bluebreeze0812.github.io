---
layout:     post
title:      Implementing a password input component
date:       2019-06-24 20:49:27 +0800
author:     Leo
categories: Learn
tags:       Misc
---
To implement a 6-digit password input component, first you will need a hidden input tag hiding behind, this `input` will not be able to be seen, you can achieve this simply by giving it `0` value for both its `width` and `height` .

Then, adding 6 disabled `input` (or `div` to give it more flexibility), those are to be shown up front.

After this groundwork is done, you can start writing js codes,  add a event listener to the disabled `input` elements, when they were clicked, trigger the click event of the hidden `input` element, so in fact the hidden `input` will actually get the focus, which means you are tying into this hidden `input` element.

Then, you have to divide the input into 6 pieces and distribute them to the 6 hidden `input` elements one by one.

This is basically the main idea of implementing this password input component, here is the snippets  and final result.

```html
<view class='container'>
  <view class='render-wrap'>
    <block wx:for='{{dataSource}}' wx:key='this'>
      <input type='number' class='render-input' bindtap='onTapFocus' type='{{showType}}' disabled value='{{item.initValue}}'></input>
    </block>
    <input type='number' maxlength='6' focus='{{isFocus}}' class='hidden-input' bindinput='mobileInput'></input>
  </view>
</view>
```

```js
Page({
  /**
   * page initiating
   */
  data: {
    showType:'password',
    isFocus: false,
    // 6 digit input, you can simply change the number of digits by adding or substracting values from this json object
    dataSource: [{
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }, {
      initValue: ''
    }]
  },
  /**
   * fake focusing
   */
  onTapFocus: function() {
    this.setData({
      isFocus: true
    });
  },
  /**
   * user typing
   */
  mobileInput: function(e) {

    let dataSource = this.data.dataSource;
    let curInpArr = e.detail.value.split('');
    let curInpArrLength = curInpArr.length;

    if (curInpArr.length != this.data.dataSource.length)
      for (let i = 0; i < dataSource.length - curInpArrLength; i++)
        curInpArr.push('');

    for (let i = 0; i < this.data.dataSource.length; i++) {
      let initValue = 'dataSource[' + i + '].initValue';
      this.setData({
        [initValue]: curInpArr[i]
      });
    }
  },
})
```

```css
.render-wrap{
  display: flex;
  flex-direction: row;
}
.render-input{
  width: 100rpx;
  height: 100rpx;
  border:1rpx solid #eee;
  border-left: none;
  box-sizing: border-box;
  text-align: center;
}

.render-input:first-child{
  border-left: 1rpx solid #eee;
}

.hidden-input{
  width: 0;
  height: 0;
}
```

<img src="https://i.imgur.com/wjUbG8c.png" alt="input empty" title="input empty" style="width: 1000px; height: 515px; display: block; object-fit: contain;">

<img src="https://i.imgur.com/PQqPAs2.png" alt="input full" title="input full" style="width: 1000px; height: 515px; display: block; object-fit: contain;">

