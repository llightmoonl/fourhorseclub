<script setup lang="ts">

</script>

<template>
  <figure class = "session-image">
    <div class = "session-image__background"></div>
    <div class = "session-image__effect session-image__effect-1"></div>
    <div class="session-image__people"></div>
    <div class="session-image__money"></div>
    <div class="session-image__effect session-image__effect-2"></div>
    <div class="session-image__hand"></div>
    <div class="session-image__horse"></div>
  </figure>
</template>

<style scoped lang="scss">
  .session-image {
    position: relative;
    max-width: 530px;
    height: 572px;
    width: 100%;

    &__background {
      position: absolute;
      inset: 0;
      background-image: url('@/assets/images/paper.png');
      max-width: 440px;
      width: 100%;
      height: 440px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }

    &__effect {
      position: absolute;
      background-repeat: no-repeat;
      bottom: 0;
      right: 0;
      animation: 3s infinite moveElement;
      &-1 {
        top: -67px;
        left: -51px;
        background-image: url('@/assets/images/effect1.png');
        z-index: 2;
      }

      &-2 {
        background-image: url('@/assets/images/effect2.png');
        top: 257px;
        left: -37px;
        z-index: 3;
      }
    }

    &__people {
      position: absolute;
      top: 49px;
      left: 54px;
      bottom: 0;
      right: 0;
      z-index: 3;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/people.png');
    }

    &__money {
      position: absolute;
      top: -18px;
      left: 328px;
      z-index: 1;
      bottom: 0;
      right: 0;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/money.png');
    }

    &__hand {
      position: absolute;
      z-index: 3;
      top: 290px;
      left: 170px;
      bottom: 0;
      right: 0;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/hand.png');
      animation: 3s infinite moveElement;
    }

    &__horse {
      position: absolute;
      top: 315px;
      left: 39px;
      bottom: 0;
      right: 0;
      z-index: 3;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/horse.png');
      animation: 3s infinite moveElement;
    }
  }
</style>