import knex from "../config/knex.config";

const addOne = async (newData: any) => {
  await knex("image").insert(newData);
};

export default { addOne };
