<script setup lang="ts">
  const props = defineProps<{
    variant?: string,
  }>();
</script>

<template>
  <button class = "button"
          :class = "variant === 'primary' && 'button__primary'">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: transparent;

}
</style>