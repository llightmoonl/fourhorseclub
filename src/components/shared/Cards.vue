<script setup lang="ts">
import {CardItem} from "@components/ui";

defineProps<{
  items: Array<object>;
}>();
</script>

<template>
  <ul class = "cards">
    <CardItem :items = "items"/>
  </ul>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  list-style-type: none;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
}
</style>