<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">订单核销</x-header>
    <div class="desc">
    <group class="desc">
      <cell title="企鹅分店" is-link>
        <img slot="icon" width="50" style="display:block;margin-right:20px;" src="../assets/image/01.png">
        <div class="badge-value">

        <span class="fcolor">累积积分：0</span>
        <br>
        <span class="fcolor">可用积分：0</span>
        </div>
      </cell>
    </group>
    </div>
    <br>
      <div style="text-align:center;margin-top:15px;">
        <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
        <br>
      </div>
      <div style="text-align:center;">
        <span>01165123487</span>
        <br>
      </div>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, Card, GroupTitle, Loading, Qrcode } from 'vux'
import { Badge, Group, Cell, CellBox, ViewBox } from 'vux'

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
    Loading
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
  .desc p{padding-left: 10px;}
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .fcolor{color: white;display: block;text-align: center;font-weight: bold;}
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
