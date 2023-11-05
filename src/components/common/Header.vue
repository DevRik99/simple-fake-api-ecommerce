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
      </ul>
    </div>
    <div class="">
      <span class="relative inline-block w-full border border-gray-400 rounded">
        <InputText v-model="query" placeholder="Buscar" class="w-full p-2" />
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
  </header>

  <Sidebar v-model:visible="showCart" position="right">
    <template #header>
      <div class="flex gap-2 mr-auto align-items-center">
        <span class="font-bold">Mi Carrito</span>
      </div>
    </template>

    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <div v-for="cart in productsCart" :key="cart.id">
          <div class="flex items-center mb-4 md:items-start">
            <Image
              :src="cart.image"
              class="object-contain object-center w-32 h-32 rounded"
              :alt="cart.title"
            />

            <div class="flex flex-col flex-auto px-3 gap-y-3">
              <div class="flex items-center justify-between">
                <span class="font-semibold product-name">{{ cart.title }}</span>
                <Button
                  class="p-3 text-white bg-red-500 p-button p-component p-button-icon-only p-button-danger p-button-text"
                  type="button"
                  @click="deleteProductFromCart(cart.id)"
                >
                  <span class="bx bx-trash"></span>
                </Button>
              </div>
              <div class="flex items-center gap-3">
                <span class="my-2 text-base font-medium">$./ {{ cart.price }}</span>
              </div>
              <div class="flex items-center justify-between">
                <InputNumber
                  v-model="cart.quantity"
                  showButtons
                  buttonLayout="horizontal"
                  :step="1"
                  :min="1"
                  decrementButtonClass="bg-red-500 text-white"
                  incrementButtonClass="bg-green-500 text-white"
                  incrementButtonIcon="bx bx-plus"
                  decrementButtonIcon="bx bx-minus"
                  inputClass="w-full"
                  :allowEmpty="false"
                  class="border border-gray-400 rounded-lg"
                />
              </div>
            </div>
          </div>
          <Divider class="h-[1px] bg-gray-400" />
        </div>
      </div>
      <div class="">
        <div class="flex items-center justify-between mb-3">
          <span class="text-base font-bold">Importe total </span>
          <span class="text-base font-bold">$./ {{ totalCartPrice }}</span>
        </div>
      </div>
    </div>
  </Sidebar>
</template>

<script setup>
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Divider from "primevue/divider";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Image from "primevue/image";
import { useProduct } from "../../composables/useProduct";
import { useCart } from "../../composables/useCart";
const { query } = useProduct();
const { showCart, productsCart, deleteProductFromCart, totalCartPrice } = useCart();
</script>
