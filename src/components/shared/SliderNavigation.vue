<script setup lang="ts">
import {ChevronLeft, ChevronRight} from "lucide-vue-next";
import {Button} from "@components/ui";

type navigationClasses = {
  navigation: string,
  navigationPrev: string,
  navigationNext: string,
  pagination: string
}

defineProps<{
  classes: navigationClasses
}>()
</script>

<template>
  <div class="slider-navigation" :class="classes.navigation">
    <Button size="icon" class="slider-navigation__prev" :class="classes.navigationPrev">
      <ChevronLeft/>
    </Button>
    <div class="slider-pagination" :class="classes.pagination"></div>
    <Button size="icon" class="slider-navigation__next" :class="classes.navigationNext">
      <ChevronRight/>
    </Button>
  </div>
</template>

<style scoped lang="scss">
.slider {
  &-navigation {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &-pagination {
    font-size: 1.6rem;
    opacity: 1;
  }
}

:global(.slider-pagination__total) {
  opacity: 0.6;
}
</style>