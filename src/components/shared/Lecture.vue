<script setup lang="ts">
import {Container} from "@components/shared";
</script>

<template>
  <section class="lecture">
    <Container>
      <div class="lecture__content">
        <h2 class="lecture__title">Чтобы поддержать международный
          Васюкинский турнир </h2>
        <h2 class = "lecture__title lecture__pre-title">посетите лекцию на тему:
          <span class="lecture__title-red">«Плодотворная дебютная идея»</span>
        </h2>
        <figure class="lecture__image">
          <img src="../../assets/lecture.png" alt="Лекция на тему 'Плодотворная дебютная идея'">
        </figure>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.lecture {
  &__title {
    font-size: 3.6rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.35;
    &-red {
      color: $red-color;
      font-weight: 700;
    }
  }

  &__pre-title {
    order: 1;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__image {
    & img {
      border-radius: 50%;
    }
  }

}
</style>