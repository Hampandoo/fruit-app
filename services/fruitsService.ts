import localStorageService from "./localStorageService";

import { loadFruitsAll, loadFruitsByFamily } from "~/api/base/modules/fruits";
import * as fruitTypes from "@/api/base/modules/fruits/types";

class FruitsService {
  private SELECTED_FRUITS_KEY: string = "selected_fruits";

  private allFruitsList: fruitTypes.Fruit[] = [];

  public async getAllFruitsList() {
    if (this.allFruitsList.length <= 0) {
      await loadFruitsAll()
        .then((resp) => {
          this.allFruitsList = resp.data;
        })
        .catch((e) => {
          return e;
        });
    }
    
    return this.allFruitsList;
  }

  public async getFruitsByFamily(family: string) {
    return await loadFruitsByFamily(family).then((resp) => resp.data);
  }

  public handleSelectFruit(fruit: fruitTypes.Fruit) {
    let selectedFruits: fruitTypes.Fruit[] | null = localStorageService.getItem(this.SELECTED_FRUITS_KEY);
    if (selectedFruits === null) {
      localStorageService.setItem(this.SELECTED_FRUITS_KEY, []);
    }
    selectedFruits = localStorageService.getItem(this.SELECTED_FRUITS_KEY);

    if (selectedFruits !== null) {
      const idx = selectedFruits.findIndex((selectedFruit) => selectedFruit.id === fruit.id);
      if (idx < 0) {
        selectedFruits.push(fruit);
      } else {
        selectedFruits.splice(idx, 1);
      }
    }

    localStorageService.setItem(this.SELECTED_FRUITS_KEY, selectedFruits);
  }
  public getSelectedFruits(): fruitTypes.Fruit[] {
    const selectedFruits = localStorageService.getItem(this.SELECTED_FRUITS_KEY);
    if (selectedFruits === null) {
      return [];
    }

    return selectedFruits;
  }
}

const fruitsService = new FruitsService();
export default fruitsService;