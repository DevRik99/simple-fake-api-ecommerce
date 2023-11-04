<template>
  <header
    class="py-3 px-6 flex items-center justify-between relative h-[80px] shadow-lg border gap-3"
  >
    <div class="items-center justify-between">
      <ul class="flex gap-3">
        <li>
          <router-link to="/" class="flex items-center gap-2">
            <i class="bx bx-home bx-sm"></i>
            <p>Inicio</p>
          </router-link>
        </li>
        <li>
          <router-link to="/carrito" class="flex items-center gap-2">
            <i class="bx bx-cart bx-sm"></i>
            <p>Carrito</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="">
      <span class="relative inline-block w-full border border-gray-400 rounded">
        <InputText v-model="query" placeholder="Buscar" class="w-full p-2" />
        <!-- <i class="bx bx-search" /> -->
      </span>
    </div>
  </header>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { useProduct } from "./../composables/useProduct";
const { query } = useProduct();
</script>
