<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  items: object
}>();

const playerImage = computed(() => props.items.image || './player-skeleton.png');

</script>

<template>
  <div class="player-item">
    <img class = "player-item__image" :src="playerImage" :alt="items.fullName">
    <h3 class = "player-item__title">{{items.fullName}}</h3>
    <p class = "player-item__rank">{{items.rank}}</p>
  </div>
</template>

<style scoped lang="scss">
.player-item {
  font-family: 'Golos Text', sans-serif;

  &__image {
    max-width: 320px;
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  
}
</style>