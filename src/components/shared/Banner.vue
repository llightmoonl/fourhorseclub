<script setup lang="ts">
import {Button} from "@components/ui";
import {Container, BannerImage} from "@components/shared";
</script>

<template>
  <section class="banner">
    <Container>
      <div class="banner__content">
        <article class="banner__information">
          <h1 class="banner__title">Превратите уездный город
            <span class="banner__title-center">в столицу</span>
            <span class="banner__title-right">земного шара</span>
          </h1>
          <p class="banner__description">Оплатите взнос на телеграммы для организации Международного васюкинского
            турнира по шахматам</p>
          <div class="banner__buttons">
            <Button class="banner__button">Поддержать шахматную мысль</Button>
            <Button class="banner__button" variant="secondary">Подробнее о турнире</Button>
          </div>
        </article>
        <BannerImage/>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-color: $brown-color;

  &__content {
    min-height: 700px;
    display: flex;
    position: relative;
  }

  &__information {
    max-width: 542px;
    align-self: center;
  }

  &__title {
    display: block;
    font-size: 6rem;
    text-transform: uppercase;
    text-align: left;
    line-height: 1.1;

    &-center {
      display: block;
      text-align: center;
    }

    &-right {
      display: block;
      text-align: right;
    }
  }

  &__description {
    font-family: 'Golos Text', sans-serif;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 24px;
  }

  &__title,
  &__description {
    font-weight: 400;
  }

  &__buttons {
    margin-top: 40px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>