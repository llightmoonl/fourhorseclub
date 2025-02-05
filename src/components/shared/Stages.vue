<script setup lang="ts">
import {RouterLink} from 'vue-router';

import {Slider} from '@components/ui';
import {Cards, Container} from '@components/shared';
import {useSliderMobile} from '@composables/slider.ts';

type CardsType = {
  id: number,
  text: string,
}

defineProps<{
  cards: Array<CardsType>
}>()

const {isSliderMobile} = useSliderMobile(835);
const sliderOptions = {
  slidesPerView: 1,
  pagination: {
    el: '.players__pagination',
    currentClass: 'players__pagination-current',
    totalClass: 'players__pagination-total',
    type: 'bullet'
  },
  navigation: {
    prevEl: '.players__navigation--prev',
    nextEl: '.players__navigation--next'
  },
}
</script>

<template>
  <section class="stages">
    <Container>
      <h2 class="stages__title">Этапы преображения Васюков
        <RouterLink class="stages__link" to="/">Будущие источники обогащения васюкинцев</RouterLink>
      </h2>
      <Cards
        :items="cards"
        class="stages__cards"
        v-if="!isSliderMobile"
      />
      <div class="stages__slider" v-else>
        <Slider
          :slides="cards"
          :sliderOptions="sliderOptions"
        >
          <template #slide=>

          </template>
        </Slider>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.stages {
  &__title {
    font-size: 5.4rem;
    text-transform: uppercase;
    max-width: 810px;
  }

  &__link {
    display: inline-block;
    color: $link-color;
    font-family: "Golos Text", sans-serif;
    font-size: 2rem;
    max-width: 280px;
    text-transform: none;
  }

  &__title,
  &__link {
    font-weight: 400;
    line-height: 1.2;
  }

  &__cards {
    margin-top: 54px;
  }
}
</style>