import knex from "knex";
import config from "../../db/knexfile";
const environment = "development";

export default knex(config[environment]);
