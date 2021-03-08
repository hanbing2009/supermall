<template>
  <div>
    <div id="home">
      <nav-bar class="home-nav">
        <template slot="center">
          <div>购物街</div>
        </template>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>

    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  import {getMultiData} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //在home.js中定义
      getMultiData().then(({data})=>{
        console.log(data);
        this.banners = data.data.banner.list;
        this.recommends = data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
</style>
