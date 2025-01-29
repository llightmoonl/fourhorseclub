<script setup lang="ts">
import Container from './Container.vue';
import Slider from '../ui/Slider.vue';
import Button from '../ui/Button.vue';

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
          <Button size = "icon" class="players__navigation--prev"><ChevronLeft/></Button>
          <Button size = "icon" class="players__navigation--next"><ChevronRight/></Button>
        </div>
      </header>
      <Slider
        class="players__slider"
        :slides="dataPlayers"
        :slides-per-view="3"
        :pagination="{type: 'fraction'}"
      />
    </Container>
  </section>
</template>

<style scoped lang="scss">
.players {
  &__header {
    display: flex;
  }

  &__title {
    font-size: 5.4rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__slider {
    margin-top: 60px;
  }
}
</style>