import axiosInstance from "../../instance";
import * as endpoints from "./endpoints";
import * as types from "./types";
import * as sharedTypes from "../../../shared-types";

export async function loadFruitsAll(): Promise<sharedTypes.ApiResponse<types.Fruit[]>> {
  return await axiosInstance.get(endpoints.FRUITS_ALL, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function loadFruitsByFamily(family: string): Promise<sharedTypes.ApiResponse<types.Fruit[]>> {
  return await axiosInstance.get(endpoints.FRUITS_FAMILY + family, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}