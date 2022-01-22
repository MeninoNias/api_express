const { application } = require('express');
const express = require('express');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Oi mundo, Ananias aqui.")
})

app.listen(port, () => {
    console.log(`API start at port ${port}`)
})