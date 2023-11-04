<template>
  <Header />
  <div class="container mx-auto my-5">
    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>
