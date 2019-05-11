const express = require('express');
const serveStatic = require('serve-static')
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
// Nem sendo assim
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

app.use("/", serveStatic(path.join (__dirname, '/client/dist')))

// Tentei fazer isso que vi em um fórum, mas não funcionou
// app.use(history({
//     verbose: true
// }));

app.get('*', function (request, response, next) {
    response.sendFile(__dirname + '/client/dist/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(path.join (__dirname, '/client/dist')));