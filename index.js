const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blog:Hello321@cluster0-xckvl.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true }).then(() => console.log('DB connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))