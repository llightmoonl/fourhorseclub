<script setup lang="ts">
import {reactive} from "vue";

const props = defineProps<{
  variant?: string,
  size?: string
}>();

const classesButtons = reactive({
  'button__secondary': props.variant === 'secondary',
  'button__link': props.variant === 'link',
  'button__icon': props.size === 'icon',
});
</script>

<template>
  <button
    class="button"
    :class="classesButtons">
    <slot>Отправить</slot>
  </button>
</template>

<style scoped lang="scss">
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

  &__link {
    background-color: transparent;
    color: $link-color;
    border-width: 1px;
    border-color: $link-color;
    padding: 6px 12px;

    &:hover {
      border-color: $link-color;
      background-color: $link-color;
      color: $white-color;
    }
  }

  &__icon {
    padding: 16px;
    line-height: 0;
  }
}
</style>