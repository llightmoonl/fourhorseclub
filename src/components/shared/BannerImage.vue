<script setup lang="ts">

</script>

<template>
  <figure class="banner__image">
    <img
      src="@/assets/images/sun.svg"
      class="banner__image-sun"
      alt="sun"
    />
    <img
      src="@/assets/images/city.svg"
      class="banner__image-city"
      alt="city"
    />
    <img
      src="@/assets/images/king.png"
      class="banner__image-king"
      alt="king"
    />
    <img
      src="@/assets/images/queen.png"
      class="banner__image-queen"
      alt="queen"
    />
    <img
      src="@/assets/images/horse-white.png"
      class="banner__image-horse"
      alt="horse-white"
    />
    <img
      src="@/assets/images/chess.png"
      class="banner__image-chess"
      alt="chess"
    />
  </figure>
</template>

<style scoped lang="scss">
  .banner__image {
    position: relative;
    pointer-events: none;

    &-sun,
    &-city,
    &-king,
    &-queen,
    &-horse,
    &-chess {
      position: absolute;
      display: block;
    }

    &-sun {
      max-width: 770px;
      top: -115px;
      aspect-ratio: 1 / 1;
      animation: rotateElement 120s linear infinite both;
    }

    &-city {
      max-width: 1627px;
      bottom: 0;
      left: -750px;
      z-index: 2;
    }

    &-king {
      max-width: 125px;
      bottom: 165px;
      left: 105px;
    }

    &-queen {
      max-width: 140px;
      bottom: 280px;
      left: 443px;
    }

    &-horse {
      bottom: -55px;
      left: 210px;
      z-index: 2;
    }

    &-chess {
      max-width: 130px;
      bottom: 15px;
      z-index: 2;
      left: 615px;
    }
  }
</style>