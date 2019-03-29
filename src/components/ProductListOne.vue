<template>
  <div class="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <li v-for="(product, index) in saleProducts" :key="index">
              <span class="name"> {{ product.name }} </span>
              <span class="price"> ${{ product.price }} </span>
          </li>
      </ul>
      <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
// 在 vue-cli2.x 中还需要在 .babelc文件中插入 ["stage-2"]  在vue-cli3.x中则不需要
// 引入 mapGetters, mapActions方法
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProductListOne',
    //   接收父组件传值
    /* props:["products"] */
    // 接收store传值
    computed: {
        // products数据
        products () {
            return this.$store.state.products;
        },
        /* saleProducts (){
            return this.$store.getters.saleProducts;
        } */
        //  依赖 npm install babel-preset-stage-2 --save-dev插件
        ...mapGetters([
            // getters里面的方法
            'saleProducts'
        ])
    },
    methods: {
        /* actions使用 */
        // 商品降价
        /* 
        reducePrice: function(amount){
            // 在严格模式下报错
            // this.$store.state.products.forEach(product => { product.price -= 2; }); 
           
            // 在任何模式下均适用   
            // this.$store.commit('reducePrice');
            // 分发  调用actions里面的方法
            this.$store.dispatch('reducePrice',amount);
        }
        */
       //  依赖 npm install babel-preset-stage-2 --save-dev插件
       ...mapActions([
           // actions里面的方法
           'reducePrice'
       ])
    }
}
</script>

<style lang="less" scoped>
.product-list-one{
    background-color: #fff8b1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    margin-bottom: 30px;
    padding: 10px 20px;
    ul{
        padding: 0;
        list-style-type: none;
        li{
            margin-right: 10px;
            margin-top: 10px;
            padding: 20px;
            background-color: rgba(255, 255, 255, .7);
            display: inline-block;
            .price{
                font-weight: bold;
                color: #e8800c;
            }
        }
    }
}

</style>
