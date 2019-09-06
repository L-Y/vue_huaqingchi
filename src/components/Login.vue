<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">订单管理系统</x-header>
    <div class="desc">
    </div>
    <br>
      <div style="text-align:center;margin-top:15px;box-shadow: #666666; border-radius: 10px;background: white;margin-top: -36px;width: 90%; margin-left: 5%; margin-right: 5%;">
            <div style="width: 90%; margin-left: 5%; margin-right: 5%;padding-top: 70px;">
              <div style="font-size: bold;">管理员登陆</div>
              <br>
            <group >
             <x-input title="账号" name="username" placeholder="请输入姓名"></x-input>
             <x-input title="密码" name="username" placeholder="请输入密码" ></x-input>
            </group>
            <br>
            <br>
            <x-button type="warn" action-type="button">立即登陆</x-button>
            <br>
            <br>
           </div>
        <br>
      </div>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, Card, GroupTitle, Loading, Qrcode } from 'vux'
import { Badge, Group, Cell, CellBox, ViewBox, XInput, XButton } from 'vux'

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
    XButton
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
  .desc{
    padding- bottom: 10px;background: red;color: white;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .desc p{padding-left: 10px;box-sizing: content-box;}
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;box-sizing: content-box;
  }
  .fcolor{color: white;display: block;text-align: center;box-sizing: content-box;}
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
  .weui-cell:before{
    border-top: none;
  }
  .weui-cell{
    background: white;
    border-bottom: 1px solid #D9D9D9;
    padding:20px 0
  }
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
