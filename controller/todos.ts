import { Request, Response } from "express";
import { json } from "sequelize/types";
import Todo from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll();

  res.json({ todos });
};

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await Todo.findByPk(id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({
      msg: `No existe la tarea con el id ${id}`,
    });
  }
};

export const postTodo = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const task = await Todo.create(body);

    res.status(201).json({
      ok: true,
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putTodoToggle = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await Todo.findByPk(id);
  if (!task) {
    return res.status(404).json({
      msg: "No existe la tarea con el id " + id,
    });
  }

  await task.update({ completado: true });

  res.json(task);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await Todo.findByPk(id);
  if (!task) {
    return res.status(404).json({
      msg: "No existe la tarea con el id " + id,
    });
  }

  await task.destroy();

  res.json(task);
};
