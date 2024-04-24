import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("image", (table) => {
    table.string("id");
    table.string("name");
    table.string("description");
    table.string("filename");
    table.string("date");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("image");
}
