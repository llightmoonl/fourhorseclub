<script setup lang="ts">
</script>

<template>
  <section class="ticker">
    <div class="ticker__content">
      <p class="ticker__text"><slot></slot></p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .ticker {
    overflow: hidden;
    text-wrap: nowrap;
    font-family: "Merriweather", sans-serif;
    font-size: 22px;
    background-color: $red-color;
    color: $white-color;
    text-transform: uppercase;
    padding: 16px 0;
  }
</style>