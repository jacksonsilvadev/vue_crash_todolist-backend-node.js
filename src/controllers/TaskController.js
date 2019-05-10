const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    async index(req, res) {
        try {
            const tasks = await Task.find({});
            return res.json(tasks);
        } catch (err) {
            return res.json(err);
        };
    },
    async show(req, res) {
        try {
            const task = await Task.findById(req.params.id);
            return res.json(task);
        } catch (err) {
            return res.json(err);
        };
    },
    async store(req, res) {
        try {
            const task = await Task.create(req.body);
            return res.json(req.body);
        } catch (err) {
            return res.json(err);
        };
    },
    async update(req, res) {
        try {
            req.body.updatedAt = Date.now()
            const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            return res.json(task);
        } catch (err) {
            return res.json(err);
        };
    },
    async destroy(req, res) {
        try {
            const task = await Task.findByIdAndRemove(req.params.id);
            return res.json(task);
        } catch (err) {
            return res.json(err);
        };
    }
}