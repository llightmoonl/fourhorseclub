<script setup lang="ts">
import {Logo} from "@components/shared";
import {Container} from "@components/shared";
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