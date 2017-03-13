const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.listAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  })
};

exports.createATask = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  })
};

exports.readATask = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  })
};

exports.updateATask = (req, res) => {
  Task.findOneAndUpdate(req.params.taskId, { new: true }, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  })
};

exports.deleteATask = (req, res) => {
  Task.remove({id: req.params.taskId}, (err, task) => {
    if (err) res.send(err);
    res.json({ message: 'Task successfully deleted' });
  })
};
