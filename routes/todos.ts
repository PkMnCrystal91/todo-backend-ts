import { Router } from "express";
import {
  getTodos,
  getTodo,
  postTodo,
  deleteTodo,
  putTodoToggle,
} from "../controller/todos";

const router = Router();

// Rutas para las funciones logicas de nuestro controlador
router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", postTodo);
router.put("/:id", putTodoToggle);
router.delete("/:id", deleteTodo);

export default router;
