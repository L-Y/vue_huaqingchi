<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">领取卡券</x-header>
    <br>
    <div class="topDiv"></div>
      <div class="cardTop" >
            <div style="width: 90%; margin-left: 5%;margin-right: 5%; padding: 20px 0;">
              <flexbox>
              <flexbox-item >
              <div class="amount">￥5</div>

              </flexbox-item>
            </flexbox>
            </div>
      </div>
      <div class="cardBottom line">
            <div style="width: 90%; margin-left: 5%; margin-right: 5%;padding: 0 0 10px 0; " >
              <div style="font-size: bold;">使用说明:</div>
              <ul style="padding-left:5%;color: #666;font-size: 14px;">
                <li>每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券...</li>
                <li>每种购物优惠券...</li>
                <li>每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券...</li>
                <li>每种购物优惠券...</li>
                <li>每种购物优惠券...</li>
                <li>每种购物优惠券...</li>
                <li>每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券每种购物优惠券...</li>
              </ul>
            </div>
      </div>
      <div class="bottomDiv"></div>
 </div>
</template>


<script>

import { XHeader, Grid, GridItem, Card, GroupTitle, Loading, Qrcode } from 'vux'
import { Badge, Group, Cell, CellBox, ViewBox, XInput, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    Loading,
    Card,
    Cell,
    CellBox,
    ViewBox,
    Qrcode,
    GroupTitle,
    Loading,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: {
        'one': '我要发券'
      },
      index01: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .amount{
    padding:8px 5px;
    background: red;
    color: white;
    border-radius: 8px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  .topDiv{
    width: 90%;
    margin-left: 5%;
    background: white;
    height: 10px;
    border-top-left-radius: 5px;
      border-top-right-radius:5px;
  }
  .bottomDiv{
    width: 90%;
    margin-left: 5%;
    background: white;
    height: 30px;
  }
  .cardTop{
    width: 90%;
    margin-left: 5%;
    background: white;
    background:
                radial-gradient(circle at bottom right,
                transparent 8px, white 0) bottom right,
                radial-gradient(circle at bottom left,
                transparent 8px, white 0) bottom left;
    background-size: 80% 100%;
    background-repeat: no-repeat;
  }
  .cardBottom{
    width: 90%;
    margin-left: 5%;

    background: white;
    background: radial-gradient(circle at top left,
                transparent 8px, white 0) top left,
                radial-gradient(circle at top right,
                transparent 8px, white 0) top right;
    background-size: 80% 100%;
    background-repeat: no-repeat;
  }
  .line{
    border-top: 1px dashed black;
  }
  .desc{
    padding- bottom: 10px;background: red;color: white;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .desc p{padding-left: 10px;box-sizing: content-box;}
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;box-sizing: content-box;
  }
  .fcolor{color: white;display: block;text-align: center;box-sizing: content-box;}
  .inputOrder{border:2px solid #ccc;}
  .weui-cell:before{border-top: none;}
  .weui-cells{
    margin-top: 0;
    background-color: red;
    color: white;
  }
.overwrite-title-demo {
  margin-top: 5px;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
.vux-header{
  height: 60px;
}
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.vux-tab .vux-tab-item.vux-tab-selected{
  color: #FF9900;
  border-bottom: 3px solid #FF9900;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.weui-grid:after{
  border-bottom:none
}
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
