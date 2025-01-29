<script setup lang="ts">
import Container from "./Container.vue";
</script>

<template>
<footer class="footer">
  <Container>
    <div class="footer__content">
      <p class="footer__text">Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта.
        С подробностями можно познакомиться в главе XXXIV романа
        Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
      </p>
    </div>
  </Container>
</footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $brown-color;
  padding-top: 40px;
  padding-bottom: 72px;
  &__text {
    font-family: "Golos Text", sans-serif;
    font-size: 1.6rem;
    line-height: 1.2;
    color: $primary-color;
  }
}
</style>