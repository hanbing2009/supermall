<template>
  <div id="tab-bar">
    <tab-bar-item v-for="(item, index) in items" :key="index" :path="item.path" :activeClass="item.activeClass">
      <img slot='item-icon' :src="item.itemIcon"/>item.itemIcon
      <img slot='item-icon-active' :src="item.itemIconActive" />
      <div slot='item-text'>{{item.itemText}}</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    },

    components: {
      TabBarItem
    }

  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
</style>
