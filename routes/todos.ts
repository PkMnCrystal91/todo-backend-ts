import { Router } from "express";
import {
  getTodos,
  getTodo,
  postTodo,
  deleteTodo,
  putTodoToggle,
} from "../controller/todos";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", postTodo);
router.put("/:id", putTodoToggle);
router.delete("/:id", deleteTodo);

export default router;
