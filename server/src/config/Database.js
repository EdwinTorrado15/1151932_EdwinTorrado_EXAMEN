import { Sequelize } from "sequelize";

export const db = new Sequelize("web", "chato", "Patron12*", {
  host: "47.89.245.144",
  dialect: "mysql",
});
