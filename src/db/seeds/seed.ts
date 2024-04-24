import { Knex } from "knex";
import imageData from "../seed-data/image";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("image").del();

  // Inserts seed entries
  await knex("image").insert(imageData);
}
