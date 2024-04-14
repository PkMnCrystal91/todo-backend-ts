import { DataTypes } from "sequelize";
import db from "../db/connection";

const Todo = db.define("tasks", {
  descripcion: {
    type: DataTypes.STRING,
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Todo;
