<template>
  <header class="h-[80px] shadow-lg border sticky top-0 bg-white z-10">
    <div class="container flex items-center justify-between gap-3 py-3 mx-auto">
      <div class="flex-1">
        <span class="relative inline-block w-full border border-gray-400 rounded">
          <InputText
            :loading="loading"
            v-model="query"
            placeholder="Buscar"
            class="w-full p-2"
          />
        </span>
      </div>
      <div class="">
        <button
          @click="showCart = !showCart"
          class="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <i class="bx bx-cart bx-sm"></i>
        </button>
      </div>
    </div>
  </header>
  <SidebarCart />
</template>

<script setup>
import InputText from "primevue/inputtext";
import SidebarCart from "./SidebarCart.vue";

import Button from "primevue/button";
import { useProduct } from "../../composables/useProduct";
import { useCart } from "../../composables/useCart";

const { query, loading } = useProduct();
const { showCart } = useCart();
</script>
