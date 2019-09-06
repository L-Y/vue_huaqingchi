<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">支付成功</x-header>
     <div>
       <msg title="支付成功"  :icon="icon"></msg>
     </div>
    <br>
    <div style="text-align:center;margin-top:15px;box-shadow: #666666; border-radius: 10px;background: white;margin-top: 0px;width: 94%; margin-left: 3%; margin-right: 3%;">
      <div style=" padding-top: 15px;padding-bottom: 15px;">
        <flexbox>
              <flexbox-item :span="8"><div class="" style="margin-left: 0px;">
              <div class="" style="margin-left: 25px;font-weight: bold;">你获得12个好友红包</div>
              <div class="" style="margin-left: 25px;color: #ccc;font-size: 12px;">第9位领取者可获取10元红包</div>
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
import { Badge, Group, Cell, XTextarea, CellBox, ViewBox, XButton, Flexbox, FlexboxItem, Msg } from 'vux'

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
    FlexboxItem,
    Msg
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
