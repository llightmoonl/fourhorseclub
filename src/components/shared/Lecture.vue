<script setup lang="ts">
import Container from "./Container.vue";
</script>

<template>
  <section class="lecture">
    <Container>
      <div class="lecture__content">
        <h2 class = "lecture__title">Чтобы поддержать международный
          Васюкинский турнир посетите лекцию на тему:
          <span class="lecture__title-red">
          «Плодотворная дебютная идея»
        </span></h2>
        <figure class="lecture__image">
          <img src = "../../assets/lecture.png" alt="Лекция на тему 'Плодотворная дебютная идея'">
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
  }
</style>