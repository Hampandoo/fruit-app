import { ref } from "vue";
import { defineStore } from "pinia";
import * as fruitTypes from "@/api/base/modules/fruits/types";
import fruitsService from "~/services/fruitsService";

export const useFruitStore = defineStore("fruit", () => {
  const selectedFruits = ref<fruitTypes.Fruit[]>([]);
  function handleSelectFruit(fruit: fruitTypes.Fruit) {
    fruitsService.handleSelectFruit(fruit);
    selectedFruits.value = fruitsService.getSelectedFruits();
  }

  function loadSelectedFruitsFromStorage() {
    selectedFruits.value = fruitsService.getSelectedFruits();
  }

  return { selectedFruits, handleSelectFruit, loadSelectedFruitsFromStorage };
});
