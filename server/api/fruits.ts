import fruitsService from "~/services/fruitsService";

export default defineEventHandler(async (event) => {
  return await fruitsService.getAllFruitsList();
});