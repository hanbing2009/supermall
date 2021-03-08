<template>
  <tab-bar-new :items="items"></tab-bar-new>
</template>

<script>
  // import TabBar from 'components/common/tabbar/TabBar'
  import TabBarNew from 'components/common/tabbar/TabBarNew'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {

    components: {
      // TabBar,
      TabBarNew,
      TabBarItem
    },
    data() {
      return {
        items: [
          {
            itemIcon: require('assets/img/tabbar/home.svg'),
            itemIconActive: require('assets/img/tabbar/home_active.svg'),
            itemText: '首页',
            path: '/home',
            activeClass: 'blue'
          },
          {
            itemIcon: require('assets/img/tabbar/category.svg'),
            itemIconActive: require('assets/img/tabbar/category_active.svg'),
            itemText: '分类',
            path: '/category',
            // activeClass: 'blue'   //默认为red
          },
          {
            itemIcon: require('assets/img/tabbar/cart.svg'),
            itemIconActive: require('assets/img/tabbar/cart_active.svg'),
            itemText: '购物车',
            path: '/cart',
            activeClass: 'blue'
          },
          {
            itemIcon: require('assets/img/tabbar/profile.svg'),
            itemIconActive: require('assets/img/tabbar/profile_active.svg'),
            itemText: '我的',
            path: '/profile',
            activeClass: 'blue'
          },
        ]
      }
    }
  }
</script>

<style>
</style>
