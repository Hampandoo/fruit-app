<template>
  <article>
    <NuxtLink to="/">Back</NuxtLink>
    <FruitFilter class="fruit-filter" @update-filter="updateFilter" />
    <h2 class="family-title">{{ $route.params.family }} Family</h2>
    <ItemsContainer class="fruits-container">
      <ItemsCard v-for="fruit in filteredFruits" :key="fruit.id" v-memo="[fruit.id]">
        <FruitCardContent :data="fruit" :is-selected="selectedFruitsIds.includes(fruit.id)" @select-fruit="fruitStore.handleSelectFruit(fruit)"></FruitCardContent>
      </ItemsCard>
    </ItemsContainer>
  </article>
</template>

<script setup lang='ts'>
import { ref, computed } from "vue";
import * as fruitTypes from "@/api/base/modules/fruits/types";
import fruitsService from "@/services/fruitsService.ts";
import { useFruitStore } from "@/stores/fruit";

import ItemsContainer from "@/components/common/items/ItemsContainer.vue";
import ItemsCard from "@/components/common/items/ItemsCard.vue";
import FruitCardContent from "@/components/feature/fruits/FruitCardContent.vue";
import FruitFilter from "@/components/feature/fruits/FruitFilter.vue";

definePageMeta({
  layout: 'MainLayout'
});

const $route = useRoute();
const fruitStore = useFruitStore();

const { data: allFruits } = useAsyncData(`fruits-${$route.params.family}`, async () => {
  return await $fetch(`/api/fruits/${$route.params.family}`);
}, {
  server: true
});

const fruitFilter = ref({} as fruitTypes.Nutritions);
function updateFilter(newValue: fruitTypes.Nutritions) {
  fruitFilter.value = newValue;
}

const filteredFruits = computed(() => {
  if (!allFruits.value) return [];
  return allFruits.value.filter((fruit) => {
    for (let field in fruit.nutritions) {
      if (
        fruit.nutritions[field] < fruitFilter.value[`${field}_min`] ||
        fruit.nutritions[field] > fruitFilter.value[`${field}_max`]
      ) {
        return false;
      }
    }
    return true;
  })
});

const selectedFruitsIds = computed(() => fruitStore.selectedFruits.map(fruit => fruit.id));

onMounted(() => fruitStore.loadSelectedFruitsFromStorage());
</script>

<style scoped>
.fruits-container {
  max-height: calc(100vh - 68.5px - 72px - 72px);
  overflow-y: scroll;
}
.fruit-filter {
  margin-bottom: 20px;
  display: flex;
}
.family-title {
  margin-bottom: 20px;
}
</style>