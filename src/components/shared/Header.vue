<script setup lang="ts">
import Logo from './Logo.vue';
import Container from './Container.vue';
</script>

<template>
  <header class="header">
    <Container>
      <Logo title="Клуб четырех коней" link="/"/>
    </Container>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  inset: 0;
  background-color: transparent;
  width: 100%;
  height: 90px;
  padding: 24px 0;
}
</style>