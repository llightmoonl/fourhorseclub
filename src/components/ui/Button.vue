<script setup lang="ts">
  defineProps<{
    variant?: string,
  }>();
</script>

<template>
  <button
      class = "button"
      :class = "variant === 'secondary' && 'button__secondary'">
    <slot></slot>
  </button>
</template>

<style scoped lang = "scss">
.button {
  border: 2px solid $button-black;
  padding: 13px 50px;
  background-color: $button-black;
  color: $white-color;
  border-radius: 66px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.3;
  &:hover {
    background-color: $button-yellow;
    color: $button-black;
    border-color: $button-yellow;
  }
  &__secondary {
    background-color: transparent;
    color: $button-black;
    &:hover {
      background-color: $button-black;
      color: #FFF;
      border-color: $button-black;
    }
  }
}
</style>