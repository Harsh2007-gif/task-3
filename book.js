const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
];


router.get("/", (req, res) => {
  res.status(200).json(books);
});


router.post("/", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title: title,
    author: author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title;
  book.author = author;

  res.status(200).json(book);
});


router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.status(200).json({ message: "Book deleted successfully" });
});

module.exports = router;
