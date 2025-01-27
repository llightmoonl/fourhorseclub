<script setup lang="ts">
  import Button from '../ui/Button.vue';
  import Container from './Container.vue';
</script>

<template>
  <section class = "banner">
    <Container>
      <div class="banner__content">
        <article class="banner__information">
          <h1 class = "banner__title">Превратите уездный город <span class="banner__title-center">в столицу земного шара</span></h1>
          <p class="banner__description">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
          <div class="banner__buttons">
            <Button>Поддержать шахматную мысль</Button>
            <Button>Подробнее о турнире</Button>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
  .banner {
    background-color: #E9DED4;

    &__content {
      height: 100vh;
      display: flex;
      align-items: center;
    }

    &__information {
      max-width: 542px;
    }

    &__title {
      display: block;
      font-size: 6rem;
      text-transform: uppercase;
      text-align: left;
      line-height: 1;
      &-center {
        display: block;
        text-align: center;
      }
    }

    &__description {
      text-align: center;
      font-size: 1.8rem;
    }

    &__title,
    &__description {
      font-weight: 400;
    }

    &__buttons {
      display: flex;
      gap: 16px;
    }
  }
</style>