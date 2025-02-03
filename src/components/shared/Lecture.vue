<script setup lang="ts">
import {Container} from "@components/shared";
</script>

<template>
  <section class="lecture">
    <Container>
      <div class="lecture__content">
        <h2 class="lecture__title">Чтобы поддержать международный Васюкинский турнир </h2>
        <h2 class="lecture__title lecture__pre-title">посетите лекцию на тему:
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
    display: inline;
    grid-area: title;
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
    grid-area: pre-title;
  }

  &__content {
    display: grid;
    grid-template-areas:
      "title"
      "image"
      "pre-title";
    row-gap: 24px;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(2, auto);
  }

  &__image {
    grid-area: image;
    max-width: 400px;
    height: auto;
    align-self: center;
    object-fit: cover;

    & img {
      border-radius: 50%;
    }
  }
}

@media (min-width: 1100px) {
  .lecture {
    &__content {
      grid-template-areas:
        "title image"
        "pre-title image";
      column-gap: 64px;
      row-gap: 0;
    }
  }
}
</style>