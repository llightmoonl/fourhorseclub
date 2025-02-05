<script setup lang="ts">
import {CardItem} from "@components/ui";

defineProps<{
  items: Array<Record<string, string | number>>;
}>();
</script>

<template>
  <ul class = "cards">
    <CardItem :items = "items"/>
  </ul>
</template>

<style scoped lang="scss">

@media (min-width: 834px) {
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    grid-auto-flow: dense;
  }
}

.cards {
  display: grid;
  gap: 20px;
  list-style-type: none;
}
</style>