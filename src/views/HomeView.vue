<script setup lang="ts">
import {
  Banner,
  Lecture,
  Session,
  Stages,
  Players
} from "@components/shared";
import {Ticker} from "@components/ui";

const tickersContents = [
  {
    id: 1,
    text: "Дело помощи утопающим — дело рук самих утопающих!",
  },
  {
    id: 2,
    text: "Шахматы двигают вперед не только культуру, но и экономику!"
  },
  {
    id: 3,
    text: "Лед тронулся, господа присяжные заседатели!"
  }

]
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
];

const cards = [
  {
    id: 1,
    text: "Строительство железнодорожной магистрали Москва-Васюки"
  },
  {
    id: 2,
    text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов"
  },
  {
    id: 3,
    text: "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет"
  },
  {
    id: 4,
    text: "Строительство дворца для турнира"
  },
  {
    id: 5,
    text: "Размещение гаражей для гостевого автотранспорта"
  },
  {
    id: 6,
    text: "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов"
  },
  {
    id: 7,
    text: "Создание аэропорта «Большие Васюки» c регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн"
  }
];
</script>

<template>
  <Banner/>

  <Ticker class="ticker" :items="tickersContents"/>

  <Lecture class="lecture"/>

  <Session class="session"/>

  <Stages class="stages" :cards="cards" />

  <Players class="players" :dataPlayers="players"/>

  <Ticker class="ticker" :items="tickersContents"/>
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