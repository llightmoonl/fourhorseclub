<script setup lang="ts">
  import Banner from "../components/shared/Banner.vue";
  import Lecture from "../components/shared/Lecture.vue";
  import Ticker from "../components/ui/Ticker.vue";
</script>

<template>
  <Banner />

  <Ticker>
    Дело помощи утопающим — дело рук самих утопающих!
    Шахматы двигают вперед не только культуру, но и экономику!
    Лед тронулся, господа присяжные заседатели!
  </Ticker>

  <Lecture class = "lecture"/>

  <Ticker>
    Дело помощи утопающим — дело рук самих утопающих!
    Шахматы двигают вперед не только культуру, но и экономику!
    Лед тронулся, господа присяжные заседатели!
  </Ticker>
</template>

<style scoped>
  .lecture {
    margin-top: 80px;
  }
</style>