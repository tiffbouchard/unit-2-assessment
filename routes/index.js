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
  // req.body.done = false;
  Todo.push(req.body);
  console.log(Todo);
  res.redirect("/");
});

module.exports = router;

// function create(todo) {
//   // Add the id
//   todo.id = Date.now() % 1000000;
//   // New todos wouldn't be done :)
//   todo.done = false;
//   todos.push(todo);
// }

// function create(req, res) {
//   console.log(req.body);
//   req.body.done = false;
//   Todo.create(req.body);
//   res.redirect("/todos");
// }
