<script setup lang="ts">
import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';

import {PlayerItem} from '@components/shared';

defineProps<{
  slides: Array<object>,
  slidesPerView: number,
  slidesPerGroup?: number,
  slidesPerGroupSkip?: number,
  pagination?: object,
  navigation?: object | boolean,
}>();

const modules = [Pagination, Navigation];
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :slides-per-group="slidesPerGroup"
    :slides-per-group-skip="slidesPerGroupSkip"
    :pagination="pagination"
    :navigation="navigation"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
    >
      <PlayerItem :items="slide"/>
    </swiper-slide>
  </Swiper>
</template>

<style scoped lang="scss">
</style>