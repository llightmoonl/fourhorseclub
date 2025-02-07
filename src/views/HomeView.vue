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

const tickers = ref([]);

onMounted(async () => {
  tickers.value = (await useFetch('/tickers')).data;
})
</script>

<template>
  <Banner/>

  <Ticker class="ticker" :items="tickers"/>

  <Lecture class="lecture"/>

  <Session class="session"/>

  <Stages class="stages" />

  <Players class="players"/>

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