<script setup lang="ts">
import 'swiper/scss';
import 'swiper/scss/pagination';

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination} from 'swiper/modules';

import PlayerCard from '../shared/PlayerItem.vue';

defineProps<{
  slides: Array<object>;
  slidesPerView: number;
  pagination: object;
}>();

const modules = [Pagination];
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view = "slidesPerView"
    :pagination = "pagination"
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