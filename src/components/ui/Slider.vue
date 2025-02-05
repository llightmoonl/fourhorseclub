<script setup lang="ts">
import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';

import type {SwiperOptions} from "swiper/types";

defineProps<{
  slides: Array<Record<string, any>>,
  sliderOptions: SwiperOptions,
}>();

const modules = [Pagination, Navigation];
</script>

<template>
  <Swiper
    v-bind = "sliderOptions"
    :modules="modules"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <slot name="slide" v-bind="slide"></slot>
    </swiper-slide>
  </Swiper>
</template>