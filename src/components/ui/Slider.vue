<script setup lang="ts">
import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/vue';
import type {SwiperOptions} from "swiper/types";
import {Pagination, Navigation} from 'swiper/modules';

import {PlayerItem} from '@components/shared';

defineProps<{
  slides: Array<object>,
  slidesPerView?: number | undefined,
  slidesPerGroup?: number | undefined,
  slidesPerGroupSkip?: number | undefined,
  pagination?: SwiperOptions["pagination"] | boolean,
  navigation?: SwiperOptions["navigation"] | boolean,
  breakpoints?: SwiperOptions["breakpoints"] | undefined,
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
    :breakpoints="breakpoints"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <PlayerItem :items="slide"/>
    </swiper-slide>
  </Swiper>
</template>