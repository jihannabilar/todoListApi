const express = require('express');
const app = express.Router();
const repository = require('../repos/TodoRepo');
app.get('/', (req, res) => {
    repository.findAll().then((todos) => {
        res.json(todos);
    }).catch((error) => console.log(error));
});

app.post('/:id', (req, res) => {
    const { kegiatan } = req.body;
    console.log(kegiatan)
    repository.create(kegiatan).then((todo) => { res.json(todo);
    }).catch((error) => console.log(error));
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    repository.deleteById(id).then((ok) => { console.log(ok);
        console.log(`Deleted record with id: ${id}`);
        res.status(200).json([]);
    }).catch((error) => console.log(error));
});

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const todo = { kegiatan: req.body.kegiatan, status: req.body.status};
    repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});

module.exports = app;