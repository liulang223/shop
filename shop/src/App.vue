<template>
  <div id="app">
     <router-view></router-view>
     <van-tabbar
  v-model="active"
  active-color="#07c160"
      >
      <van-tabbar-item icon="wap-home" to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="records" to='/category'>分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
     </van-tabbar>
       <!-- <ul class="footer">
      <li class="footer-item">
        <router-link to='/'>首页</router-link>
      </li>
      <li class="footer-item">
        <router-link to='/category'>分类</router-link>
      </li>
      <li class="footer-item">
        <router-link to='/cart'>购物车</router-link>
      </li>
      <li class="footer-item">
        <router-link to='/profile'>我的</router-link>
      </li>
    </ul>  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss">
.footer{
  display:flex;
  background:#eee;
  position:fixed;
  bottom:0;
  width:100%;
  height:1rem;
  line-height:1rem;
  &-item{
    flex:1;
    text-align:center;
  }
}
</style>
