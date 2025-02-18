<template>
  <article>
    <NuxtLink to="/">Back</NuxtLink>
    <ItemsContainer class="fruits-container">
      <ItemsCard v-for="fruit in selectedFruits" :key="fruit.id" v-memo="[fruit.id]">
        <FruitCardContent :data="fruit" :is-selected="true" @select-fruit="handleSelectFruit(fruit)"></FruitCardContent>
      </ItemsCard>
    </ItemsContainer>
  </article>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import * as fruitTypes from "@/api/base/modules/fruits/types";
import fruitsService from "@/services/fruitsService.ts";
import { useFruitStore } from "@/stores/fruit";

import ItemsContainer from "@/components/common/items/ItemsContainer.vue";
import ItemsCard from "@/components/common/items/ItemsCard.vue";
import FruitCardContent from "@/components/feature/fruits/FruitCardContent.vue";

definePageMeta({
  layout: 'MainLayout'
});

const fruitStore = useFruitStore();

const selectedFruits = ref<fruitTypes.Fruit[]>([]);

function handleSelectFruit(fruit) {
  fruitStore.handleSelectFruit(fruit);
  selectedFruits.value = fruitsService.getSelectedFruits();
}

onMounted(() => {
  selectedFruits.value = fruitsService.getSelectedFruits();
});
</script>

<style scoped>
.fruits-container {
  max-height: calc(100vh - 68.5px - 72px - 72px);
  overflow-y: scroll;
}
@media (max-width: 1200px) {
  .fruits-container {
    max-height: calc(100vh - 68.5px - 72px - 72px - 20px);
  }
}
@media (max-width: 874px) {
  .fruits-container {
    max-height: calc(100vh - 68.5px - 72px - 72px - 65px);
  }
}
@media (max-width: 812px) {
  .fruits-container {
    max-height: calc(100vh - 68.5px - 72px - 72px - 155px);
  }
}
@media (max-width: 512px) {
  .fruits-container {
    max-height: calc(100vh - 68.5px - 72px - 72px - 240px);
  }
}
.fruit-filter {
  margin-bottom: 20px;
  display: flex;
}
</style>