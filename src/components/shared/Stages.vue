<script setup lang="ts">

import { Cards, Container } from '@components/shared';
import { RouterLink } from 'vue-router';

const cards = [
  {
    id: 1,
    detailText: "Строительство железнодорожной магистрали Москва-Васюки"
  },
  {
    id: 2,
    detailText: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов"
  },
  {
    id: 3,
    detailText: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет"
  },
  {
    id: 4,
    detailText: "Строительство дворца для турнира"
  },
  {
    id: 5,
    detailText: "Размещение гаражей для гостевого автотранспорта"
  },
  {
    id: 6,
    detailText: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов"
  },
  {
    id: 7,
    detailText: "Создание аэропорта «Большие Васюки» c регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн"
  }
]
</script>

<template>
  <section class="stages">
    <Container>
      <h2 class="stages__title">Этапы преображения Васюков
        <RouterLink class="stages__link" to="/">Будущие источники обогащения васюкинцев</RouterLink>
      </h2>
      <Cards class="stages__cards" :items="cards"/>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.stages {
  &__title {
    font-size: 5.4rem;
    text-transform: uppercase;
    max-width: 810px;
  }

  &__link {
    display: inline-block;
    color: $link-color;
    font-family: "Golos Text", sans-serif;
    font-size: 2rem;
    max-width: 280px;
    text-transform: none;
  }

  &__title,
  &__link {
    font-weight: 400;
    line-height: 1.2;
  }

  &__cards {
    margin-top: 54px;
  }
}
</style>