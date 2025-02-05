<script setup lang="ts">
import {computed} from "vue";
import {Button} from "@components/ui";

const props = defineProps<{
  items: object
}>();

const playerImage = computed(() => props.items.image || './player-skeleton.png');
</script>

<template>
  <div class="player-item">
    <img class="player-item__image" :src="playerImage" :alt="items.fullName">
    <h3 class="player-item__title">{{ items.fullName }}</h3>
    <p class="player-item__rank">{{ items.rank }}</p>
    <Button class="player-item__button" variant="link">Подробнее</Button>
  </div>
</template>

<style scoped lang="scss">
.player-item {
  text-align: center;

  &__image {
    max-width: 320px;
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  &__title {
    margin-top: 24px;
    font-size: 2.4rem;
    font-weight: 600;
  }

  &__rank {
    margin-top: 8px;
    font-size: 2rem;
    font-weight: 400;
  }

  &__title,
  &__rank {
    font-family: 'Golos Text', sans-serif;
  }

  &__button {
    margin-top: 20px;
  }
}

</style>