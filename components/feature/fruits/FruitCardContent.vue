<template>
  <div class="fruit-card-content">
    <div class="fruit-text name-block">
      <div class="select-block">
        <span class="fruit-title">Name:</span>
        <span class="fruit-text-value">{{ data.name }}</span>
      </div>
      <IconStar :fill="fillSelectedIcon" stroke="var(--color-warning)" class="icon-selected" @click="handleSelectFruit" />
    </div>
    <div class="fruit-text">
      <span class="fruit-title">Family:</span>
      <NuxtLink :to="`/family/${data.family}`" class="fruit-text-value fruit-family">{{ data.family }}</NuxtLink>
    </div>
    <div class="fruit-text">
      <span class="fruit-title">Genus:</span>
      <span class="fruit-text-value">{{ data.genus }}</span>
    </div>
    <div class="fruit-text">
      <span class="fruit-title">Order:</span>
      <span class="fruit-text-value">{{ data.order }}</span>
    </div>
    <div class="fruit-text">
      <span class="fruit-title">Nutritions:</span>
    </div>
    <div class="nutritions-block">
      <div class="nutritions-text">
        <span>Carbohydrates:</span>
        <span class="nutritions-text-value">{{ data.nutritions?.carbohydrates }}</span>
      </div>
      <div class="nutritions-text">
        <span>Protein:</span>
        <span class="nutritions-text-value">{{ data.nutritions?.protein }}</span>
      </div>
      <div class="nutritions-text">
        <span>Fat:</span>
        <span class="nutritions-text-value">{{ data.nutritions?.fat }}</span>
      </div>
      <div class="nutritions-text">
        <span>Calories:</span>
        <span class="nutritions-text-value">{{ data.nutritions?.calories }}</span>
      </div>
      <div class="nutritions-text">
        <span>Sugar:</span>
        <span class="nutritions-text-value">{{ data.nutritions?.sugar }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import * as fruitTypes from "@/api/base/modules/fruits/types";

import IconStar from "@/assets/icons/components/IconStar.vue"; 

type Props = {
  data: fruitTypes.Fruit;
  isSelected: boolean;
}
const $props = defineProps<Props>();
const $emit = defineEmits(["selectFruit"]);

function handleSelectFruit() {
  $emit("selectFruit", $props.data);
}

const fillSelectedIcon = computed(() => $props.isSelected ? "var(--color-warning)" : "var(--color-white)");
</script>

<style scoped>
.fruit-card-content {
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  width: 100%;
}
.fruit-text {
  display: flex;
  align-items: center;
  gap: 6px;

  width: 100%;
}
.fruit-family {
  text-decoration: underline;
  cursor: pointer;
  color: var(--color-black);
}
.name-block {
  border-bottom: 1px solid var(--color-gray-700);
  width: 100%;

  display: flex;
  justify-content: space-between;
}
.select-block {
  display: flex;
  align-items: center;
  gap: 6px;
}
.fruit-title {
  font-weight: 600;
  color: var(--color-black);
}
.nutritions-block {
  border: 1px solid var(--color-gray-600);
  border-radius: 4px;
  padding: 10px;
  margin-inline-start: 5px;

  width: 100%;
}
.nutritions-block div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nutritions-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-weight: 600;
}
.nutritions-text-value {
  text-align: end;
}

.icon-selected {
  width: 24px;
  height: 24px;

  cursor: pointer;
  align-self: flex-end;
}
</style>