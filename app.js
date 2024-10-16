const express = require('express');
const app = express();

app.use(express.json());

let cafes = [{ id: 1, nombre: 'Café Expreso' }];

// Ruta GET /cafes
app.get('/cafes', (req, res) => {
  res.status(200).json(cafes);
});

// Ruta POST /cafes
app.post('/cafes', (req, res) => {
  const nuevoCafe = req.body;
  cafes.push(nuevoCafe);
  res.status(201).json(nuevoCafe);
});

// Ruta DELETE /cafes/:id
app.delete('/cafes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cafeIndex = cafes.findIndex(cafe => cafe.id === id);

  if (cafeIndex === -1) {
    return res.status(404).send();
  }

  cafes.splice(cafeIndex, 1);
  res.status(204).send();
});

// Ruta PUT /cafes/:id
app.put('/cafes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cafeActualizado = req.body;

  if (id !== cafeActualizado.id) {
    return res.status(400).send();
  }

  const cafeIndex = cafes.findIndex(cafe => cafe.id === id);
  if (cafeIndex !== -1) {
    cafes[cafeIndex] = cafeActualizado;
    res.status(200).json(cafeActualizado);
  } else {
    res.status(404).send();
  }
});

module.exports = app;
