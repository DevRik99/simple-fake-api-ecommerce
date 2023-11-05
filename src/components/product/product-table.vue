<template>
  <DataTable
    :value="products"
    scrollable
    class="relative overflow-hidden bg-gray-400 border border-gray-400 rounded shadow-lg"
    :loading="loading"
  >
    <template #header>
      <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
        <span class="text-xl font-bold text-900">{{ products.length }} Productos</span>
        <br />
      </div>
      <div class="grid grid-cols-3 gap-3 py-3">
        <div class="col-span-1">
          <Dropdown
            v-model="category"
            :options="categorys"
            placeholder="Seleccione una categoria"
            showClear
            :loading="loading"
            class="w-full border border-gray-400"
          />
        </div>
        <div class="col-span-2">
          <InputText
            v-model="query"
            placeholder="Buscar"
            class="w-full p-2 border border-gray-400 h-[48px]"
          />
        </div>
      </div>
    </template>
    <Column field="name" header="Nombre">
      <template #body="slotProps"
        ><span>{{ slotProps.data.title }}</span></template
      >
    </Column>
    <Column field="description" header="Descripcion" class="max-w-[800px]">
      <template #body="slotProps"
        ><span class="line-clamp-2">{{ slotProps.data.description }}</span></template
      >
    </Column>
    <Column header="Image">
      <template #body="slotProps">
        <Image
          :src="slotProps.data.image"
          :alt="slotProps.data.image"
          width="90"
          preview
        />
      </template>
    </Column>
    <Column field="price" header="Precio">
      <template #body="slotProps"> $./ {{ slotProps.data.price }} </template>
    </Column>
    <Column field="category" header="Categoria">
      <template #body="slotProps"
        ><Tag class="capitalize" :value="slotProps.data.category"></Tag
      ></template>
    </Column>
    <Column field="rating" header="Reviews">
      <template #body="slotProps">
        <Rating :modelValue="slotProps.data.rating.rate" readonly :cancel="false" />
      </template>
    </Column>

    <Column style="width: 10%; min-width: 8rem" header="">
      <template #body="slotProps">
        <button
          class="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          @click="addProductToCart(slotProps.data)"
        >
          <i class="bx bx-cart bx-sm"></i>
        </button>
      </template>
    </Column>
    <template #empty> No se encontraron productos. </template>
    <template #footer>
      En total hay {{ products ? products.length : 0 }} productos.
    </template>
  </DataTable>
</template>
<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Rating from "primevue/rating";
import Image from "primevue/image";
import Tag from "primevue/tag";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { useProduct } from "./../../composables/useProduct";
import { useCart } from "./../../composables/useCart";
const { category, products, loading, categorys, query } = useProduct();
const { addProductToCart } = useCart();
</script>
