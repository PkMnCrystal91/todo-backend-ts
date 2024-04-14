import { Sequelize } from "sequelize";

// Los argumentos de la instancia de Sequelize son: (nombre de base de datos, nombre de usuario, contraseña)
const db = new Sequelize("productos", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default db;
