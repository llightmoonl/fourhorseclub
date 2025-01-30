<script setup lang="ts">
import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';

import PlayerCard from '../shared/PlayerItem.vue';

defineProps<{
  slides: Array<object>;
  slidesPerView: number;
  pagination: object;
  navigation: object | boolean;
}>();

const modules = [Pagination, Navigation];
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view = "slidesPerView"
    :pagination = "pagination"
    :navigation = "navigation"
  >
    <swiper-slide
      v-for = "(slide, index) in slides"
      :key = "index"
    >
      <PlayerCard :items = "slide"/>
    </swiper-slide>
  </Swiper>
</template>

<style scoped lang = "scss">

</style>