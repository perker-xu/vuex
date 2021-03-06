import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// export 外部文件调用store 即对外公开
const store = new Vuex.Store({
  state: {
    products: [
      { name: '马云', price:200 },
      { name: '马化腾', price:140 },
      { name: '马冬梅', price:20 },
      { name: '马蓉', price:10 }
    ]
  },
  getters: {
    // getters 处理打折数据
    saleProducts: (state) => {
      var saleProducts = state.products.map(
          product => {
              return {
                  name: '**' + product.name + '**',
                  price: product.price/2
              };
          }
      );
      return saleProducts;
    }
  }
});

export default store;
