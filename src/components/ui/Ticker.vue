<script setup lang="ts">

defineProps<{
  items: Array<string>;
}>();

</script>

<template>
  <section class="ticker">
    <div class="ticker__content">
      <p
        v-for = "item in items.concat(items)"
        :key = "item.id"
        class="ticker__text"
      >
        {{item.text}}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ticker {
  position: relative;
  z-index: 9999;
  overflow: hidden;
  text-wrap: nowrap;
  font-family: "Merriweather", sans-serif;
  font-size: 2.2rem;
  background-color: $red-color;
  color: $white-color;
  text-transform: uppercase;
  padding: 16px 0;

  &__content {
    display: flex;
    gap: 9px;
    animation: moveTicker linear infinite 30s;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 9px;
    &::before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $white-color;
    }
  }
}
</style>