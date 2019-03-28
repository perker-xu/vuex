<template>
  <div class="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <li v-for="(product, index) in products" :key="index">
              <span class="name"> {{ product.name }} </span>
              <span class="price"> ${{ product.price }} </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductListOne',
  props:["products"]
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
