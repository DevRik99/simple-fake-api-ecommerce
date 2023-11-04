<template>
  <DataTable :value="products" tableStyle="min-width: 50rem" :loading="loading">
    <template #header>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Productos</span>
        <i class="bx bx-refresh" rounded raised />
      </div>
    </template>
    <Column field="name" header="Nombre">
      <template #body="slotProps"
        ><span>{{ slotProps.data.title }}</span></template
      >
    </Column>
    <Column field="description" header="Descripcion">
      <template #body="slotProps"
        ><span>{{ slotProps.data.description }}</span></template
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
        ><span>{{ slotProps.data.category }}</span></template
      >
    </Column>
    <Column field="rating" header="Reviews">
      <template #body="slotProps">
        <Rating :modelValue="slotProps.data.rating.rate" readonly :cancel="false" />
      </template>
    </Column>
    <template #footer>
      En total hay {{ products ? products.length : 0 }} productos.
    </template>
  </DataTable>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Rating from "primevue/rating";
import Image from "primevue/image";

const products = ref([]);
const loading = ref(true);
onMounted(async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);
  products.value = data;
  loading.value = false;
});
</script>
