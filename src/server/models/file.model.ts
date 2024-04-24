import knex from "../config/knex.config";

const getAll = async () => {
  try {
    const images = await knex("image").select("*");
    return images;
  } catch (error) {
    return error;
  }
};
const getOne = async (id: string) => {
  try {
    const images = await knex("image").where({ id: id }).select("*").first();
    return images;
  } catch (error) {
    return error;
  }
};

const updateOne = async (id: string, name: string, description: string) => {
  const imageNumber = await knex("image")
    .where({ id: id })
    .update("name", name)
    .update("description", description);

  return imageNumber;
};
const deleteOne = async (id: string) => {
  const imageNumber = await knex("image").where({ id: id }).del();

  return imageNumber;
};

export default { getAll, getOne, updateOne, deleteOne };
