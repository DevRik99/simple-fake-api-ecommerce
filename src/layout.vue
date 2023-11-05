<template>
  <Header />
  <div class="container mx-auto my-5">
    <router-view></router-view>
  </div>
  <Toast />
</template>
<script setup>
import Toast from "primevue/toast";
import Header from "./components/common/Header.vue";
</script>
