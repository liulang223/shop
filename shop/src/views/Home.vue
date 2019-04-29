<template>
<div>
<van-nav-bar title="首页" >
  <van-icon name="search" slot="left" />
  <van-icon name="cart-o" slot="right" />
</van-nav-bar>

<div class='carousel'>
<van-swipe :autoplay="3000">
  <van-swipe-item class='carousel-item' v-for="(item, index) in images" :key="index">
    <img v-lazy='item.imgSrc'/>
  </van-swipe-item>
</van-swipe>
</div>

<!--热门商品-->
<div>

</div>
</div>
</template>

<script>



export default {
   data() {
    return {
      images: [
        {
          name:'img1',
          imgSrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3972178726,762840916&fm=26&gp=0.jpg',
        },
        {
          name:'img2',
          imgSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1183332137,175925994&fm=26&gp=0.jpg',
        },
        {
          name:'img3',
          imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346224523,3685001654&fm=26&gp=0.jpg',
        }   
      ]
    }
  }
}
</script>
<style lang="scss">
.carousel{
  height: 3rem;
  &-item{
    height: 3rem;
  }
}
</style>

