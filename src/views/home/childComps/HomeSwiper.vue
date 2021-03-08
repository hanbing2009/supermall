<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/'
  export default {
    name: "HomeSwiper",
    props: {
      banners: Array,
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
</style>
