const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname))


// Aceitar json
app.use(express.json());

// Liberar dados para público
app.use(cors());

mongoose.connect('mongodb://localhost:27017/to_do_list_vue', {
    useNewUrlParser: true
});
requireDir('./src/models');

app.use('/api', require('./src/routes'))

app.use(history({
    verbose: true
}));
app.get('/', function (request, response, next) {
    response.send(__dirname + '/tasks/public/');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor On || ' + PORT));