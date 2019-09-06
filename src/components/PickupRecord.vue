<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">自提记录</x-header>

    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <br>
        <div style="padding: 10px; border-radius: 2px;">
          <button-tab>
            <button-tab-item>未处理</button-tab-item>
            <button-tab-item selected>已配货</button-tab-item>
            <button-tab-item>已完成</button-tab-item>
          </button-tab>
      </div>
      <br>
    <div style="text-align:center;margin-top:15px;box-shadow: #666666; background: white;margin-top: 0px;width: 94%; margin-left: 3%; margin-right: 3%;">
      <div style=" padding-top: 15px;padding-bottom: 15px;box-shadow: 0 0 5px #ccc;color: #000;">
        <flexbox>
          <flexbox-item :span="8">
            <div class="">
              <div class="" style="margin-left: 25px;">收货人：企鹅</div>
              <div class="" style="margin-left: 25px;padding:15px 0">商品：共5件商品</div>
              <div class="" style="margin-left: 25px;">手机：188888888</div>
              </div>
              </flexbox-item>
              <flexbox-item ><div class="" style="margin-left: 0px;">
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;">5/14 16:13</div>
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;padding:15px 0">￥29.00</div>
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;">自提订单</div>
            </div>
          </flexbox-item>
        </flexbox>
     </div>
    </div>
    <br>
    <div style="text-align:center;margin-top:15px;box-shadow: #666666; background: white;margin-top: 0px;width: 94%; margin-left: 3%; margin-right: 3%;">
      <div style=" padding-top: 15px;padding-bottom: 15px;box-shadow: 0 0 5px #ccc;color: #000;">
        <flexbox>
          <flexbox-item :span="8">
            <div class="">
              <div class="" style="margin-left: 25px;">收货人：企鹅</div>
              <div class="" style="margin-left: 25px;padding:15px 0">商品：共5件商品</div>
              <div class="" style="margin-left: 25px;">手机：188888888</div>
              </div>
              </flexbox-item>
              <flexbox-item ><div class="" style="margin-left: 0px;">
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;">5/14 16:13</div>
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;padding:15px 0">￥29.00</div>
              <div class="" style="margin-left: 25px;color: #666;font-size: 14px;">自提订单</div>
            </div>
          </flexbox-item>
        </flexbox>
     </div>
    </div>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky, Divider, Swiper, SwiperItem, Loading, Card } from 'vux'
import { Badge, Group, Cell, XTextarea, CellBox, ViewBox, XButton, Flexbox, FlexboxItem, Search, ButtonTab, ButtonTabItem  } from 'vux'

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
    Search,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      msg: {
        'one': '我要发券'
      },
      index01: 0,
      results: [],
      value: '查询'
    }
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
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
.vux-button-group > a{
  color: black;
}
.vux-button-group > a.vux-button-tab-item-first{
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
}
.vux-button-group > a.vux-button-tab-item-first:after,{
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  color: red;
  border:1px solid red;
}
.vux-button-group > a.vux-button-tab-item-middle:after{
      border-right: 1px solid red;
      border-top: 1px solid red;
      border-bottom: 1px solid red;
      border-left: none;
      color: red;
}
.vux-button-group > a.vux-button-group-current{
  background: red;
}
.vux-button-group > a.vux-button-tab-item-last{
  border-top-right-radius:5px;
  border-bottom-right-radius:10px;

}
.vux-button-group > a.vux-button-tab-item-last:after{
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-right: 1px solid red;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  border-left: none;
  color: red;
}
</style>
