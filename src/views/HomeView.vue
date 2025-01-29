<script setup lang="ts">
  import Banner from "../components/shared/Banner.vue";
  import Lecture from "../components/shared/Lecture.vue";
  import Ticker from "../components/ui/Ticker.vue";
  import Session from "../components/shared/Session.vue";
  import Stages from "../components/shared/Stages.vue";
  import Players from "../components/shared/Players.vue";

  const players = [
    {
      id: 1,
      fullName: "Хозе-Рауль Капабланка",
      rank: "Чемпион мира по шахматам"
    },
    {
      id: 2,
      fullName: "Эммануил Ласкер",
      rank: "Чемпион мира по шахматам"
    },
    {
      id: 3,
      fullName: "Александр Алехин",
      rank: "Чемпион мира по шахматам"
    },
    {
      id: 4,
      fullName: "Арон Нимцович",
      rank: "Чемпион мира по шахматам"
    },
    {
      id: 5,
      fullName: "Рихард Рети",
      rank: "Чемпион мира по шахматам"
    },
    {
      id: 6,
      fullName: "Остап Бендер",
      rank: "Гроссмейстер"
    },
  ]
</script>

<template>
  <Banner />

  <Ticker class = "ticker">
    Дело помощи утопающим — дело рук самих утопающих!
    Шахматы двигают вперед не только культуру, но и экономику!
    Лед тронулся, господа присяжные заседатели!
  </Ticker>

  <Lecture class = "lecture"/>

  <Session class = "session"/>

  <Stages class = "stages"/>

  <Players class = "players" :dataPlayers = "players" />

  <Ticker class = "ticker">
    Дело помощи утопающим — дело рук самих утопающих!
    Шахматы двигают вперед не только культуру, но и экономику!
    Лед тронулся, господа присяжные заседатели!
  </Ticker>
</template>

<style scoped>
  .lecture {
    margin-top: 80px;
  }

  .session {
    margin-top: 64px;
  }

  .stages {
    margin-top: 200px;
  }

  .players {
    margin-top: 200px;
    margin-bottom: 140px;
  }

</style>