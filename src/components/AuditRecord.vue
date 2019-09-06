<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header">订单核销</x-header>

      <br>
      <group>
      <cell title="6月17日">
      </cell>
      </group>
      <cell title="单号: 100001" value="100元" style="border:none;background: white;"></cell>
      <cell
      title="下单时间: 2019年6月17日10:26"
      is-link
      :border-intent=false
      :arrow-direction="showContent1 ? 'up' : 'down'"
      @click.native="showContent1 = !showContent1" class="orderTime"></cell>

      <template v-if="showContent1">
        <cell-form-preview border-intent="false" :list="list"></cell-form-preview>
      </template>
      <cell title="单号: 100002" value="100元" style="border:none;background: white;"></cell>
      <cell
      title="下单时间: 2019年6月17日10:26"
      is-link
      :border-intent=false
      :arrow-direction="showContent2 ? 'up' : 'down'"
      @click.native="showContent2 = !showContent2" class="orderTime"></cell>

      <template v-if="showContent2">
        <cell-form-preview border-intent="false" :list="list"></cell-form-preview>
      </template>
      <br>
      <group>
      <cell title="6月16日">
      </cell>
      </group>
      <cell title="单号: 100001" value="100元" style="border:none;background: white;"></cell>
      <cell
      title="下单时间: 2019年6月17日10:26"
      is-link
      :border-intent=false
      :arrow-direction="showContent3 ? 'up' : 'down'"
      @click.native="showContent3 = !showContent3" class="orderTime"></cell>

      <template v-if="showConten3">
        <cell-form-preview border-intent="false" :list="list"></cell-form-preview>
      </template>
    <br>
  </div>
</template>


<script>

import { XHeader, Grid, GridItem, GroupTitle, Tab, TabItem, Sticky, Divider, Swiper, SwiperItem, Loading, Card } from 'vux'
import { Badge, Group, Cell, XTextarea, CellBox, ViewBox, XButton, Flexbox, FlexboxItem,CellFormPreview } from 'vux'

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
    CellFormPreview
  },
  data () {
    return {
      msg: {
        'one': '我要发券'
      },
      index01: 0,
      list: [{
        label: '100001'
      }, {
        label: '1.唐代雕花梳x1',
        title:'111',
        value: '49.00'
      }, {
        label: '2.唐代雕花梳x2',
        value: '200.00'
      },
      {
        label: '下单时间',
        value: '2019年6月17日10:26'
      }],
      showContent1: false,
      showContent2: false,
      showContent3: false,
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
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  .header{
    background: red;background-image: url(../assets/image/08.jpg);background-repeat: no-repeat;background-size: cover;
  }
  .weui-cells{
    margin-top: 0px;
    background-color: red;
    color: white;
    border: none;
  }
  .vux-no-group-title{
    margin-top: 0px;
  }
  .weui-cells:before{
    border-top: none;
    margin-top: 0;
  }
  .weui-cell:before{
    border-top: none;
  }
  .orderTime{
    background: white;
    border-bottom: 1px solid #D9D9D9;
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
