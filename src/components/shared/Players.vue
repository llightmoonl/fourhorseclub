<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {Slider} from '@components/ui';
import {Container, SliderNavigation} from '@components/shared';

defineProps<{
  dataPlayers: Array<object>,
}>();

const width = ref(document.documentElement.clientWidth);

const editWidth = () => {
  width.value = document.documentElement.clientWidth;
};

onMounted(() => {
  window.addEventListener('resize', editWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', editWidth);
});

const sliderMobile = computed(() => width.value < 1050);

const navigationClasses = {
  navigation: 'players__navigation',
  navigationPrev: 'players__navigation--prev',
  navigationNext: 'players__navigation--next',
  pagination: 'players__pagination'
}
</script>

<template>
  <section class="players">
    <Container>
      <header class="players__header">
        <h2 class="players__title">Участники турнира</h2>
        <SliderNavigation v-if = "!sliderMobile" :classes="navigationClasses"/>
      </header>
      <Slider
        class="players__slider"
        :slides="dataPlayers"
        :slides-per-view="1"
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
        :breakpoints = "{
          1150: {
            slidesPerView: 3
          },
          1050: {
            slidesPerView: 2,
            slidesPerGroupSkip: 1,
            slidesPerGroup: 2
          }
        }"
      />
      <SliderNavigation v-if = "sliderMobile" :classes="navigationClasses"/>
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