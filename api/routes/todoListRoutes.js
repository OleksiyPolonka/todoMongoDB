module.exports = app => {
  const todoList = require('../controller/todoListController');

  app.route('/tasks')
    .get(todoList.listAllTasks)
    .post(todoList.createATask);

  app.route('/tasks/:taskId')
    .get(todoList.readATask)
    .put(todoList.updateATask)
    .delete(todoList.deleteATask);
};
