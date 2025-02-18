import fruitsService from "~/services/fruitsService";

export default defineEventHandler(async (event) => {
  const query = event.context.params;
  return await fruitsService.getFruitsByFamily(query!.family as string);
});