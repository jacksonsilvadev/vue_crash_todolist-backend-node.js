const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

// Aceitar json
app.use(express.json());
// Liberar dados para público
app.use(cors());

mongoose.connect('mongodb://localhost:27017/to_do_list_vue', {
    useNewUrlParser: true
});
requireDir('./src/models');

app.use('/', require('./src/routes'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor On || ' + PORT));