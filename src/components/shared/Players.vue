<script setup lang="ts">
import {ref, onMounted, type Ref} from "vue";

import {Slider} from '@components/ui';
import {Container, SliderNavigation, PlayerItem} from '@components/shared';

import {useWidth} from '@composables/width';
import {useFetch} from '@composables/fetch';

const mobileWidth = 1060;
const {isWidthMobile} = useWidth();

const players: Ref<Array<Record<string, any>>> = ref([]);

onMounted(async () => {
  players.value = (await useFetch('/players')).data;
})

const navigationClasses = {
  navigation: 'players__navigation',
  navigationPrev: 'players__navigation--prev',
  navigationNext: 'players__navigation--next',
  pagination: 'players__pagination'
}

const sliderOptions = {
  slidesPerView: 1,
  pagination: {
    el: '.players__pagination',
    currentClass: 'players__pagination-current',
    totalClass: 'players__pagination-total',
    type: 'fraction'
  },
  navigation: {
    prevEl: '.players__navigation--prev',
    nextEl: '.players__navigation--next'
  },
  breakpoints: {
    1150: {
      slidesPerView: 3
    },
    1050: {
      slidesPerView: 2,
      slidesPerGroupSkip: 1,
      slidesPerGroup: 2
    }
  },
  lazy: true
}
</script>

<template>
  <section class="players">
    <Container>
      <header class="players__header">
        <h2 class="players__title">Участники турнира</h2>
        <SliderNavigation v-if="!isWidthMobile(mobileWidth)" :classes="navigationClasses"/>
      </header>
      <Slider
        class="players__slider"
        :slides="players"
        :sliderOptions="sliderOptions"
      >
        <template #slide="{id, fullName, rank}">
          <PlayerItem :items="{id, fullName, rank}"/>
        </template>
      </Slider>
      <footer v-if="isWidthMobile(mobileWidth)" class="players__footer">
        <SliderNavigation :classes="navigationClasses"/>
      </footer>
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

  &__footer {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}

:global(.players__pagination-total) {
  opacity: 0.6;
}
</style>