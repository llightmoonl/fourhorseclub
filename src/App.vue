<script setup lang="ts">
  import {RouterView} from 'vue-router';
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>
