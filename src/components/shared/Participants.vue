<script setup lang="ts">
  import Container from './Container.vue';
  import Slider from '../ui/Slider.vue';

  defineProps<{
    cards: Array<object>,
  }>();
</script>

<template>
  <section class = "participants">
    <Container>
      <div class="participants__content">
        <header class = "participants__header">
          <h2 class = "participants__title">Участники турнира</h2>
        </header>
        <Slider :slides="cards" :slides-per-view = "3"/>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.participants {

}
</style>