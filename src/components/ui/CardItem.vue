<script setup lang="ts">
defineProps<{
  id: number,
  detailText: string,
}>();
</script>

<template>
  <li class="card--item">
    <div class = "card--item__count">{{id}}</div>
    <div class = "card--item__detail">{{detailText}}</div>
  </li>
</template>

<style scoped lang="scss">

</style>