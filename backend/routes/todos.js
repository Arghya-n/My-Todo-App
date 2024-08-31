const express = require("express");
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/TodoController");

const router = express.Router();

// GET all todos
router.get("/", getTodos);

// GET a single todo
router.get("/:id", getTodo);

// POST a new todo
router.post("/", createTodo);

// DELETE a todo
router.delete("/:id", deleteTodo);

// UPDATE a todo
router.patch("/:id", updateTodo);

module.exports = router;
