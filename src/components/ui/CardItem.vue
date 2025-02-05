<script setup lang="ts">

defineProps<{
  items: Array<object>;
}>();

</script>

<template>
  <li v-for="item in items" class="card-item">
    <span class="card-item__count">{{ item.id }}</span>
    <div class="card-item__detail">{{ item.text }}</div>
  </li>
</template>

<style scoped lang="scss">
.card-item {
  display: flex;
  font-family: "Golos Text", sans-serif;
  background-image: url('../../assets/paper.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  font-weight: 600;
  font-size: 2rem;
  gap: 16px;
  min-height: 112px;

  &__count {
    align-self: start;
    font-weight: 500;
    padding: 14px 16px;
    background-color: #fff;
    border-radius: 50%;
    line-height: 0.7;
  }
}

@media (min-width: 1190px) {
  .card-item {
    &:nth-of-type(7) {
      grid-column: span 2;
    }
  }
}

@media (min-width: 800px) {
  .card-item {
    &:nth-of-type(3) {
      grid-row: span 2;
    }
  }
}

</style>