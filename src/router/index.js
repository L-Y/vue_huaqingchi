import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import OrderAudit from '@/components/orderAudit'
import SendCard from '@/components/SendCard'
import PaySuccess from '@/components/paySuccess'
import GetCard from '@/components/GetCard'
import AuditRecord from '@/components/AuditRecord'
import SendOut from '@/components/SendOut'
import OrderDetail from '@/components/OrderDetail'
import AuditData from '@/components/AuditData'
import Delivery from '@/components/Delivery'
import PickupRecord from '@/components/PickupRecord'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/orderAudit',
      name: 'OrderAudit',
      component: OrderAudit
    },
    {
      path: '/sendCard',
      name: 'SendCard',
      component: SendCard
    },
    {
      path: '/paySuccess',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/getCard',
      name: 'GetCard',
      component: GetCard
    },
    {
      path: '/auditRecord',
      name: 'AuditRecord',
      component: AuditRecord
    },
    {
      path: '/sendOut',
      name: 'SendOut',
      component: SendOut
    },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/auditData',
      name: 'AuditData',
      component: AuditData
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/pickupRecord',
      name: 'PickupRecord',
      component: PickupRecord
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
