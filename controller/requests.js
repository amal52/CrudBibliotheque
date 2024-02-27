const express = require('express');
const app = express(); 

// Define the port
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Pour stocker les Informations sur les livres

let Biblio = []; 

// GET request to fetch all books
app.get('/', (req, res) => {
  res.json(Biblio);
});

// POST request to add a new book
app.post('/add/books', (req, res) => {
  const newBook = req.body;
  Biblio.push(newBook);//ajoute le nouveau livre a la fin du tableau
  res.status(201).json(newBook);
});

// PUT request to update information about a book
app.put('/update/books/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  Biblio[id] = updatedBook;
  const BookTitle = updatedBook.title; // Supposons que le titre du livre est stocké dans une propriété "title"
  res.status(200).json({ message: `Book "${BookTitle}" information updated successfully` });
});

// DELETE request to remove a book from inventory
app.delete('/delete/books/:id', (req, res) => {
  const id = req.params.id;
  Biblio.splice(id, 1);
  res.status(200).json({ message: 'Book information deleted successfully' });
});

//port 
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
