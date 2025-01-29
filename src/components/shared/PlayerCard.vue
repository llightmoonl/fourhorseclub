<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  items: object
}>();

const playerImage = computed(() => props.items.image || './player-skeleton.png');

</script>

<template>
  <div class="player-card">
    <img class = "player-card__image" :src="playerImage" :alt="items.fullName">
    <h3 class = "player-card__title">{{items.fullName}}</h3>
    <p class = "player-card__rank">{{items.rank}}</p>
  </div>
</template>

<style scoped lang="scss">

</style>