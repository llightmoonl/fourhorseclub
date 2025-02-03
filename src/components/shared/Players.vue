<script setup lang="ts">
import {Button, Slider} from '@components/ui';
import {Container} from '@components/shared';

import {ChevronLeft, ChevronRight} from 'lucide-vue-next';

defineProps<{
  dataPlayers: Array<object>,
}>();
</script>

<template>
  <section class="players">
    <Container>
      <header class="players__header">
        <h2 class="players__title">Участники турнира</h2>
        <div class="players__navigation">
          <Button size="icon" class="players__navigation--prev">
            <ChevronLeft/>
          </Button>
          <div class="players__pagination">
          </div>
          <Button size="icon" class="players__navigation--next">
            <ChevronRight/>
          </Button>
        </div>
      </header>
      <Slider
        class="players__slider"
        :slides="dataPlayers"
        :slides-per-group="2"
        :slides-per-group-skip="1"
        :slides-per-view="3"
        :pagination="{
          el: '.players__pagination',
          currentClass: 'players__pagination-current',
          totalClass: 'players__pagination-total',
          type: 'fraction'
        }"
        :navigation="{
          prevEl: '.players__navigation--prev',
          nextEl: '.players__navigation--next'
        }"
      />
    </Container>
  </section>
</template>

<style scoped lang="scss">
.players {
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 5.4rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__slider {
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 60px auto 0;
  }

  &__navigation {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__pagination {
    font-size: 1.6rem;
    opacity: 1;
  }
}
:global(.players__pagination-total) {
  opacity: 0.6;
}
</style>