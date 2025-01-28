<script setup lang="ts">
  import {RouterLink} from 'vue-router';

  defineProps<{
    link: string,
  }>();
</script>

<template>
  <RouterLink :to = "link" class = "logo">
    <img alt = "Клуб четырех коней" class="logo__image" src="../../assets/logo.svg"/>
    <span class = "logo__text">Клуб<br> четырех коней</span>
  </RouterLink>
</template>

<style scoped lang = "scss">
  .logo{
    display: flex;
    align-items: center;
    gap: 8px;
    &__text{
      color: #595653;
      font-family: 'Golos Text', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.6rem;
      width: 150px;
      line-height: 1.1;
    }
  }
</style>