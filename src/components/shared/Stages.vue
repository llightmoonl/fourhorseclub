<script setup lang="ts">
import {RouterLink} from 'vue-router';

import {Slider, CardItem} from '@components/ui';
import {Cards, Container, SliderNavigation} from '@components/shared';
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
  slidesPerView: 2,
  pagination: {
    el: '.stages__pagination',
    type: 'bullets',
    bulletClass: 'stages__bullet',
    bulletActiveClass: 'stages__bullet_active',
  },
  navigation: {
    prevEl: '.stages__navigation--prev',
    nextEl: '.stages__navigation--next'
  },
}

const navigationClasses = {
  navigation: 'stages__navigation',
  navigationPrev: 'stages__navigation--prev',
  navigationNext: 'stages__navigation--next',
  pagination: 'stages__pagination'
}
</script>

<template>
  <section class="stages">
    <Container>
      <header class="stages__header">
        <h2 class="stages__title">Этапы преображения Васюков
          <RouterLink class="stages__link" to="/">Будущие источники обогащения васюкинцев</RouterLink>
        </h2>
      </header>
      <Cards
        :items="cards"
        class="stages__cards"
        v-if="!isSliderMobile"
      />
      <div class="stages__slider" v-else>
        <Slider
          class="stages__slider"
          :slides="cards"
          :sliderOptions="sliderOptions"
        >
          <template #slide="{ id, text }">
            <CardItem :item="{id, text}"/>
          </template>
        </Slider>
        <div class="stages__footer">
          <SliderNavigation :classes="navigationClasses"/>
        </div>
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

  &__cards,
  &__slider {
    margin-top: 54px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }
}

:global(.stages__pagination) {
  display: flex;
  gap: 8px;
}

:global(.stages__bullet) {
  display: block;
  width: 10px;
  height: 10px;
  background-color: $bullet-non-active;
  border-radius: 50%;
}

:global(.stages__bullet_active) {
  background-color: $primary-color;
}
</style>