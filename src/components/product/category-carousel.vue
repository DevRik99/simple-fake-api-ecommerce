<template>
  <Carousel
    :value="products"
    :numVisible="3"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    circular
    :autoplayInterval="3000"
  >
    <template #item="slotProps">
      <div class="px-3 py-5 m-2 text-center border-1 surface-border border-round">
        <div class="mb-3">
          <img
            :src="'https://picsum.photos/360?' + slotProps.data"
            :alt="slotProps.data"
            class="rounded"
          />
        </div>
        <div>
          <router-link :to="`/category/${slotProps.data}`">
            <h4 class="mb-1 capitalize">{{ slotProps.data }}</h4>
          </router-link>
        </div>
      </div>
    </template>
  </Carousel>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import Button from "primevue/button";

import axios from "axios";
const products = ref();
const loading = ref(true);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
onMounted(async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products/categories");
  products.value = data;
  loading.value = false;
});
</script>
