var express = require("express");
var router = express.Router();
const Todo = require("../data/todo");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Unit 2 Assessment",
    todos: Todo,
  });
});

router.post("/add", function (req, res, next) {
  req.body.todo = req.body.todo;
  req.body.id = Date.now() % 1000000;
  req.body.done = false;
  Todo.push(req.body);
  res.redirect("/");
});

router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  const index = Todo.findIndex(function (todo) {
    return todo.id === parseInt(id);
  });
  Todo.splice(index, 1);
  res.redirect("/");
});

module.exports = router;
