<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">店铺管理</x-header>
    <div class="desc">
      <br>
      <p>企鹅分店</p>
      <br>
      <p>会员卡号：100000001</p>
      <br>
    </div>
    <br>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item >
          <img slot="icon" src="../assets/image/01.png">
          <span slot="label">会员卡</span>
        </grid-item>
        <grid-item >
          <img slot="icon" src="../assets/image/02.png">
          <span slot="label">我的店铺</span>
        </grid-item>
        <grid-item @on-item-click="onItemClick">
          <img slot="icon" src="../assets/image/03.png">
          <span slot="label">我要发券</span>
        </grid-item>
        <grid-item  @on-item-click="onItemClick">
          <img slot="icon" src="../assets/image/04.png">
          <span slot="label">积分兑换</span>
        </grid-item>
      </grid>
      <br>
    <group >
      <cell title="营销数据" is-link>
        <div class="badge-value">
          <span class="vertical-middle"> 更多&nbsp;</span>
        </div>
      </cell>
    </group>
      <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
        <tab-item selected>今日</tab-item>
        <tab-item>昨日</tab-item>
        <tab-item>近7日</tab-item>
        <tab-item>近30日</tab-item>
      </tab>
    <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item >
        <span class="grid-center">卡券领取</span>
        <span class="grid-center">0</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">订单数量</span>
        <span class="grid-center">0</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">下单金额</span>
        <span class="grid-center">0</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">收入积分</span>
        <span class="grid-center">0</span>
      </grid-item>
    </grid>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Loading, Card } from 'vux'
import { Badge, Group, Cell, XTextarea, CellBox, ViewBox } from 'vux'

export default {
  components: {
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    Loading,
    Card,
    Badge,
    Group,
    Cell,
    CellBox,
    XTextarea,
    ViewBox
  },
  data () {
    return {
      msg: {
        'one': '我要发券'
      },
      index01: 0
    }
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    },
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .desc{
    margin-bottom: 10px;background: red;color: white;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .desc p{padding-left: 10px;}
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
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
