/* Modelo de la entidad usuario con sequalize*/
import { Sequelize } from "sequelize";
import { db } from "../config/Database.js";

const { DataTypes } = Sequelize;

/* Definimos la tabla del modelo usuario */
const Usuario = db.define(
  "Usuario",
  {
    nombre: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "usuario",
  }
);

export default Usuario;
