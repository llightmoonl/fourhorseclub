<script setup lang="ts">
defineProps<{
  items: Array<object>,
}>();
</script>

<template>
  <table class = "table">
    <tr class = "table__row" v-for="item in items" :key="item.id">
      <th class = "table__title">{{item.title}}:</th>
      <td class = "table__description"><span class = "table__description--overline">{{item.overline}}</span> {{item.description}}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
  .table{
    width: 100%;
    text-align: left;
    font-size: 20px;
    color: $primary-color;
    border-collapse: collapse;

    &__title {
      padding-right: 16px;
      font-weight: 400;
      border-right: 2px solid $table-color;
    }

    &__description {
      padding-left: 16px;
      font-weight: 600;
      width: 59%;

      &--overline {
        text-decoration: line-through;
        text-decoration-color: $red-color;
      }
    }

    &__title,
    &__description {
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 2px solid $table-color;
    }
  }
</style>