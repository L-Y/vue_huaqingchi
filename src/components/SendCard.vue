<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">发放卡券</x-header>

      <cell title="发券数据" style="border:none;background: white;">
      </cell>

      <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
        <tab-item>今日</tab-item>
        <tab-item>昨日</tab-item>
        <tab-item selected>近7日</tab-item>
        <tab-item>近30日</tab-item>
      </tab>
    <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item >
        <span class="grid-center">卡券领取</span>
        <span class="grid-center">0</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">卡券使用</span>
        <span class="grid-center">0</span>
      </grid-item>
    </grid>
    <br>
    <div style="text-align:center;margin-top:15px;box-shadow: #666666; border-radius: 10px;background: white;margin-top: 0px;width: 94%; margin-left: 3%; margin-right: 3%;">
      <div style=" padding-top: 15px;padding-bottom: 15px;">
        <flexbox>
          <flexbox-item :span="1">
            <div class="">
              <img slot="icon" width="40" style="display:block;margin-right:20px;padding: 15px 15px;" src="../assets/image/06.png">
              </div>
              </flexbox-item>
              <flexbox-item :span="7"><div class="" style="margin-left: 0px;">
              <div class="" style="margin-left: 25px;font-weight: bold;">无门槛券红包</div>
              <div class="" style="margin-left: 25px;color: #ccc;font-size: 12px;">用户可领取1-99随机红包</div>
            </div>
          </flexbox-item>
          <flexbox-item><x-button  mini  type="warn" >立即分享</x-button></flexbox-item>
        </flexbox>
     </div>
    </div>
    <br>
    <div style="text-align:center;margin-top:15px;box-shadow: #666666; border-radius: 10px;background: white;margin-top: 0px;width: 94%; margin-left: 3%; margin-right: 3%;">
      <div style=" padding-top: 15px;padding-bottom: 15px;">
        <flexbox>
          <flexbox-item :span="1">
            <div class="">
              <img slot="icon" width="40" style="display:block;margin-right:20px;padding: 15px 15px;" src="../assets/image/07.png">
              </div>
              </flexbox-item>
              <flexbox-item :span="7"><div class="" style="margin-left: 0px;">
              <div class="" style="margin-left: 25px;font-weight: bold;">满30元优惠券</div>
              <div class="" style="margin-left: 25px;color: #ccc;font-size: 12px;">用户可领取1-30随机红包</div>
            </div>
          </flexbox-item>
          <flexbox-item><x-button  mini  type="warn" >立即分享</x-button></flexbox-item>
        </flexbox>
     </div>
    </div>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky, Divider, Swiper, SwiperItem, Loading, Card } from 'vux'
import { Badge, Group, Cell, XTextarea, CellBox, ViewBox, XButton, Flexbox, FlexboxItem } from 'vux'

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
    ViewBox,
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
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .weui-cells{
    margin-top: 0px;
    background-color: red;
    color: white;
  }
  .vux-no-group-title{
    margin-top: 0px;
  }
  .weui-cells:before{
    border: none;
    margin-top: 0;
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
