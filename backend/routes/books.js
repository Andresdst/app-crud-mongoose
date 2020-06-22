const { Router } = require("express");
const Book = require("../models/Book");
const router = Router();

router.get("/", (req, res) => {
  Book.find().then((books) => {
    res.json(books);
  });
});

router.post("/", (req, res) => {
  const { title, author, isbn } = req.body;

  Book.create({ title, author, isbn })
    .then((book) => {
      res.json(book);
      console.log(book);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      res.send("borrado");
      console.log(book);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
