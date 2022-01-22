const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/userRoute');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get("/", (req, res) => {
    res.send("Oi mundo, Ananias aqui.");
})

app.listen(port, () => {
    console.log(`API start at port ${port}`);
})