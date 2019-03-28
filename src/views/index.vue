<template>
  <div class="index">
    <!-- 父组件向子组件传值 -->
    <!-- 
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> 
    -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

export default {
  name: 'Index',
  data (){
    return {
      /* products: [
        { name: '马云', price:200 },
        { name: '马化腾', price:140 },
        { name: '马冬梅', price:20 },
        { name: '马蓉', price:10 },
      ] */
    }
  },
  components:{
    ProductListOne,
    ProductListTwo
  }
}
</script>

<style lang="less">
#app{
  font-family: Ubuntu;
  color: #555;
}
</style>
