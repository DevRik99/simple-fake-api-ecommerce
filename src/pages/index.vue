<template>
  <div>
    <ProductTable :products="products" :loading="loading" :categorys="categorys" />
  </div>
</template>

<script setup>
import ProductTable from "../components/product/product-table.vue";
import { useProduct } from "./../composables/useProduct";
const { products, loading, categorys } = useProduct();
</script>
