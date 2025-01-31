<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { Header, Footer } from '@components/shared';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>
