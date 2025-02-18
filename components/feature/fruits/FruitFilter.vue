<template>
  <article class="fruit-filter-block">
    <h3>Filter:</h3>
    <div class="filter-fields">
      <div class="range-block">
        <p>
          Calories:
        </p>
        <div>
          <input v-model="filter.calories_min" max="100" @keydown="validateFilterValueInput">
          <span> - </span>
          <input v-model="filter.calories_max" max="100" @keydown="validateFilterValueInput">
        </div>
      </div>
      <div class="range-block">
        <p>
          Carbohydrates:
        </p>
        <div>
          <input v-model="filter.carbohydrates_min" max="100" @keydown="validateFilterValueInput">
          <span> - </span>
          <input v-model="filter.carbohydrates_max" max="100" @keydown="validateFilterValueInput">
        </div>
      </div>
      <div class="range-block">
        <p>
          Protein:
        </p>
        <div>
          <input v-model="filter.protein_min" max="100" @keydown="validateFilterValueInput">
          <span> - </span>
          <input v-model="filter.protein_max" max="100" @keydown="validateFilterValueInput">
        </div>
      </div>
      <div class="range-block">
        <p>
          Fat:
        </p>
        <div>
          <input v-model="filter.fat_min" max="100" @keydown="validateFilterValueInput">
          <span> - </span>
          <input v-model="filter.fat_max" max="100" @keydown="validateFilterValueInput">
        </div>
      </div>
      <div class="range-block">
        <p>
          Sugar:
        </p>
        <div>
          <input v-model="filter.sugar_min" max="100" @keydown="validateFilterValueInput">
          <span> - </span>
          <input v-model="filter.sugar_max" max="100" @keydown="validateFilterValueInput">
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang='ts'>
import { reactive } from "vue";
import * as fruitTypes from "@/api/base/modules/fruits/types";

const $emit = defineEmits(['updateFilter']);

const filter = reactive({
  calories_min: 0,
  calories_max: 1000,
  fat_min: 0,
  fat_max: 1000,
  protein_min: 0,
  protein_max: 1000,
  sugar_min: 0,
  sugar_max: 1000,
  carbohydrates_min: 0,
  carbohydrates_max: 1000
} as fruitTypes.Nutritions);

function updateFilter(filterValue: fruitTypes.Nutritions) {
  $emit('updateFilter', filterValue);
}

function validateFilterValueRange(value: fruitTypes.Nutritions) {
  for (let field in value) {
    // Remove first symbol ZERO
    if (value[field].length > 1 && value[field][0] == 0) {
      value[field] = value[field].slice(1);
    }

    // Not allow set min number more than max number and another way too.
    let f = field.split('_');
    if (f[1] === "min") {
      if (value[`${f[0]}_min`] > value[`${f[0]}_max`]) {
        value[`${f[0]}_min`] = value[`${f[0]}_max`];
      } else if (value[`${f[0]}_min`] < 0) {
        value[`${f[0]}_min`] = 0;
      }
    } else {
      if (value[`${f[0]}_max`] < value[`${f[0]}_min`]) {
        value[`${f[0]}_max`] = value[`${f[0]}_min`];
      } else if (value[`${f[0]}_max`] > 1000) {
        value[`${f[0]}_max`] = 1000;
      }
    }
  }
}

function validateFilterValueInput(event) {
  if (!/^[0-9]$/.test(event.key) && event.key !== "Backspace" && event.key !== "Delete") {
    event.preventDefault();
  }
};

watch(filter, (newValue) => {
  validateFilterValueRange(newValue);
  updateFilter(newValue);
})
</script>

<style scoped>
.fruit-filter-block {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  width: fit-content;

  padding: 10px;
  border: 1px solid var(--color-primary-light);
  border-radius: 12px;
}

.filter-fields {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.range-block {
  display: flex;
  flex-direction: column;

  width: 140px;
  padding: 10px;
  border-radius: 6px;

  background: var(--color-gray-200);
}
.range-block input {
  width: 50px;
}
</style>