const express = require('express');

const app = express();
const PORT = 8080; 

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
})

app.get('/hello-query', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

module.exports = app;