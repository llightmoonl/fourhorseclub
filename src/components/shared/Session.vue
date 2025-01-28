<script setup lang="ts">

import Container from "./Container.vue";
import Table from "../ui/Table.vue";
import {RouterLink} from "vue-router"

const tableItems = [
  {
    title: "Место проведения",
    description: "Клуб \"Картонажник\""
  },
  {
    title: "Дата и время мероприятия",
    description: "22 июня 1927 г. в 18:00"
  },
  {
    title: "Стоимость входных билетов",
    description: "20 коп."
  },
  {
    title: "Плата за игру",
    description: "50 коп."
  },
  {
    title: "Взнос на телеграммы",
    overline: "100 руб.",
    description: "21 руб. 16 коп."
  },
]
</script>

<template>
  <section class="session">
    <Container>
      <div class="session__content">
        <figure class="session__image">
          <img src = "../../assets/lecture.png" alt="Лекция на тему 'Плодотворная дебютная идея'">
        </figure>
        <article class="session__information">
          <h2 class = "session__title">и сеанс
            <span class="session__title-red">
              одновременной игры в шахматы на 160 досках
            </span>
            гроссмейстера О.Бендера
          </h2>
          <Table class = "session__table" :items = "tableItems"/>
          <RouterLink class = "session__link" to = "/">По всем вопросам обращаться в администрацию к К.Михельсону</RouterLink>
        </article>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.session {
  &__title {
    font-size: 3.6rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.35;

    &-red{
      color: $red-color;
      font-weight: 700;
    }
  }

  &__content{
    display: flex;
    align-items: center;
  }

  &__image {
    & img{
      border-radius: 50%;
    }
  }

  &__table {
    margin-top: 60px;
    margin-bottom: 48px;
  }

  &__link {
    font-size: 2rem;
    color: $link-color;
  }
}
</style>