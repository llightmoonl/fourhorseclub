<script setup lang="ts">
  import Container from './Container.vue';
  import Slider from '../ui/Slider.vue';

  defineProps<{
    dataPlayers: Array<object>,
  }>();
</script>

<template>
  <section class = "players">
    <Container>
      <header class = "players__header">
        <h2 class = "players__title">Участники турнира</h2>
      </header>
      <Slider class = "players__slider" :slides="dataPlayers" :slides-per-view = "3"/>
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