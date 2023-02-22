import express from 'express';

const app = express();

app.use(express.json())

const books = [
  {id: 1, "titulo": "Senhor dos anéis"},
  {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200).send("Curso de Node")
})

app.get('/books', (req, res) => {
  res.status(200).json(books)
})

app.post('/book', (req, res) => {
  books.push(req.body)
  res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/book/:id', (req, res) => {
  let index = searchBook(req.params.id)

  books[index].titulo = req.body.titulo
  res.json(books)
})

app.get('/book/:id', (req, res) => {
  let index = searchBook(req.params.id)

  res.json(books[index])
})

app.delete('/book/:id', (req, res) => {
  let index = searchBook(req.params.id)

  books.splice(index, 1)
  res.json(books)
})

function searchBook(id) {
  return books.findIndex(livro => livro.id == id)
}

export default app;