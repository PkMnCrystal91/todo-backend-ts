import express, { Application } from "express";
import cors from "cors";
import db from "../db/connection";
import todoRoutes from "../routes/todos";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    todos: "/api/todos",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.dbConnection();
    this.middelwares();

    // Para definir rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middelwares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.todos, todoRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server runing on port" + this.port);
    });
  }
}

export default Server;
