<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useFetch} from "@composables/fetch.ts";

import {
  Banner,
  Lecture,
  Session,
  Stages,
  Players
} from "@components/shared";
import {Ticker} from "@components/ui";

const players = ref([]);
const tickers = ref([]);
const cards = ref([]);

onMounted(async () => {
  players.value = (await useFetch('/players')).data;
  tickers.value = (await useFetch('/tickers')).data;
  cards.value = (await useFetch('/cards')).data;
})
</script>

<template>
  <Banner/>

  <Ticker class="ticker" :items="tickers"/>

  <Lecture class="lecture"/>

  <Session class="session"/>

  <Stages class="stages" :cards="cards" />

  <Players class="players" :dataPlayers="players"/>

  <Ticker class="ticker" :items="tickers"/>
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