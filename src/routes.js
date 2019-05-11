const express = require('express');
const routes = express.Router();
// const path = require('path');

const TaskController = require('./controllers/TaskController');


// routes.get('/', function (req, res) {
//     res.render(path.join(__dirname, '../client/public/index.html'))

// })
routes.get('/task', TaskController.index);
routes.get('/task/:id', TaskController.show);
routes.post('/task', TaskController.store);
routes.put('/task/:id', TaskController.update);
routes.delete('/task/:id', TaskController.destroy);

// routes.get('*', (req, res) => {
//     res.redirect('/task')
// });



module.exports = routes;