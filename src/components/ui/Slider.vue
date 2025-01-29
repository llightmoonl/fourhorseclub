<script setup lang="ts">
import 'swiper/scss';
import {Swiper, SwiperSlide} from 'swiper/vue';

import PlayerCard from '../shared/PlayerItem.vue';
defineProps<{
  slides: Array<object>;
  slidesPerView: number;
}>();
</script>

<template>
  <swiper
    :slides-per-view = "slidesPerView"
  >
    <swiper-slide v-for = "slide in slides"><PlayerCard :items = "slide"/></swiper-slide>
  </swiper>
</template>

<style scoped lang = "scss">

</style>