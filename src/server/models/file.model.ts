import knex from "../config/knex.config";

const getAll = async () => {
  console.log("hi");
  const images = await knex("image");
  console.log(images);

  return images;
};

export default { getAll };
